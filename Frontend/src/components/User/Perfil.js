import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import handlePerfil from "./perfilLogic";

const Perfil = () => {
  const [perfilData, setPerfilData] = useState(null);

  useEffect(() => {
    const fetchPerfilData = async () => {
      try {
        const data = await handlePerfil();
        setPerfilData(data);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    };
    fetchPerfilData();
  }, []);

  return (
    <div>
      <div style={{ marginTop: "0px", textAlign: "center" }}>
        <Container>
          {perfilData && (
            <div
              style={{
                backgroundColor: "rgba(186, 178, 178, 1)",
                textAlign: "start",
                display: "inline-block",
                margin: "32px",
                borderRadius: "8px",
                padding: "50px",
                // width:"300px"
              }}
            >
              <Typography>Nombre</Typography>
              <TextField
                variant="outlined"
                id="name"
                style={{ width: "400px" }}
                value={perfilData.name}
                onChange={(e) =>
                  setPerfilData({ ...perfilData, name: e.target.value })
                }
              >
                {perfilData.name}
              </TextField>
              <Typography>Apellido</Typography>
              <TextField
                id="lastName"
                variant="outlined"
                style={{ width: "400px" }}
                value={perfilData.lastName}
                onChange={(e) =>
                  setPerfilData({ ...perfilData, lastName: e.target.value })
                }
              />

              <Typography>Email</Typography>

              <TextField
                variant="outlined"
                style={{ width: "400px" }}
                id="email"
                value={perfilData.email}
              >
                {perfilData.email}
              </TextField>
              <Typography>Telefono</Typography>
              <TextField
                id="celphone"
                variant="outlined"
                value={perfilData.celphone}
                style={{ width: "400px" }}
                onChange={(e) =>
                  setPerfilData({ ...perfilData, celphone: e.target.value })
                }
              >
                {perfilData.email}
              </TextField>
              <Typography>Direccion</Typography>
              <TextField
                multiline
                id="adress"
                rows={2}
                style={{ width: "400px" }}
                value={perfilData.adress}
                onChange={(e) =>
                  setPerfilData({ ...perfilData, adress: e.target.value })
                }
              />
              <div
                style={{
                  backgroundColor: "rgba(255, 0, 0, 0.5)",
                  textAlign: "center",
                  borderRadius: "8px",
                  width: "100px",
                  marginTop: "20px",
                  marginLeft: "auto",
                  marginBottom: "0px",
                }}
              >
                <Button sx={{ color: "black" }}>Aceptar</Button>
              </div>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default Perfil;
