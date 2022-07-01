/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { startCase, kebabCase } from "lodash";
import { Link } from "gatsby";
import { Col } from "react-bootstrap";
import { useProjectsByCategory } from "../hooks/useProjectsByCategory";
const ProjectCategoryFilter = () => {
  const data = useProjectsByCategory();
  const arr = Object.entries(data);
  return (
    <Col lg={3} md={12}>
      <h3
        sx={{
          "@media screen and (max-width: 990px)": {
            textAlign: "center",
          },
        }}
      >
        Categories:
        <ul
          className="nav justify-content-center flex-lg-column justify-content-lg-start"
          sx={{
            listStyleType: "none",
            fontSize: "12px",
          }}
        >
          <li className="my-3 mx-2">
            <Link
              activeStyle={{
                textDecoration: "none",
                color: "primary",
                filter: "brightness(.8)",
              }}
              to="/projects"
              sx={{
                color: "primary",
                display: "block",
                fontSize: "1rem",
                "&:hover": {
                  textDecoration: "none",
                  color: "primary",
                  filter: "brightness(.8)",
                },
              }}
            >
              Categories
            </Link>
          </li>
          {arr.map((category, index) => {
            let title = category[0];
            let { totalCount } = category[1];
            return (
              <li key={index} className="my-3 mx-2">
                <Link
                  activeStyle={{
                    textDecoration: "none",
                    color: "primary",
                    filter: "brightness(.8)",
                  }}
                  to={`/projects/${kebabCase(title)}`}
                  sx={{
                    color: "primary",
                    fontSize: "1rem",
                    "&:hover": {
                      textDecoration: "none",
                      color: "primary",
                      filter: "brightness(.8)",
                    },
                  }}
                >
                  {startCase(title)} ({totalCount})
                </Link>
              </li>
            );
          })}
        </ul>
      </h3>
    </Col>
  );
};

export default ProjectCategoryFilter;
