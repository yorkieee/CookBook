import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Link, useNavigate } from "react-router-dom";
import { Logout } from "./Logout";
import MenuBookIcon from "@mui/icons-material/MenuBook";

import { FavoriteOutlined } from "@mui/icons-material";
import { AuthContext } from "../context/AuthContext";

// const { user } = React.useContext(AuthContext);
// const navigate = useNavigate();

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const navigate = useNavigate();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const linkStyle = {
    textDecoration: "none",
    color: "black",
    fontSize: "medium",
    font: "Helvetica",
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link style={linkStyle} to="/signup">
          Sign Up
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        {" "}
        <Link style={linkStyle} to="/login">
          Log In{" "}
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link style={linkStyle} to="/profile">
          Profile
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Logout />
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" color="primary">
          <MenuBookIcon />
          <Link style={linkStyle} to="/recipes">
            All Recipes
          </Link>
        </IconButton>
      </MenuItem>

      <MenuItem>
        <IconButton size="large" color="primary">
          <StickyNote2Icon />

          <Link style={linkStyle} to="/usersrecipe">
            My recipies
          </Link>
        </IconButton>
      </MenuItem>

      <MenuItem>
        <IconButton size="large" color="primary">
          <FavoriteOutlined />
          <Link style={linkStyle} to="/favourites">
            {" "}
            Favourite recipes
          </Link>
        </IconButton>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="primary"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(45deg, #455a64 , #263238)",
        }}
      >
        <Toolbar sx={{ color: "#eceff1" }}>
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          ></IconButton>
          <Button
            sx={{ color: "white" }}
            size="large"
            onClick={() => {
              navigate(`/`);
            }}
          >
            CookBook
          </Button>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};
