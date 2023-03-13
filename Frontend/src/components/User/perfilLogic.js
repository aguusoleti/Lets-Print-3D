

const handlePerfil = async () => {
  const info = JSON.parse(localStorage.getItem('info'));
  const email = info.email
    try {
      console.log(email + "soy info ")
      const response = await fetch(`http://localhost:5000/api/client/perfil?email=${email}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        
      });
      // response.json(response)
      const data = await response.json();
    return data;
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };
export default handlePerfil;
