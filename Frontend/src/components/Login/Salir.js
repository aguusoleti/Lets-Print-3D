
const Salir = async () => {
    // const localStorage = new LocalStorage('./scratch');
     
      try {
        if(localStorage.setItem('token', token)){
            localStorage.setItem('token', null)
        }
        if(localStorage.setItem('info', JSON.stringify(data))){
            localStorage.setItem('info', null)
        }
           window.location.href = "/Ceramica";
      } catch (error) {
        console.error(error);
      }
    };
    
    export default Salir
  