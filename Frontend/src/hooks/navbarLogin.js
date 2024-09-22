import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import IniciarRegistrar from "../components/Navbar/Iniciar-Registrar";
import AppBarLogin from "../components/Navbar/AppBarLogin.js"
function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div>
      {!isLoggedIn && (
        <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
          <IniciarRegistrar />
        </Box>
      )}
      {isLoggedIn && (
        <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
          <AppBarLogin />
        </Box>
      )}
      
      
    </div>
  );
}
export default Login