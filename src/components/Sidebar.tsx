import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";

import { signOutUser } from "../redux/slice/user";
import {
  DrawerIconStyle,
  DrawerOptionButtonStyle,
  LogoutIconStyle,
} from "../styles/mui";
import { SidebarProps } from "../types";

const drawerMainOptions = [
  {
    text: "Home",
    icon: require("../assets/icons/home.png"),
    path: "/",
  },
  {
    text: "Izveštaji",
    icon: require("../assets/icons/izvestaji.png"),
    path: "/izvestaji",
  },
  {
    text: "Matični podaci",
    icon: require("../assets/icons/maticni_podaci.png"),
    path: "/maticni_podaci",
  },
  {
    text: "Obrasci",
    icon: require("../assets/icons/obrasci.png"),
    path: "/obrasci",
  },
  {
    text: "Izloguj se",
    icon: "",
    path: "/logout",
  },
];

const drawerMostUsedOptions: string[] = Array(7).fill("Lorem Ipsum");

const Sidebar = ({
  loggedUserObject,
  drawerWidth,
  mobileOpen,
  handleDrawerToggle,
}: SidebarProps) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const handleDrawerIconClick = (path: string) => {
    switch (path) {
      case "/logout":
        localStorage.removeItem("loggedUser");
        dispatch(signOutUser());
        break;

      default:
        break;
    }
  };

  const drawer = (
    <div className="drawer">
      <Toolbar />
      <div className="drawer__user-profile">
        <img
          className="drawer__user-profile--pic"
          src={require("../assets/images/profile_pic.png")}
          alt="Profile pic"
        />
        <div className="drawer__user-profile--info">
          <span>
            {loggedUserObject.name} {loggedUserObject.surname}
          </span>
          <span>
            @{loggedUserObject.name}
            {loggedUserObject.surname}
          </span>
        </div>
      </div>
      <List>
        {drawerMainOptions.map((option, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              sx={DrawerOptionButtonStyle}
              onClick={() => handleDrawerIconClick(option.path)}
            >
              <ListItemIcon sx={DrawerIconStyle}>
                {option.path !== "/logout" ? (
                  <img src={option.icon} alt="Icon" />
                ) : (
                  <LogoutIcon sx={LogoutIconStyle} />
                )}
              </ListItemIcon>
              <ListItemText>
                <span
                  className="drawer__text"
                  style={{
                    color: option.path === pathname ? "#045450" : "#171725",
                  }}
                >
                  {option.text}
                </span>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <h5 className="drawer__most-used-options-title">Najčešće korišćene</h5>
      <List>
        {drawerMostUsedOptions.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={DrawerOptionButtonStyle}>
              <ListItemIcon sx={DrawerIconStyle}>
                {index % 2 === 0 ? (
                  <img
                    src={require("../assets/icons/most_used_ev.png")}
                    alt="Icon"
                  />
                ) : (
                  <img
                    src={require("../assets/icons/most_used_jp.png")}
                    alt="Icon"
                  />
                )}
              </ListItemIcon>
              <ListItemText>
                <span className="drawer__text">{text}</span>
              </ListItemText>
              <span className="drawer__badge">
                {Math.floor(Math.random() * 100) + 50}
              </span>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
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
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
