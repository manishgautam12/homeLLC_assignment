import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from '../../images/logo.png';
const Sidebar = () => {
    const linkStyle = { textDecoration: 'none', color: 'black' }
    const gridStyle = { margin: 'auto', textAlign: 'center' }
    return (
        <Grid style={gridStyle} >
            <Grid>
                <img src={logo} width="250px" height="150px" alt="image not  upload" />
                <Typography variant="h6" component="h6" mt={10}>
                    Insights on real estate
                </Typography>
            </Grid>
            <hr />
            <Grid >
                <Typography variant="subtitle2" component="h6">
                    <Link style={linkStyle}>NATIONAL INSIGHTS</Link>
                </Typography>
                <Typography variant="subtitle2" component="h6">
                    <Link style={linkStyle}>LOCAL INSIGHTS</Link>
                </Typography>
            </Grid>
            <hr />
        </Grid>
    )

};
export default Sidebar;