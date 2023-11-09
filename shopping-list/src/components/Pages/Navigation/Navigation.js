import * as React from "react";
import { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MyList from "../../MyList/MyList";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
const routes_client = [
  {
    text: "Home",
    path: "/",
    id: "1",
    icon: <HomeIcon />,
  },
  {
    text: "Add your own category ",
    path: "/addnewcategory",
    id: "2",
    icon: <AddIcon />,
  },
  {
    text: "Your last list",
    path: "/lastlist",
    id: "3",
    icon: <ReceiptLongIcon />,
  },
];
const routes_admin = [
  {
    text: "Home",
    path: "/",
    id: "1",
    icon: <HomeIcon />,
  },
  {
    text: "Add a category ",
    path: "/addnewcategory",
    id: "2",
    icon: <AddIcon />,
  },
  {
    text: "Add new client",
    path: "/addnewclientform",
    id: "1",
    icon: <AddIcon />,
  },
];

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Navigation = (props, children) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showList, setShowList] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("authenticated")) {
      setLoggedIn(true);
    }
  }, []);
  const onShowCart = () => {
    setShowList(true);
  };
  const onCloseCart = () => {
    setShowList(false);
  };
  const logOutHandler = () => {
    localStorage.removeItem("authenticated");
    setLoggedIn(false);
    navigate("/login");
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const nav = (r) => {
    navigate(r);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          {loggedIn && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Your shopping list
          </Typography>

          {loggedIn && (
            <>
              {showList && <MyList onClose={onCloseCart} />}
              <ShoppingCartIcon onClick={onShowCart} />
            </>
          )}
          {loggedIn && (
            <Button color="inherit" onClick={logOutHandler}>
              Log Out
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {routes_client.map((route) => (
            <ListItem
              key={route.id}
              disablePadding
              onClick={() => nav(route.path)}
              text={route.text}
            >
              <ListItemButton>
                <ListItemIcon>{route.icon}</ListItemIcon>
                <ListItemText primary={route.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {routes_admin.map((route) => (
            <ListItem
              key={route.id}
              disablePadding
              onClick={() => nav(route.path)}
              text={route.text}
            >
              <ListItemButton>
                <ListItemIcon>{route.icon}</ListItemIcon>
                <ListItemText primary={route.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Main open={open}>
        <DrawerHeader />
        <AppRoutes loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      </Main>
    </Box>
  );
};
export default Navigation;
