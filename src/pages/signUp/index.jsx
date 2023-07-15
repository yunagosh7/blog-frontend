import React, { useRef } from "react";

export const SignUp = () => {
  const submitForm = (e) => {
    e.preventDefault();
    if (
      passwordRef.current.value.trim() !=
      confirmPasswordRef.current.value.trim()
    ) {
      console.log("Las contraseñas no coinciden");
    } else {
      console.log("Las contraseñas SI coinciden");
    }
  };

  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  

  return (
    <div className="register">
      <p className="page-title">Crea tu cuenta</p>
      <form className="form" onSubmit={(e) => submitForm(e)}>
        <div className="fields-container">
          <label htmlFor="username">Ingrese su nombre de usuario</label>
          <input type="text" id="username" />
        </div>
        <div className="fields-container">
          <label htmlFor="email">Ingrese su email</label>
          <input type="email" id="email" />
        </div>
        <div className="fields-container">
          <label htmlFor="password">Ingrese su contraseña</label>
          <input ref={passwordRef} type="password" id="password" />
        </div>

        <div className="fields-container">
          <label htmlFor="confirm-password">Confirme su contraseña</label>
          <input
            ref={confirmPasswordRef}
            type="password"
            id="confirm-password"
          />
        </div>

        <input type="submit" className="submit-btn" />
      </form>
    </div>
  );
};
