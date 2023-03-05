import  express  from "express";
import forgetPasswordController from "../controller/forgetPasswordController.js";
import loginController from "../controller/loginController.js";
import logout from "../controller/logout.js";
import signUpController from "../controller/signUpController.js";
const router=express.Router();

router.post("/signup/",signUpController)
router.post("/login/",loginController)
router.put("/forgetPassword/",forgetPasswordController)
router.post("/logout/",logout)
export default router;