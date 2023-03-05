import signupModel from "../models/signupModel.js";
import bcrypt from "bcrypt";
import { responseData } from "../utils/otherfunction.js";
const signUpController=async(req,res)=>{
    const emailExist =(await signupModel.find({ email: { $eq: req.body.email } }).count()) > 0;
    if(emailExist){
        responseData(res, "", 401, false, "email already exist");
    }else{
        bcrypt.hash(req.body.password,10,(err,hash)=>{
            if(err){
                responseData(res, "", 401, false, "please enter a strong password");
            }else{
                const newUserData=new signupModel({
                  firstName:req.body.firstName,
                  lastName:req.body.lastName,
                  email:req.body.email,
                  password:hash,
                })
                newUserData.save()
                .then(result=>{
                    responseData(res, "user create successfull", 200, true, "");
                })
                .catch(err=>{
                    responseData(res, "", 401, false, "user creation failed");  
                })
            }
        }) 
    }
}
export default signUpController;