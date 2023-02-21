//rsc 
import React from 'react';
import '../styles/Styles.scss'

const EditMyAccount = () => {
    return (
        <div className="login">
  <div className="form-container">
    <h1 className="account">Edit my account</h1>
    <form className="form" action="./4-screen-inicio.html">
      <label htmlFor="name" className="label">Name</label>
      <p className="value">Let´s Print</p>
      <label htmlFor="email">Email</label>
      <p className="value">LetsPrint@gmail.com</p>
      <label htmlFor="password">Pasword</label>
      <p className="value">*******</p>
      <div><input type="submit" defaultValue="Edit" className="secondary-button" /></div>
    </form>
  </div>
</div>

    );
};

export default EditMyAccount;