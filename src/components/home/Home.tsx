import React from "react";
import "./Home.css";
import Menu from "../common/Menu";
import UserForm from "./UserForm";
import UserInfo from "./userinfo/Userinfo";
import UserDetails from "./userDetails/UserDetails";

const Home: React.FunctionComponent = () => {
  return (
    <div>
      <Menu />
      <div className="user-search-wrapper">
        <div className="user-search">
          <div className="user-search-description">
            <h1 className="user-search-description__title">
              Built for developers
            </h1>
            <p className="user-search-description__description">
              GitHub is a development platform inspired by the way you work.
              From open source to business, you can host and review code, manage
              projects, and build software alongside 50 million developers.
            </p>
          </div>
          <UserForm />
        </div>
      </div>
      <UserInfo />
      <UserDetails />
      {/* <div className="footer"></div>  */}
    </div>
  );
};

export default Home;
