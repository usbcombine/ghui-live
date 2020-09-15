import React, { useState, useEffect, SyntheticEvent } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

const Menu: React.FunctionComponent = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUserEmail(authUser.email);
      } else {
        setUserEmail(null);
      }
    });

    return () => {
      unsubscribe();
    };
  });

  const handleSignOut = (event: SyntheticEvent) => {
    event.preventDefault();
    auth.signOut();
  };

  const loginBlock =
    userEmail === null ? (
      <div className="push-right">
        <Link className="menu__button" to="/login">
          Sign&nbsp;in
        </Link>
      </div>
    ) : (
      <div className="push-right">
        <span className="menu__text">Hello {userEmail}</span>
        <Link className="menu__button" to="/login" onClick={handleSignOut}>
          Sign&nbsp;out
        </Link>
      </div>
    );

  return (
    <div className="menu-wrapper">
      <div className="menu">
        <Link className="menu__logo" to="/">
          <i className="fas fa-cat fa-2x"></i>
        </Link>
        <Link className="menu__button" to="/about">
          About
        </Link>
        {loginBlock}
      </div>
    </div>
  );
};

export default Menu;
