import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
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
import Button from "@mui/material/Button";
import theme from "../styles/theme";
import Toolbar from "@mui/material/Toolbar";
import { Container } from "@mui/material";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "About Us", "Series", "Contact Us"];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(navItems[0]);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

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
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow: "none",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Link
              to="/"
              style={{
                border: "1px solid red",
                marginLeft: "2em",
              }}
            >
              <img
                src={require("../assets/logo/logo_2.JPG")}
                alt="Logo"
                style={{
                  maxHeight: "4em",
                  border: "1px solid red",
                }}
              />
            </Link>
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
                      );
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
                                height: "0.1em",
                                backgroundColor: theme.palette.text.primary,
                                marginTop: "0.05em",
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
            <Button
              className="btn"
              variant="contained"
              size="medium"
              target="_blank"
              href="https://join.slack.com/t/lawxtech/shared_invite/zt-20u7mvfqu-EWVec2Qip3XhYoUyVtyvpA"
              sx={{
                fontWeight: "normal",
                fontSize: "0.8rem",
                marginRight: "2em",
              }}
            >
              Join Community
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
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
    </Box>
  );
}
