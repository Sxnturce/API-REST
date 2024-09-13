import Router from "express";
import { readUsers, createUser, showUser, updateUser, deleteUser } from "../controllers/usersController.js";

const router = Router();

router.route("/").get(readUsers).post(createUser)
router.route("/:id").get(showUser).put(updateUser).delete(deleteUser)

export default router