import React, {useRef} from "react";
import '../styles/Styles.scss'

const Login = () => {
  const form = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current)
    if (!formData){
      const error = new Error('El formulario esta incompleto')
     
    }
    try {
  const data={
    email: formData.get('email'),
    password: formData.get('password')

  }
  
} catch (error) {
  res.status(404).json({'msg':error})
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
  <button className="primary-button" onClick={handleSubmit}>Sign Up!</button>
  <a href='/'>Forgot my password</a>
  </form>
</div>
</div>

);
}
};

  export default Login;
  