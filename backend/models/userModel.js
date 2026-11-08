import mongoose from "mongoose"
const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cartData:{type:Object,default:{}}
},{minimize:false})


//MongoDB will automatically generate _id
//Checks whether Mongoose has already registered a model named user.

//If the model doesn't exist, create it using userSchema.
const userModel=mongoose.models.user || mongoose.model("user",userSchema);
export  default userModel;