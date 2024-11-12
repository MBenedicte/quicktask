import { createUser } from "../database/queries";

export const createUserController = async (req, res) => {
  try {
    let createdUser = await createUser(req.body);
    console.log("User created");
    res.status(200).send({ ...createdUser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Failed to create user" });
  }
};
