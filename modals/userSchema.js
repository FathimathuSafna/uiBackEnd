import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

var Schema = mongoose.Schema
 var userSchema = new Schema({
    userName:{
        type:String,
        required:true, 
       },
       phoneNumber:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
 })

const User = mongoose.model("User",userSchema)
export default User

