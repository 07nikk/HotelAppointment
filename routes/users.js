import express from 'express';
import {deleteuser, getAllusers, getuser, updateuser } from '../controllers/users.js';
import { verifyToken, verifyUser, verifyAdmin } from '../utils/verifytoken.js';
const router = express.Router();

//authentication
// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("Hello user you are logged in!");
// });

// router.get("/checkUser/:id",verifyUser,(req,res,next)=>{
//     res.send("Hello user, you are logged in and you can delete the account!");
// });

// router.get("/checkAdmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("Hello Admin, you are logged in and you can delete any account!");
// });

//Update
router.put("/:id", verifyUser, updateuser);

//Delete
router.delete("/:id", verifyUser, deleteuser);

//Get
router.get("/:id",verifyUser,  getuser);

//GetAll
router.get('/', verifyAdmin, getAllusers);

export default router;