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
import {  FormControl,  Input,  InputAdornment,  InputLabel,  Link,  Modal,  OutlinedInput,  Stack,  TextField,} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const pages = ["Ceramica","Impresion3D","Sublimacion","Madera","Insumos","Novedades","Mas"];
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

function ResponsiveAppBar() {
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
  const [showComponent, setShowComponent] = React.useState(false);

  const [openModal1, setOpenModal1] = React.useState(false);
  const handleOpenModal1 = () => setOpenModal1(true);
  const handleCloseModal1 = () => setOpenModal1(false);

  const [openModal2, setOpenModal2] = React.useState(false);
  const handleOpenModal2 = () => setOpenModal2(true);
  const handleCloseModal2 = () => setOpenModal2(false);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "rgba(186, 178, 178, 1)" }}>
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
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
              onClick={handleClose}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <Button
              key={"registrar"}
              onClick={() => {
                handleCloseNavMenu();
                setShowComponent(true);
                handleOpenModal1();
              }}
              sx={{ my: 2, color: "Black", display: "block" }}
            >
              Iniciar Sesion
            </Button>
            <Modal
              open={openModal1}
              onClose={handleCloseModal1}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <img
                  src="/logo.png"
                  alt="logo"
                  style={{ width: "85px", height: "auto" }}
                />
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Iniciar Sesion
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  ¿No tienes cuenta?
                  <Button
                    disableElevation
                    disableTouchRipple
                    sx={{
                      color: "black",
                      padding: "0px",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    <Link
                      padding="10px"
                      color="error"
                      underline="none"
                      onClick={() => {
                        handleCloseModal1();
                        handleOpenModal2();
                      }}
                    >
                      Registrate
                    </Link>
                  </Button>
                </Typography>

                <TextField
                  helperText=" "
                  id="demo-helper-text-aligned-no-helper"
                  sx={{ m: 0, width: "28ch", marginTop: "12px" }}
                  label="Email"
                  color="error"
                />

                <FormControl
                  variant="outlined"
                  component="form"
                  noValidate
                  autoComplete="off"
                  color="error"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Contraseña
                  </InputLabel>
                  <OutlinedInput
                    sx={{ m: 0, width: "25ch" }}
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                  <Box sx={{ marginTop: "16px" }}>
                    <Stack spacing={7} direction="row">
                      <Button href="/" variant="outlined" color="error">
                        Volver
                      </Button>
                      <Button variant="contained" color="error">
                        Iniciar
                      </Button>
                    </Stack>
                  </Box>
                </FormControl>
              </Box>
            </Modal>

            <Button
              key={"soyNuevo"}
              onClick={() => {
                handleCloseNavMenu();
                handleOpenModal2();
              }}
              sx={{ my: 2, color: "Black", display: "block" }}
            >
              Soy nuevo
            </Button>
            <Modal
              open={openModal2}
              onClose={handleCloseModal2}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <img
                  src="/logo.png"
                  alt="logo"
                  style={{ width: "85px", height: "auto" }}
                />
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Bienvenido a Lets Print
                </Typography>

                <TextField
                  helperText=" "
                  id="demo-helper-text-aligned-no-helper"
                  sx={{ m: 0, width: "28ch", marginTop: "12px" }}
                  label="Email"
                  color="error"
                />

                <FormControl
                  variant="outlined"
                  component="form"
                  noValidate
                  autoComplete="off"
                  color="error"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Contraseña
                  </InputLabel>
                  <OutlinedInput
                    sx={{ m: 0, width: "25ch" }}
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                  <Box sx={{ marginTop: "16px" }}>
                    <Stack spacing={1} direction="row">
                      <Button href="/" variant="outlined" color="error">
                        Volver
                      </Button>
                      <Button variant="contained" color="error">
                        Registrarse
                      </Button>
                    </Stack>
                  </Box>
                </FormControl>
              </Box>
            </Modal>
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
