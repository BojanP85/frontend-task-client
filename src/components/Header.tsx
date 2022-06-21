import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { AppBarStyle } from "../styles/mui";
import { HeaderProps } from "../types";

const Header = ({ drawerWidth, handleDrawerToggle }: HeaderProps) => (
  <AppBar
    position="fixed"
    color="transparent"
    sx={{
      ...AppBarStyle,
      width: { sm: `calc(100% - ${drawerWidth}px)` },
      ml: { sm: `${drawerWidth}px` },
    }}
  >
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Header;
