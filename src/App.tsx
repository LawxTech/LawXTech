// App.tsx
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./Routes";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import MobileSidebar from "./components/MobileSidebar/MobileSidebar";

const App: React.FC = () => {
  const [openSideBar, setOpenSideBar] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header setOpenSideBar={setOpenSideBar} />

        {openSideBar && (
          <div className="">
            <MobileSidebar setOpenSideBar={setOpenSideBar} />
          </div>
        )}
        <div>
          <Routes />
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
