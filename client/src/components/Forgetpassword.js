import { useState } from "react";
import { Button, Grid, Paper, TextField, Typography} from "@mui/material";
import axios from "axios"
import {NavLink,useNavigate} from "react-router-dom"
const Forgetpassword = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' }
    const typographyStyle = { marginTop: '10px' }
    const buttonStyle = { marginTop: '10px' }

    const navigate=useNavigate();
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange=(e)=>{

        let name=e.target.name;
        let value=e.target.value;

        if(name==='firstName')
        {
            setFirstname(value)
        }else if(name==="lastName")
        {
            setLastname(value)
        }else if(name==="email")
        {
            setEmail(value)
        }else if(name==='password'){
            setPassword(value)
        }
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
       const obj={firstName,lastName,email,password}
       
       try{
        const response=await axios.put('http://localhost:8090/api/user/forgetPassword',obj)
        console.log(response)
        navigate("/login")
       }catch(error)
       {
        console.log(error)
       }
       
    }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <h2>Forget Password</h2>
                    <Typography gutterBottom>Enter the information associated with you account</Typography>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <TextField fullWidth label="firstName" name="firstName" value={firstName} onChange={handleChange} variant="standard" />
                    <TextField fullWidth label="lastName" name="lastName" value={lastName} onChange={handleChange} variant="standard" />
                    <TextField fullWidth label="email" name="email" value={email} onChange={handleChange} variant="standard" type="email" />
                    <TextField fullWidth label="new password"  name="password" value={password} onChange={handleChange} variant="standard" type="password" />
                    <Button type="submit" variant="contained" color="primary" style={buttonStyle}>Update password</Button>
                    <Typography style={typographyStyle}> Already have an account ?
                        <NavLink to="/login">
                            Login
                        </NavLink>
                    </Typography>
                </form>
            </Paper>
        </Grid>
    );
}
export default Forgetpassword;