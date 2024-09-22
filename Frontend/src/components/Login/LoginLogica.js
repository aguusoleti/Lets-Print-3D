const handleLogin = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const validationResponse = await fetch(
      "http://localhost:5000/api/client/validate",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }
    );

    const validationData = await validationResponse.json();
    if (!validationData || !validationData.validated) {
      window.location.href = "/Validate";
      return;
    }

    const response = await fetch("http://localhost:5000/api/client/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const info = await response.json();
    const token = info.token;
    const data = info.data;
    console.log(data + " Soy data");
    if (response.ok) {
      localStorage.setItem("token", token);
      localStorage.setItem("info", JSON.stringify(data));
      window.location.href = "/";
    } else {
      const errorData = await response.json();
      console.error(errorData);
      alert("Ocurrió un error al iniciar sesión aca");
    }
  } catch (error) {
    console.error(error);
    alert(error);
  }
};

export default handleLogin;
