import mongoose from "mongoose";


const foodSchema = new mongoose.Schema({
    name: {type:String,required:true},//if string then only works due to true
    description: {type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true}
})

const foodModel = mongoose.models.food || mongoose.model("food",foodSchema);
//mongoose.mode.food ||-->this is written so that again and again model will not form is once there is will be used if not then creaet new
export default foodModel;