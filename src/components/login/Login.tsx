import React, { SyntheticEvent, useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

const Login: React.FunctionComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const history = useHistory();

  const handleSignIn = (event: SyntheticEvent) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth: any) => {
        history.push("/");
      })
      .catch((e: any) => {
        alert(e.message);
      });
  };

  const handleCreateAndSignIn = (event: SyntheticEvent) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth: any) => {
        history.push("/");
      })
      .catch((e: any) => {
        alert(e.message);
      });
  };

  return (
    <div className="login-container">
      <Link className="login__logo" to="/">
        <i className="fas fa-cat fa-2x"></i>
      </Link>
      <h1 className="login__title">Sign in</h1>
      <form action="" className="login__form">
        <label htmlFor="login-username">Username or email address</label>
        <input
          type="email"
          name=""
          id="login-username"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="login-password">Password</label>
        <input
          type="password"
          name=""
          id="login-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="login__submit" type="submit" onClick={handleSignIn}>
          Sign in
        </button>
        <p>
          This login form is not related with real GitHub accounts. It uses
          Firebase email/password Authentication. You can use any fiction login
          data.
        </p>
        <button className="login__register" onClick={handleCreateAndSignIn}>
          Create account and Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
