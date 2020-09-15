import React from "react";
import "./UserinfoItem.css";
import { connect } from "react-redux";
import { setSelectedUser } from "../../../redux/actions";
import { getSelectedUser, SelectedUserStore } from "../../../redux/selectors";

const UserinfoItem = ({ selectedUser, setSelectedUser, user }: any) => {
  function handleSelectItem() {
    setSelectedUser(user);
  }

  return (
    <div
      className={`users-row ${
        user["id"] === selectedUser.id ? "users-row--selected" : ""
      } `}
      onClick={handleSelectItem}
    >
      <img className="users-row__avatar" src={user.avatarUrl} alt="avatar" />
      <span className="users-row__username">{user.login}</span>
      <span className="users-row__name">{user.name}</span>
      <span className="users-row__repos">{user.repositories.totalCount}</span>
    </div>
  );
};

const mapStateToProps = (state: SelectedUserStore) => {
  const selectedUser = getSelectedUser(state);
  return { selectedUser };
};

export default connect(mapStateToProps, { setSelectedUser })(UserinfoItem);
