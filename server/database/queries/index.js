import { User } from "../models";
import { Op } from "sequelize";
import { queryResponsesFormatter } from "../../helpers/responseFormater";

export const createUser = async (userInput) => {
  try {
    let user = await User.create({
      password_hash: userInput.password_hash,
      username: userInput.username,
      email: userInput.email,
    });

    // return a success message when the user is created successfully
    return queryResponsesFormatter("success", {
      id: user.id,
      email: user.email,
    });
  } catch (error) {
    console.error("error", error);
    return queryResponsesFormatter("error", { cause: "UNKNOWN", message: error.message });
  }
};

export const findUser = async (userInput) => {
  try {
    let user = await User.findOne({
      where: {
        [Op.or]: [{ username: userInput.username }, { email: userInput.email }],
      },
    });
    if (user) {
      return queryResponsesFormatter("success", {
        id: user.id,
        email: user.email,
      });
    }
    return queryResponsesFormatter("error", {
      cause: "NOT-EXISTS",
      message: "User does not exists",
    });
  } catch (error) {
    console.error("error", error);
    return queryResponsesFormatter("error", { cause: "UNKNOWN", message: error.message });
  }
};
