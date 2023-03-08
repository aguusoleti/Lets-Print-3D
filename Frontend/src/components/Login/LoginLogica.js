 const handleLogin = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const info = await response.json();
      const token = info.token
      localStorage.setItem('token', token);
      localStorage.setItem('info', info.data);
      console.log(info.data.name)
      console.log(info.data.token)
      if (response.ok) {
        // La petición fue exitosa, redireccionar al usuario a la página de inicio
        alert("Todo ok");
        // window.location.href = "/";

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