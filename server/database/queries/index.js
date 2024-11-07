import { User } from "../models";

export const test = async (user) => {
  console.log({ user });
  try {
    let createdUser = await User.create({ ...user });
    console.log("user created", createdUser);
    return createdUser;
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
};
