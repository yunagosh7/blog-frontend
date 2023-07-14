import React from "react";
import "./login.css";

export const Login = () => {
  return (
    <div className="login">
      <p className="page-title">Bienvenido de vuelta</p>
      <form className="form-login" onSubmit={(e)=> e.preventDefault()}>
      <div className="fields-container">
          <label htmlFor="username">Ingrese su nombre de usuario</label>
          <input type="text" id="username" />
        </div>
        <div className="fields-container">
          <label htmlFor="password">Ingrese su contraseña</label>
          <input type="password" id="password" />
        </div>

        <input type="submit" className="submit-btn" />
      </form>
    </div>
  );
};
