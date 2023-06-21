import express from "express";
import {
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  getAllUser,
} from "../../Controller/User/users.js";



const router =  express.Router();


/////post
router.post("/", createUser);

// ////update
// router.put("/:id", verifyUser,updateUser);

// ///delete
// router.delete("/:id",verifyUser, deleteUser);

// ///get a single user
// router.get("/:id",verifyUser, getUserById);

// ///get All Users
// router.get("/", verifyAdmin,getAllUser);

export default router;