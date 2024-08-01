import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import PersonalProjectCard from "./PersonalProjectCard";

const PersonalProject = ({ heading, projects }) => {
  return (
    <Jumbotron fluid id="personal-projects" className="bg-light m-0">
      <Container>
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {projects.length
            ? projects.map((project, index) => (
              <PersonalProjectCard
                key={`personal-project-card-${index}`}
                id={`personal-project-card-${index}`}
                value={project}
              />
            ))
            : <p>No projects available</p>}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default PersonalProject;
