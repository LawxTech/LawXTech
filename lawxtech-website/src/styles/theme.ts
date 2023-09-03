import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#02807E', // Main shade of primary color
    },
    secondary: {
      main: '#113167', // Main shade of secondary color
    },
    background: {
      default: '#f0f0f0', // Default background color
      paper: '#ffffff', // Background color for paper surfaces
    },
    text: {
      primary: '#000000', // Primary text color
      secondary: '#333333', // Secondary text color
    },
    // You can also define other palette options like error, info, warning, success
  },
  // ... Other theme configurations
})

export default theme;
