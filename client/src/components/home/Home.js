import { Avatar, Button, Grid } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import Search from "material-ui-search-bar";
import Cookies from "js-cookie"
import axios from "axios"
import { useNavigate } from "react-router-dom";
const Home = () => {
    const gridStyle = { height: '1000px' }
    const navigate = useNavigate();
    const handleLogOut = async () => {
        const token = Cookies.get("auth")

        const obj = {
            "loginToken": token
        }
        try {
            const response = await axios.post("http://localhost:8090/api/user/logout", obj)
            console.log(response)
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Grid style={gridStyle}>
            <Box>
                <AppBar position="static">
                    <Toolbar>
                        <Search>
                            <SearchIcon />
                        </Search>
                        <Typography style={{ display: 'flex', marginLeft: 'auto' }}>
                            <Typography style={{ marginRight: '20px' }}>
                                <Avatar style={{ backgroundColor: "green", margin: 'auto' }} />
                            </Typography>
                            <Typography>
                                <Button onClick={handleLogOut} variant="contained" color="primary">Logout</Button>
                            </Typography>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Grid style={{ height: '100px' }}>
                <Typography style={{ paddingTop: '60px', paddingLeft: '30px' }} >
                    <span> Category:</span>
                    <span>NATIONAL INSIGHTS</span>
                </Typography>
            </Grid>
            <hr />
        </Grid >
    )
}
export default Home;