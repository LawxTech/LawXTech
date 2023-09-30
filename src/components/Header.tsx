import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "../components/Button";
import theme from "../styles/theme";
import { useNavigate } from "react-router-dom";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  "Home",
  "About Us",
  "Series",
  "Testimonials",
  "FAQs",
  "Contact Us",
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(navItems[0]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const redirectToGoogle = () => {
    "https://www.google.com";
  };

  const navigate = useNavigate();

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: theme.palette.background.default }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <img
            src={require("../assets/logo/logo_2.JPG")}
            alt="Logo"
            style={{ maxHeight: "5em", marginLeft: "2em" }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              whiteSpace: "nowrap",
            }}
          >
            {navItems.map((item) => (
              <ListItem
                key={item}
                sx={{ mr: 2, color: theme.palette.text.primary }}
                disablePadding
              >
                <ListItemButton
                  sx={{
                    textAlign: "center",
                    color:
                      item === activeItem
                        ? theme.palette.background.paper
                        : "inherit",
                  }}
                  onClick={() => {
                    setActiveItem(item);
                    navigate(
                      `/${
                        item === "Home"
                          ? ""
                          : item.toLowerCase().replace(/\s+/g, "-")
                      }`
                    ); // Navigate to the route corresponding to the clicked item
                  }}
                >
                  <ListItemText
                    primary={
                      <span>
                        {item}
                        {item === activeItem && (
                          <span
                            style={{
                              content: '""',
                              display: "block",
                              width: "100%",
                              height: "0.15em",
                              backgroundColor: theme.palette.text.primary,
                              marginTop: "0.28em",
                            }}
                          ></span>
                        )}
                      </span>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </Box>
          <Box style={{ marginRight: "2em" }}>
            <Button type="primary" onClick={redirectToGoogle}>
              Join Community
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      {/* <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          
        </Typography>
      </Box> */}
    </Box>
  );
}
