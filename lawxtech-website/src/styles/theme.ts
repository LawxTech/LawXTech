import { createTheme } from '@mui/material/styles';
import { Theme, makeStyles } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#02807E', // Main shade of primary color
    },
    secondary: {
      main: '#113167', // Main shade of secondary color
    },
    background: {
      default: '#ffffff', // Default background color
      paper: '#113167', // Background color for paper surfaces
    },
    text: {
      primary: '#000000', // Primary text color
      secondary: '#333333', // Secondary text color
    },
    // You can also define other palette options like error, info, warning, success
  },
  // ... Other theme configurations
})


// export const useStyles = makeStyles((theme: Theme)=>({
//   container:{
//       backgroundColor: theme.palette.background.paper,
//       padding: theme.spacing(8,0,6)
//   }
// }));

export default theme;
