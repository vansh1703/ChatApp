import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
    }
} , {timestamps : true}) // createdat and updatedat

const User = mongoose.model("user" , userSchema)
export default User 