// App.tsx
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./Routes";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <main className="mt-18">
          <Routes />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
