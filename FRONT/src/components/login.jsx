import React from "react";
import '../styles/Styles.scss'

const Login = () => {

  return (

<div className="login">
  <div className="form-container">
    <h1 className="account">Login</h1>
    <form className="form" action="./3-screen-edit.html">
      <label htmlFor="name" className="label">Name</label>
      <input type="text" id="name" placeholder="¿What is your name?" className="input input-name" />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="letsprint@gmail.com" className="input input-email" />
      <label htmlFor="password">Pasword</label>
      <input type="password" id="password" placeholder="*********" className="input input-password" />
      <div><input type="submit" defaultValue="Confirm" className="primary-button login-button" /></div>
    </form>
  </div>
</div>

  );
};

  export default Login;
  