import {
  
  Button,
  Modal,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState, useEffect } from "react";
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
export default function Validate() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <div>
      <Modal
        open={open}
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
            La cuenta no esta Validada, por favor redirigete al mail para poder
            hacer la validacion
          </Typography>

          <Button  variant="outlined" color="error" onClick={() => setOpen(false)}>
            Volver
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
