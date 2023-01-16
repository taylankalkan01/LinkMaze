import mongoose, { Document } from "mongoose";


export interface User extends Document{
    email: string
    firstName: string
    lastName: string
    password: string
    verificationCode:string
    verified:boolean
}

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    verificationCode:{type:String},
    verified:{type:Boolean,default:false}

})

const user = mongoose.model<User>("user", userSchema);

export default user;