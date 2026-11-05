import express from "express";
import { addFood, listFood,removeFood } from "../controllers/foodController.js";
import multer from "multer";

const foodRouter=express.Router();
//using this roter we will create git,post methods


//image storing engine
const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload=multer({storage:storage})
foodRouter.post("/add",upload.single("image"),addFood)//used to send data on server where data is processed after that we will get the response
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood);
export default foodRouter;


