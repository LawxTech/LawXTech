import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#02807E", // Main shade of primary color
    },
    secondary: {
      main: "#113167", // Main shade of secondary color
    },
    background: {
      default: "#ffffff", // Default background color
      paper: "#113167", // Background color for paper surfaces
    },
    text: {
      primary: "#000000", // Primary text color
      secondary: "#333333", // Secondary text color
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",

    // Headings styles
    h1: {
      fontSize: "4rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    h2: {
      fontSize: "3rem",
      fontWeight: "bold",
      marginBottom: "0.75rem",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "0.625rem",
    },

    // Body copy styles
    body1: {
      fontSize: "1rem",
      color: "#000",
    },
    body2: {
      fontSize: "0.875rem",
      color: "#000",
    },

    // Button styles (optional)
    button: {
      textTransform: "uppercase",
      fontWeight: "bold",
    },
  },
});

export default theme;
