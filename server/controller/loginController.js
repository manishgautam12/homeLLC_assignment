import signupModel from "../models/signupModel.js";
import loginModel from "../models/loginModel.js";
import { responseData } from "../utils/otherfunction.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

const loginController=async(req,res)=>{
 signupModel.find({email:req.body.email})
 .exec()
 .then(result=>{
   if(result.length<1){
    responseData(res, "", 401, false, "Invalid User"); 
   }
    bcrypt.compare(req.body.password,result[0].password,(err,docs)=>{
        if(!docs){
            responseData(res, "", 401, false, "Invalid password")
        }
        if(docs){
            const token = Jwt.sign({
                email: result[0].email,
             },
                process.env.LOGIN_KEY,
                {
                   expiresIn: "24h"
                }
             );
             const loginUserData=new loginModel({
                email:req.body.email,
                loginToken:token
             })
             loginUserData.save()
             .then(ans=>{
                responseData(res, "logIn successfull", 200, true, "",token)
             })
             .catch(err=>{
                responseData(res, "", 401, false, "login failed")
             })
        }
    })
 })
 .catch(err=>{
    responseData(res, "", 401, false, "server problem"); 
 })
}
export default loginController;