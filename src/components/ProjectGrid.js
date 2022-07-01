/** @jsx jsx */
import React from "react";
import ProjectGridCard from "./ProjectGridCard";
import { jsx } from "theme-ui";
import { Col, Row } from "react-bootstrap";

const ProjectGrid = ({ projects }) => {
  const columns = projects.projectsArray.map((project, index) => (
    <Col sm={12} md={6} lg={4} key={project.id}>
      <ProjectGridCard project={project} />
    </Col>
  ));

  return <Col lg={9} sm={12}><Row>{columns}</Row></Col>;
};

export default ProjectGrid;
