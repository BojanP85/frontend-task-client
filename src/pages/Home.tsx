import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import CompaniesTable from "../components/CompaniesTable";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { getUserState } from "../redux/selectors/user";
import { LoggedUserModel } from "../types";

const drawerWidth = 240;

const Home = () => {
  const { user } = useSelector(getUserState);
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const { logout } = user;

  // Retrieving user data (name, surname) from localStorage
  const loggedUserString = localStorage.getItem("loggedUser");
  let loggedUserObject: LoggedUserModel = {
    name: "",
    surname: "",
  };
  if (loggedUserString) {
    loggedUserObject = JSON.parse(loggedUserString);
  }

  useEffect(() => {
    if (logout) {
      navigate("/signin");
    }
  }, [logout, navigate]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Sidebar
        loggedUserObject={loggedUserObject}
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <CompaniesTable drawerWidth={drawerWidth} />
    </Box>
  );
};

export default Home;
