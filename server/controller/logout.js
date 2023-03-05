import loginModel from "../models/loginModel.js";
import { responseData } from "../utils/otherfunction.js";

const logout=async(req,res)=>{
    loginModel.find({loginToken:req.body.loginToken})
    .exec()
    .then(result=>{
        if(result.length<1){
            responseData(res, "", 401, false, "please login first");  
        }
        if(result.length>0){
            loginModel.findByIdAndDelete(result[0]._id,(err,docs)=>{
                if(err){
                    console.log(err);
                }
                if(!err){
                    responseData(res, "logout successfully", 200, true, ""); 
                }
            })
        }
    })
    .catch(err=>{
        responseData(res, "", 401, false, "server problem");
    })
}
export default logout;