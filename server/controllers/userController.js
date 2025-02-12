import { createUser, findUser } from "../database/queries";
import { requestResponseFormatter } from "../helpers/responseFormater.js";
import * as codes from "../constants/status_codes.js";
import bcrypt from "bcryptjs/dist/bcrypt.js";
import { Op } from "sequelize";
import jwt from "jsonwebtoken";
require("dotenv").config({ path: __dirname + "/../../.env" });


const hashPassword = async function (password) {
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
};

export const checkAndCreateUser = async (req, res, next) => {
  const { username, email } = req.body;
  try {
    // Check if a user with the given username or email exists
    const { type } = await findUser({ username, email });

    if (type === "success") {
      // If the user exists, send a message in the response
      res.status(codes.CONFLICT).send(
        requestResponseFormatter("error", {
          code: codes.CONFLICT,
          message: "User exists",
        })
      );
    } else next();
  } catch (error) {
    console.error(error);
    res.status(codes.INTERNAL_SERVER_ERROR).send(
      requestResponseFormatter("error", {
        code: codes.INTERNAL_SERVER_ERROR,
        message: `Something went wrong ${error.message}`,
      })
    );
  }
};

export const createUserController = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    let password_hash = await hashPassword(password);

    let { data } = await createUser({
      username,
      email,
      password_hash,
    });

    res.status(codes.CREATED).send(
      requestResponseFormatter("success", {
        data,
        message: "User created successfully",
        code: codes.CREATED,
      })
    );
  } catch (error) {
    console.error("Error when creation a user", error);
    res.status(codes.INTERNAL_SERVER_ERROR).send(
      requestResponseFormatter("error", {
        code: codes.INTERNAL_SERVER_ERROR,
        message: `Something went wrong ${error.message}`,
      })
    );
  }
};


export const userSignIn = async (req, res) => {
  const { usernameOrEmail, password  } = req.body;
  try {
    if(usernameOrEmail && password){
      // Check if a user with the given email or username exists
      const { type } = await findUser({ where:{
        [Op.or]: [{ username: usernameOrEmail }, { email: usernameOrEmail }]}});
      if (!type) {
        res.status(codes.NOT_FOUND).send(
          requestResponseFormatter("error", {
          code: codes.NOT_FOUND,
          message: "User not found",})
        ); 
      } 
      else{
       const passwordIsValid = await bcrypt.compareSync(password, type.password);
        if(passwordIsValid){
          const token = jwt.sign({ id: type.id }, process.env.JWT_SECRET, {
            expiresIn: "1h"});
          res.status(codes.OK).send(
            requestResponseFormatter("error", {
            code: codes.OK,
            message: "User logged in successfully", token})
          );
        }
        else{
          res.status(codes.UNAUTHORIZED).send(
            requestResponseFormatter("error", {
            code: codes.UNAUTHORIZED,
            message: "Please enter your email and password",})
          );
        }
      };
    }
    else{
      res.status(codes.BAD_REQUEST).send(
        requestResponseFormatter("error", {
        code: codes.BAD_REQUEST,
        message: "Sign up to create an account",})
      );
    }
  } catch (error) {
    console.error(error);
    res.status(codes.INTERNAL_SERVER_ERROR).send(
      requestResponseFormatter("error", {
        code: codes.INTERNAL_SERVER_ERROR,
        message: `Something went wrong ${error.message}`,
      })
    );
  }
};

