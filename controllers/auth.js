import User from '../models/user.js';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import { createError } from '../utils/error.js';

export const register = async(req,res,next)=>{    
    try{
        const {username, email, password} = req.body;
        const newUser = new User({username, email, password});
        await newUser.save();
        res.status(201).send("User has been created successfully!");
    }
    catch(err){
        next(err);
    }
}

export const login = async (req,res,next)=>{
    try {
        const {username} = req.body;

        const user = await User.findOne({username});
        if(!user) return next(createError(404,"User not found!"));

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isPasswordCorrect) 
            return next(createError(400, "Wrong password or username!"))
        
        //generate sslopen key and use
        const token = jwt.sign({
            id: user._id, isAdmin: user.isAdmin}, 
            process.env.JWT
        );

        const { password ,isAdmin, ...others} = user._doc;
        res.cookie("access_token", token,{
            httpOnly: true
        }).status(200).json({others});

    } catch (error) {
        next(error);
    }
};
