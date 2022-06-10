import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

  };

  const register = (e) => {
    e.preventDefault();

  };

  return (
    <div className="login">

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Pasword</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>
          Visiting for the first time!
          <br />
          Create an account Here
        </p>

        <button
          type="submit"
          onClick={register}
          className="login__registerButton"
        >
          Create your Account
        </button>
      </div>
    </div>
  );
}

export default Login;
