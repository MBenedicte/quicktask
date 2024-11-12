import { User } from "../models";

export const createUser = async (user) => {
  try {
    let createdUser = await User.create({ ...user });
    return createdUser;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
};
