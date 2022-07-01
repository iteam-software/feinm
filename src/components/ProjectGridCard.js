/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { Card } from "react-bootstrap";
import { Link } from "gatsby";

const ProjectGridCard = ({ project }) => {
  const { frontmatter } = project;
  return (
    <Card key={project.id} className="border-0 py-2 d-flex flex-column w-100">
      <div
        sx={{
          position: "relative",
          height: "0",
          paddingTop: "66.667%",
          overflow: "hidden",
        }}
      >
        <img
          src={frontmatter.projectImages[0]}
          sx={{
            position: "absolute",
            width: "100%",
            top: "0",
            left: "0",
            bottom: "0",
            right: "0",
            objectFit: "cover",
          }}
          alt={frontmatter.title}
        />
      </div>
      <Card.Body
        className="bg-dark text-light d-flex flex-grow-1 align-items-center p-2"
        sx={{ width: "100%" }}
      >
        <h6 className="mr-auto mb-0">{frontmatter.title}</h6>

        <Link
          sx={{ whiteSpace: "nowrap" }}
          className="btn btn-sm btn-rnd bg-warning text-dark"
          to={`/project/${frontmatter.slug}`}
        >
          Read More
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProjectGridCard;
