const fetchNavbarData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/navbar', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
  
      const data = await response.json();
      return data; // Devuelve los datos obtenidos
    } catch (error) {
      console.error("Error al obtener la data del Navbar:", error);
      throw error; // Lanza el error para manejarlo donde se invoque la función
    }
  };
  
  export { fetchNavbarData };
  