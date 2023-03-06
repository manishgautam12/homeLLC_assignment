import { Avatar, Button, Grid } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
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
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));

    return (
        <Grid style={gridStyle}>
            <Box>
                <AppBar position="static">
                    <Toolbar>
                        {/* <Search>
                            <SearchIcon />
                        </Search> */}
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
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