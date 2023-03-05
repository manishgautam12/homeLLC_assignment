import { Grid } from "@mui/material"
import Home from "./Home"
import Sidebar from "./Sidebar"

const Combinedhome=()=>{
return(
    <Grid container>
      <Grid sm={3} position="fixed"> <Sidebar/></Grid>
      <Grid sm={9} marginLeft='auto'><Home /> </Grid>
    </Grid>  
)
}
export default Combinedhome