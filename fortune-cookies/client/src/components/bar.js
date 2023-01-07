import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  Typography,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";

export function Bar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleToggle = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar style={appbar}>
        <Toolbar>
          <IconButton
            id="basic-button"
            style={iconbutton}
            edge="start"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleToggle}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{ "aria-labelledby": "basic-button" }}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/fortunes">Database</Link>
            </MenuItem>
          </Menu>
          <Typography style={typography}>Fortune Cookies</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

const appbar = {
  position: "relative",
  background: "transparent",
  boxShadow: "none",
};

const iconbutton = {
  mr: 2,
  color: "white",
};

const typography = {
  color: "white",
  textAlign: "center",
};
