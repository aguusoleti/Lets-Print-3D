import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  Modal,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import handleLogin from "../Login/LoginLogica.js";

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
  backgroundColor: "rgb(255, 255, 255)",
};
function IniciarRegistrar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [openModal1, setOpenModal1] = React.useState(false);
  const handleOpenModal1 = () => setOpenModal1(true);
  const handleCloseModal1 = () => setOpenModal1(false);

  const [openModal2, setOpenModal2] = React.useState(false);
  const handleOpenModal2 = () => setOpenModal2(true);
  const handleCloseModal2 = () => setOpenModal2(false);

  const [showComponent, setShowComponent] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
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
            id="email"
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
              id="password"
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
                <Button variant="contained" color="error" onClick={handleLogin}>
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
  );
}

export default IniciarRegistrar;
