import signupModel from "../models/signupModel.js";
import bcrypt from "bcrypt";
import { responseData } from "../utils/otherfunction.js";

const forgetPasswordController = async (req, res) => {
    signupModel.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                responseData(res, "", 401, false, "Invalid Email")
            }
            if (user.length > 0) {
                if (user[0].firstName === req.body.firstName && user[0].lastName === req.body.lastName) {
                    bcrypt.hash(req.body.password, 10, function (err, hash) {
                        if (err) {
                            console.log(err);
                        }
                        signupModel.findByIdAndUpdate(user[0]._id, { password: hash }, function (err, docs) {
                            if (err) {
                                console.log(err);
                            } if(!err) {
                                console.log("password update successfull");
                            }
                        })
                    })
                    responseData(res, "password update success", 200, true, "")
                } else {
                    responseData(res, "", 401, false, "please enter valid innformation to reset password");
                }
            }
            
        })
        .catch(err => {
            responseData(res, "", 401, false, "server problem");
        })
}
export default forgetPasswordController;