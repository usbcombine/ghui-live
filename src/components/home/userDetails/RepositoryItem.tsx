import React from "react";
import "./RepositoryItem.css";

interface Props {
  repository: {
    name: string;
    url: string;
    updatedAt: string;
    primaryLanguage: { name: string };
  };
}

const RepositoryItem: React.FunctionComponent<Props> = (props) => {
  const { name, url, updatedAt, primaryLanguage } = props.repository;

  let primaryLanguageElement: JSX.Element | string =
    primaryLanguage !== null ? (
      <span className="repository-info__primary-language">
        {primaryLanguage.name}
      </span>
    ) : (
      ""
    );

  return (
    <div className="repositories-data-item">
      <a
        className="data-item__repository-name"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}&nbsp;<i className="fas fa-external-link-square-alt fa-xs"></i>
      </a>
      <span className="data-item__repository-info">
        {primaryLanguageElement}
        <span>
          Updated{" "}
          {new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          }).format(new Date(updatedAt))}
        </span>
      </span>
    </div>
  );
};

export default RepositoryItem;
