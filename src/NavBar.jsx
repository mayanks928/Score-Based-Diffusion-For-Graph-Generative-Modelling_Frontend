import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Typography, Toolbar, AppBar, MenuItem } from "@mui/material";

const pages = [
  ["Home", ""],
  ["Samples", "main"],
  ["About Us", "aboutus"],
  //["Sign-up/Login", "login"],
];
import Logo from "./styles/logosvg.svg";

export default function NavBar() {
  const location = useLocation();
  return (
    <AppBar
      position="relative"
      sx={{
        bgcolor: "#0D0808",
      }}
    >
      <div className="websitelogo">
        <img className="logo" src={Logo} alt="Molecule Icon" />
        <h1>Di-fun-sion</h1>
      </div>
      <Toolbar sx={{ display: "flex", justifyContent: "space-evenly" }}>
        {pages.map((singlePage) => {
          return (
            <MenuItem key={singlePage[1]}>
              <Link to={`/${singlePage[1]}`}>
                <Typography
                  className={
                    location.pathname == "/" + singlePage[1]
                      ? "menu-item currentMenu-item"
                      : "menu-item"
                  }
                  sx={{ color: "#F7C1BB" }}
                  variant="h6"
                  textAlign="center"
                >
                  {singlePage[0]}
                </Typography>
              </Link>
            </MenuItem>
          );
        })}
      </Toolbar>
    </AppBar>
  );
}
