import React from "react";
import "./Skill.css";

interface Props {
  image: string;
  title: string;
  description: string;
}

const Skill: React.FunctionComponent<Props> = (props) => {
  const { image, title, description } = props;

  return (
    <div className="skill">
      <img className="skill__image" src={`/img/${image}`} alt={title} />
      <div className="skill__title">{title}</div>
      <div className="skill__description">{description}</div>
    </div>
  );
};

export default Skill;
