import React from "react";
import "./UserDetailsMenuItem.css";

const UserDetailsMenuItem = (props: any) => {
  const { name, title, selectedMenuItem, handleMenuItemClick } = props;

  return (
    <div
      className={`user-menu__item ${
        selectedMenuItem === name ? "user-menu__item--active" : ""
      }`}
      onClick={() => handleMenuItemClick(name)}
    >
      {title}
    </div>
  );
};

export default UserDetailsMenuItem;
