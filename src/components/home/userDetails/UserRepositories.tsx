import React from "react";
import "./UserRepositories.css";
import RepositoryItem from "./RepositoryItem";

const UserRepositories = (props: any) => {
  const repositories: [] = props.repositories;

  const repositoryList = repositories.map((repository) => {
    return <RepositoryItem key={repository["id"]} repository={repository} />;
  });

  return <div className="repositories-data">{repositoryList}</div>;
};

export default UserRepositories;
