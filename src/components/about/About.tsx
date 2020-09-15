import React from "react";
import "./About.css";
import Menu from "../common/Menu";
import Skill from "./Skill";

const About: React.FunctionComponent = () => {
  const skills = [
    {
      id: "1",
      image: "icon-react.png",
      title: "React",
      description: "Build user interfaces fast and easy",
    },
    {
      id: "2",
      image: "icon-typescript.png",
      title: "TypeScript",
      description: "Use types, avoid errors, save time for debugging",
    },
    {
      id: "3",
      image: "icon-redux.png",
      title: "Redux",
      description: "Share application state and avoid prop drilling",
    },
    {
      id: "4",
      image: "icon-graphql.png",
      title: "GraphQL",
      description: "Get many resources in a single request",
    },
    {
      id: "5",
      image: "icon-flexbox.jpg",
      title: "Flexbox",
      description: "Arrange layouts and make them flexible and responsive",
    },
    {
      id: "6",
      image: "icon-firebase.png",
      title: "Firebase Authentication",
      description: "Sign in to your app by using popular identity providers",
    },
  ];

  const skillList = skills.map((skill) => {
    return (
      <Skill
        key={skill.id}
        image={skill.image}
        title={skill.title}
        description={skill.description}
      />
    );
  });

  return (
    <div>
      <Menu />
      <div className="about-header-wrapper">
        <div className="about-header">
          <p className="about-header__title">
            This website uses the GitHub API to show a data related to a given
            user.
          </p>
          <p className="about-header__content">
            Enter username and get GitHub accounts with basic information and
            repository list. The purpose of this example is to demonstrate React
            use for building single page applications.
          </p>
        </div>
      </div>
      <p className="skills-title">In this example were used</p>
      <div className="skills">{skillList}</div>
    </div>
  );
};

export default About;
