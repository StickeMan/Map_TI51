import { Cancel, Room } from "@material-ui/icons";
import axios from "axios";
import React, { useRef, useState } from "react";
import "./register.css";
import ReCAPTCHA from "react-google-recaptcha";

export default function Register({ setShowRegister }) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [captchaValido, cambiarCaptchaValido] = useState(null);
  const [usuarioValido, cambiarUsuarioValido] = useState(false);

  const captcha = useRef(null);

  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log('El usuario no es un robot');
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      await axios.post("/users/register", newUser);
      setError(false);
      setSuccess(true);
    } catch (err) {
      setError(true);
    }

    //Validamos los inputs.
    //Captcha.
    if (captcha.current.getValue()) {
      console.log('El usuario no es un robot');
      cambiarUsuarioValido(true);
      cambiarCaptchaValido(true);
    } else {
      console.log('Por favor acepta el captcha');
      cambiarUsuarioValido(false);
      cambiarCaptchaValido(false);
    }
  };
  return (
    <div className="registerContainer">
      {!usuarioValido &&
        <form onSubmit={handleSubmit}>
          <input autoFocus placeholder="username" ref={usernameRef} />
          <input type="email" placeholder="email" ref={emailRef} />
          <input
            type="password"
            min="6"
            placeholder="password"
            ref={passwordRef}
          />
          <ReCAPTCHA
            ref={captcha}
            sitekey="6Ld_tIwhAAAAALE8BpTz_-5YLalInjTPgV1n5zJa"
            onChange={onChange}
          />
          <button className="registerBtn" type="submit">
            Register
          </button>
          {success && (
            <span className="success">Successfull. You can login now!</span>
          )}
          {error && <span className="failure">Something went wrong!</span>}
          {captchaValido === false && <div className="error-captcha">Por favor, acepta el captcha</div>}
        </form>
      }
      <Cancel
        className="registerCancel"
        onClick={() => setShowRegister(false)}
      />
    </div>
  );
}
