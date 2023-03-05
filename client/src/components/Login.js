import{ useState } from "react";
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import { Avatar, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import axios from "axios"
import {NavLink,useNavigate} from "react-router-dom"
import Cookies from "js-cookie";

const Login = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' }
    const avatarStyle = { backgroundColor: 'green' }
    const buttonStyle = { marginTop: '10px', width: "100%" }
    const typographyStyle = { marginTop: '20px' }
    const textfieldStyle = { marginTop: '10px' }

    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleChange=(e)=>{

        let name=e.target.name;
        let value=e.target.value;

        if(name==="email")
        {
            setEmail(value)
        }else if(name==='password'){
            setPassword(value)
        }
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
       const obj={email,password}
       
       try{
        const response=await axios.post('http://localhost:8090/api/user/login',obj)
        console.log(response);
        
        
        const token=response?.data?.data;
        console.log(token)
        Cookies.set("auth",token);
        navigate("/home")
       }catch(error)
       {
        console.log(error)
       }
       
    }

    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <LockPersonOutlinedIcon />
                    </Avatar>
                    <h2>Signin</h2>
                    <Typography gutterBottom>Please enter email and password to login</Typography>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <TextField style={textfieldStyle} fullWidth label="email" name="email" value={email} onChange={handleChange}  variant="standard" type="email" />
                    <TextField style={textfieldStyle} fullWidth label="password" name="password" value={password} onChange={handleChange}  variant="standard" type="password" />
                    <Button type="submit" variant="contained" color="primary" style={buttonStyle}>Login</Button>
                    <Typography style={typographyStyle}> Do you have an account ?
                        <NavLink to="/signup">
                            SignUp
                        </NavLink>
                    </Typography>
                    <Typography style={typographyStyle}>
                        Forget password ?
                        <NavLink to="/forgetpassword">
                            Click Here
                        </NavLink>
                    </Typography>
                </form>
            </Paper>
        </Grid>
    )
}
export default Login;