import { User } from "../models";
import { Op } from "sequelize";
import { queryResponsesFormatter } from "../../helpers/responseFormater";

export const createUser = async (userInput) => {
  let user = await User.create({
    password_hash: userInput.password_hash,
    username: userInput.username,
    email: userInput.email,
  });

  return queryResponsesFormatter("success", {
    id: user.id,
    email: user.email,
  });
};

export const findUser = async (userInput) => {
  
  let user = await User.findOne({
    where: {
      [Op.or]: [{ username: userInput.username }, { email: userInput.email }],
    },
  });
  if (user) {
    return queryResponsesFormatter("success", {
      id: user.id,
      email: user.email,
      password_hash: user.password_hash,
    });
  }
  return queryResponsesFormatter("error", {});
};
