import { useState } from "react";



const handleLogin = async () => {
  // const localStorage = new LocalStorage('./scratch');
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try {
      const response = await fetch("http://localhost:5000/api/client/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const info = await response.json();
      const token = info.token
      const data= info.data
      localStorage.setItem('token', token);
      localStorage.setItem('info', JSON.stringify(data));
      
    
      if (response.ok) {
        // La petición fue exitosa, redireccionar al usuario a la página de inicio
       
        alert(info.name);
         window.location.href = "/";
        

      } else {
        // La petición no fue exitosa, mostrar un mensaje de error
        const errorData = await response.json();
        console.error(errorData);
        alert("Ocurrió un error al iniciar sesión");
      }
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error al iniciar sesión");
    }
  };
  
  export default handleLogin
