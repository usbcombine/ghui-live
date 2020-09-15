import React from "react";
import "./Userinfo.css";
import { connect } from "react-redux";
import { getUserinfo, UserinfoStore } from "../../../redux/selectors";
import UserInfoItem from "./UserinfoItem";
import Description from "./Description";

const Userinfo: React.FunctionComponent = ({ userinfo }: any) => {
  const { data, isFetching, error } = userinfo;
  let users: [] = [];

  if (isFetching === true) {
    // here can be screen lock with loader
  }

  if (error === null && data !== null) {
    users = data.search.nodes.filter((node: Object) => {
      return Object.keys(node).length !== 0;
    });
  }

  if (users.length === 0) {
    return <Description />;
  }

  const userList = users.map((user, index) => {
    return <UserInfoItem key={user["id"]} user={user} />;
  });

  return (
    <div className="users">
      <div className="users-header">Public repository count</div>
      {userList}
    </div>
  );
};

const mapStateToProps = (state: UserinfoStore) => {
  const userinfo = getUserinfo(state);

  return { userinfo };
};

export default connect(mapStateToProps)(Userinfo);
