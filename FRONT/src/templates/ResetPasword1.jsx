import React from 'react';
import '../styles/Styles.scss'

import logo from '@logos/logo.jpeg'

const ResetPasword1 = () => {
    return (
        <div className="login">
  <div className="form-container">
    <img src={logo} alt="logo" className="logo" />
    <h1 className="title">Create a new password</h1>
    <p className="subtitle">Enter a new password for you account</p>
    <form className="form" action="./2-screen-account.html">
      <label htmlFor="password">Pasword</label>
      <input type="password" id="password" placeholder="*********" className="input input-password" />
      <label htmlFor="password">Pasword</label>
      <input type="password" id="password" placeholder="*********" className="input input-password" />
      <input type="submit" defaultValue="Confirm" className="primary-button login-button" />
    </form>
  </div>
</div>

    );
};

export default ResetPasword1;