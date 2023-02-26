import React, {useRef} from "react";
import '../styles/Styles.scss'

const Login = () => {
  const form = useRef(null)

  const handleSubmit = () => {
    const formData = new FormData(form.current)
    const data={
      username: formData.get('email'),
      password: formData.get('password')

    }
  }

  return (

<div className="login">
  <div className="form-container">
    <h1 className="account">Login</h1>
    <form className="form" action="." ref={form}>
      <label htmlFor="name" className="label">Name</label>
      <input type="text" id="name" placeholder="¿What is your name?" className="input input-name" />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" placeholder="letsprint@gmail.com" className="input input-email" />
      <label htmlFor="password">Pasword</label>
      <input type="password" name="password" placeholder="*********" className="input input-password" />
      {/* <div><input type="submit" defaultValue="Confirm" className="primary-button login-button" /></div> */}
    </form>
    <button className="primary-button" onClick={handleSubmit}>Sign Up!</button>
  </div>
</div>

  );
};

  export default Login;
  