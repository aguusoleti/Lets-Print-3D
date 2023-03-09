import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { color } from "@mui/system";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import handleLogin from "../Login/LoginLogica.js";

import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  Modal,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import useGetProducts from "../../hooks/useGetProducts.js";

const pages = [
  "Ceramica",
  "Impresion3D",
  "Sublimacion",
  "Madera",
  "Insumos",
  "Novedades",
  "Mas",
];
const settings = ["Perfil", "Carrito", "Salir"];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "16px",
  textAlign: "center",
  paddingTop: "24px",
  paddingback: "24px",
  paddingLeft: "0px",
  paddingRight: "0px",
  // backgroundColor:"#rgba(186, 178, 178)"
};



function ResponsiveAppBarLogin() {
  // const localStorage = new LocalStorage('./scratch');
  const data = JSON.parse(localStorage.getItem("info"));
 
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  
  const userInfo = JSON.parse(localStorage.getItem("info"));
  
    return (
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "rgba(186, 178, 178, 1)" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Button
              href="/"
              style={{
                backgroundColor: "rgba(186, 178, 178, 0)",
                padding: "0px",
              }}
              onClick={handleToggle}
            >
              <img
                src="/logo.png"
                alt="logo"
                style={{ width: "85px", height: "auto" }}
              />
            </Button>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
              onClick={handleClose}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Roboto",
                fontWeight: 700,
                letterSpacing: ".4rem",
                color: "red",
                textDecoration: "solid",
              }}
            ></Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="red"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".4rem",
                color: "red",
                textDecoration: "none",
              }}
            ></Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  href={`/${page}`}
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu();
                    handleToggle();
                  }}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    ":hover": {
                      backgroundColor: "red",
                      borderRadius: "10px",
                      color: "white",
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={open}
                onClick={handleClose}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
            </Box>
           

            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } ,margin: '10px', padding: '10px'}}>
            <Typography>Hola {userInfo.name} Bienvenido</Typography>

            <Tooltip title="">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
               <MenuIcon/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu} >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }

export default ResponsiveAppBarLogin;
