import React, { useState, useEffect, SyntheticEvent } from "react";
import "./UserForm.css";
import { connect } from "react-redux";
import { getUserinfo, UserinfoStore } from "../../redux/selectors";
import { fetchUserinfo } from "../../redux/actions";

const UserForm: React.FunctionComponent<any> = (props) => {
  const [username, setUsername] = useState("");
  const [usernameWasNotFound, setUsernameWasNotFound] = useState(false);

  useEffect(() => {
    if (
      typeof props.userinfo.data !== undefined &&
      props.userinfo.data !== null
    ) {
      if (props.userinfo.data.search.nodes.length === 0) {
        setUsernameWasNotFound(true);
      } else {
        setUsernameWasNotFound(false);
      }
    }
  }, [props.userinfo.data]);

  function handleChange(event: SyntheticEvent) {
    setUsername((event.target as HTMLInputElement).value);
  }

  function handleSubmit(event: SyntheticEvent) {
    if (username.trim() !== "") {
      props.fetchUserinfo(username.trim());
    }
    event.preventDefault();
  }

  const message = usernameWasNotFound ? (
    <p className="user-search-form__message">
      This username was not found. Please try another one.
    </p>
  ) : (
    ""
  );

  return (
    <form className="user-search-form" onSubmit={handleSubmit}>
      <label className="user-search-form__label" htmlFor="username">
        Username&nbsp;
        <span
          className="hint--right"
          aria-label="Enter GitHub account username you want to find"
        >
          <i className="fas fa-question-circle"> </i>
        </span>
      </label>
      <input
        className="user-search-form__input"
        id="username"
        type="text"
        value={username}
        onChange={handleChange}
      />
      {message}
      <button className="user-search-form__button">Search in GitHub</button>
    </form>
  );
};

const mapStateToProps = (state: UserinfoStore) => {
  const userinfo = getUserinfo(state);

  return { userinfo };
};

export default connect(mapStateToProps, { fetchUserinfo })(UserForm);
