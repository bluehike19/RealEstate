import express from 'express';
import { updateUser, createUser, deleteUser, getUser, getUsers } from '../controllers/user';
import { verifyToken } from '../utils/verifyToken';

const router = express.Router()

//CREATE
router.post("/", createUser)

router.get("/checkAuthentication", verifyToken, (req,res,next)=> {
    res.send("hello user, you are logged in and you can delete your account")
})

//UPDATE
router.put("/:id", updateUser)

//DELETE
router.delete(":/id", deleteUser)

//GET
router.get(":/id", getUser)

//GET ALL
router.get("/", getUsers)

export default router;