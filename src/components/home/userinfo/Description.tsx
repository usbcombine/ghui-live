import React from "react";
import "./Description.css";

const Description: React.FunctionComponent = () => {
  return (
    <div className="description">
      <p className="description__title">
        This website uses the GitHub API to show a data related to a given user.
      </p>
      <p className="description__content">
        Enter username and get GitHub accounts with basic information and
        repository list. The purpose of this example is to demonstrate React use
        for building single page applications.
      </p>
    </div>
  );
};

export default Description;
