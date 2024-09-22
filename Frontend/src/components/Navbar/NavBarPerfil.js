import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import InventoryIcon from "@mui/icons-material/Inventory";
import AddIcon from "@mui/icons-material/Add";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Perfil from "../User/Perfil.js"; // importar el componente "Perfil"
import Clientes from "../User/Clientes.js"; // importar el componente "Perfil"
import Inventario from "../User/Inventario.js";
import NewProduct from "../User/NexProduct.js";
import Ventas from "../User/Ventas.js";
import { styled } from '@mui/material/styles';
import { pink, red } from "@mui/material/colors";

export default function NavBarPerfil() {
  const [value, setValue] = React.useState();
  const StyledBottomNavigationAction = styled(BottomNavigationAction)(({ theme }) => ({
    '&.Mui-selected': {
      color: theme.palette.primary.main,
    },
  }));

  return (
    <Box sx={{ width: 500, marginTop: "100px" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          console.log(newValue);
          setValue(newValue);
        }}
        
      >
        <BottomNavigationAction
          label="Perfil"
          icon={<PersonIcon />}
          value={0}
          sx={{ color: red[500] }}
        />
        <BottomNavigationAction
          label="Clientes"
          icon={<GroupIcon />}
          sx={{ color: red[500] }}
          value={1}
        />
        <BottomNavigationAction
          label="Inventario"
          icon={<InventoryIcon />}
          sx={{ color: red[500] }}
          value={2}
        />
        <BottomNavigationAction
          label="Producto Nuevo"
          icon={<AddIcon />}
          sx={{ color: red[500] }}
          value={3}
        />
        <BottomNavigationAction
          label="Ventas"
          icon={<ShoppingBasketIcon />}
          sx={{ color: red[500] }}
          value={4}
        />
      </BottomNavigation>
      {value === 0 ? (
        <Perfil />
      ) : value === 1 ? (
        <Clientes />
      ) : value === 2 ? (
        <Inventario />
      ) : value === 3 ? (
        <NewProduct />
      ) : value === 4 ? (
        <Ventas />
      ) : null}
    </Box>
  );
}

Ventas;
