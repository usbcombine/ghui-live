import React, { useState, useEffect } from "react";
import "./UserDetails.css";
import UserDetailsMenuItem from "./UserDetailsMenuItem";
import UserRepositories from "./UserRepositories";
import UserProjects from "./UserProjects";
import { connect } from "react-redux";
import { getSelectedUser, SelectedUserStore } from "../../../redux/selectors";

const UserDetails = ({ selectedUser }: any) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("repositories");

  useEffect(() => {
    if (selectedUser.id !== null) {
      const el = document.querySelector(".user-wrapper");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  });

  function handleMenuItemClick(menuItem: string) {
    setSelectedMenuItem(menuItem);
  }

  if (selectedUser.id === null) {
    return null;
  }

  let content: JSX.Element | string = "";
  switch (selectedMenuItem) {
    case "repositories":
      content = (
        <UserRepositories repositories={selectedUser.repositories.nodes} />
      );
      break;
    case "projects":
      content = <UserProjects />;
      break;
    default:
      break;
  }

  return (
    <div className="user-wrapper">
      <div className="user">
        <div className="user__left-column">
          <img
            className="user__avatar"
            alt="Avatar"
            src={selectedUser.avatarUrl}
          />
          <p className="user__name">{selectedUser.name}</p>
          <a
            className="user__username"
            href={selectedUser.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {selectedUser.login}{" "}
            <i className="fas fa-external-link-square-alt fa-xs"></i>
          </a>
        </div>
        <div className="user__right-column">
          <div className="user-menu">
            <UserDetailsMenuItem
              name="repositories"
              title="Repositories"
              selectedMenuItem={selectedMenuItem}
              handleMenuItemClick={handleMenuItemClick}
            />
            <UserDetailsMenuItem
              name="projects"
              title="Projects"
              selectedMenuItem={selectedMenuItem}
              handleMenuItemClick={handleMenuItemClick}
            />
          </div>
          {content}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: SelectedUserStore) => {
  const selectedUser = getSelectedUser(state);
  return { selectedUser };
};

export default connect(mapStateToProps)(UserDetails);
