import { useState } from "react";
import * as React from "react";

import {
  Button,
  Modal,
  Box,
  Typography,
  Link,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Visibility,
  VisibilityOff,
  Stack,
} from "@mui/material";

export default function Login ()  {
  const [showComponent, setShowComponent] = React.useState(false);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [openModal1, setOpenModal1] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleOpenModal1 = () => {
    setOpenModal1(true);
  };

  const handleCloseModal1 = () => {
    setOpenModal1(false);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
  };

  // const handleLogin = () => {};
  return (
    <div>
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
            <Link href="/" padding="10px" color="error" underline="none">
              Registrate
            </Link>
          </Typography>

          <TextField
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            sx={{ m: 0, width: "28ch", marginTop: "12px" }}
            label="Email"
          />

          <FormControl
            variant="outlined"
            component="form"
            noValidate
            autoComplete="off"
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
    </div>
  )
}

