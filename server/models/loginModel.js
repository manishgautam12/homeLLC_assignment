import mongoose from "mongoose";

const loginModel=new mongoose.Schema({
email:{
    type:String,
    required:true
},
loginToken:{
    type:String,
    required:true
}
})
export default mongoose.model("logInData",loginModel,"logInData");