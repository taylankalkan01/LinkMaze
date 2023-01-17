import User from "../models/User";
import  { Request, Response } from "express";
import bcrypt from "bcrypt"

const registerUser = async (req:Request,res:Response) => {

    let user;
    const {email,password,firstName,lastName} = req.body
    try {
        //validation schema [TODO]
        //email check
        user = await User.findOne({email})
        if (user) {
            return res.status(400).json({
              error: true,
              message: "You cannot register, Email already exist",
            });
          }
           //hash passport
           const saltPassword = await bcrypt.genSalt(10);
           const hashPassword = await bcrypt.hash(password,saltPassword)

           //create a new user
           const data = new User({
            email,
            firstName,
            lastName,
            password:hashPassword
           })

            //send email [TODO]

            res.status(201).json({
                error:false,
                message: "Account Created Succesfully!",
                data: data
              });
    } catch (error) {
        res.status(500).json({ error: true, message: error });
    }
}

export default {registerUser}