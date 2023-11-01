import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import MenuIcon from "@mui/icons-material/Menu"
import Toolbar from "@mui/material/Toolbar"
import { Button } from "../components/Button"
import theme from "../styles/theme"
import { useLocation, useNavigate, Location} from "react-router-dom"
import { Link } from "react-router-dom"

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  "Home",
  "About Us",
  "Series",
  "Testimonials",
  // "FAQs",
  "Contact Us",
];

export default function DrawerAppBar(props: Props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [activeNavItem, setActiveNavItem] = React.useState(navItems[0])
  const location = useLocation() as Location
  const slackUrl = "https://join.slack.com/t/lawxtech/shared_invite/zt-20u7mvfqu-EWVec2Qip3XhYoUyVtyvpA"

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navigate = useNavigate()
  
  const setActiveItem = (path: string) => {
    let newItem = "Home"
    if (path === "/") {
      newItem = "Home";
    } else {
      for (const item of navItems) {
        if (path.includes(item.toLowerCase().replace(/\s+/g, "-"))) {
          newItem = item;
          break
        }
      }
    }
    setActiveNavItem(newItem)
  };

  React.useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

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
    window !== undefined ? () => window().document.body : undefined

    const redirectToSlack = () => {
      if (typeof window !== 'undefined') {
        (window as any).open("https://join.slack.com/t/lawxtech/shared_invite/zt-20u7mvfqu-EWVec2Qip3XhYoUyVtyvpA", "_blank");
      }
    }

  return (
    <Box sx={{ display: "flex", marginBottom: '5em' }}>
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
          <Link to="/">
            <img
              src={require("../assets/logo/logo_2.JPG")}
              alt="Logo"
              style={{ maxHeight: "5em", marginLeft: "2em" }}
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
                  item === activeNavItem
                    ? theme.palette.background.paper
                    : "inherit",
              }}
              onClick={() => {
                setActiveNavItem(item);
                if (item === "Testimonials") {
                  navigate('/#testimony');
                } else {
                  navigate(
                    `/${
                      item === "Home"
                        ? ""
                        : item.toLowerCase().replace(/\s+/g, "-")
                    }`
                  );
                }
              }}
              
            >
              <ListItemText
                primary={
                  <span>
                    {item}
                    {item === activeNavItem && (
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
      <a href={slackUrl} target="_blank" rel="noopener noreferrer">
          <Button type="primary" onClick={redirectToSlack}>
            JOIN COMMUNITY
          </Button>
          </a>
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