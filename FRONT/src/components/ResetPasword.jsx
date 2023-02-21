import React from "react";
import '../styles/Styles.scss'

const ResetPasword = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src="../../public/images/logo-central.jpeg" alt="logo" className="logo" />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the pasword
        </p>
        <div className="email-image">
          <img src="../icons/email.svg" alt="email" />
        </div>
        <button className="primary-button login-button">Login</button>
        <p className="resend">
          <span>
            Didn´t receive the email? 
            <a href="/">Resend</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ResetPasword;
