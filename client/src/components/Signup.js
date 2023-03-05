import { useState } from "react";
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import { Avatar, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' }
    // const headerStyle = { margin: '0' }
    const avatarStyle = { backgroundColor: 'green', marginTop: '10px' }
    const buttonStyle = { marginTop: '10px' }
    const textfieldStyle = { marginTop: '10px' }
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
        const response=await axios.post('http://localhost:8090/api/user/signup',obj)
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
                    <Avatar style={avatarStyle}>
                        <AddReactionOutlinedIcon />
                    </Avatar>
                    <h2 >SignUp</h2>
                    <Typography gutterBottom>Please fill the form to create an account</Typography>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <TextField style={textfieldStyle} name="firstName" value={firstName} onChange={handleChange} fullWidth label="firstName" variant="standard" />
                    
                    <TextField style={textfieldStyle} name="lastName" value={lastName} onChange={handleChange} fullWidth label="lastName" variant="standard" />
                    
                    <TextField style={textfieldStyle} name="email" value={email} onChange={handleChange} fullWidth label="email" variant="standard" type="email" />

                    <TextField style={textfieldStyle} name="password" value={password} onChange={handleChange} fullWidth label="password" variant="standard" type="password" />
                    
                    <Button type="submit" variant="contained" color="primary" style={buttonStyle}>SignUp</Button>
                </form>
            </Paper>
        </Grid>
    )

}
export default Signup;