/** @jsx jsx */
import React, { useState } from "react";
import { graphql } from "gatsby";
import { jsx, Styled } from "theme-ui";
import { Container, Col, Row } from "react-bootstrap";
import ProjectCategoryFilter from "../components/ProjectCategoryFilter";
import ProjectGrid from "../components/ProjectGrid";
import ProjectsPagination from "../components/ProjectsPagination";

const ProjectCategoryTemplate = ({ data, pageContext }) => {
  const { nodes: projectsArray } = data.allMarkdownRemark;
  const [projects, setProjects] = useState({ projectsArray });
  return (
    <Container as="section">
      <article>
        <Styled.h1>
          {projects?.projectsArray[0]?.frontmatter?.categories[0]}
        </Styled.h1>
        <Row>
          <ProjectCategoryFilter />
          <ProjectGrid projects={projects} />
          <ProjectsPagination pageContext={pageContext} />
        </Row>
      </article>
    </Container>
  );
};
export default ProjectCategoryTemplate;

export const categoryQuery = graphql`
  query projectsByCategory($category: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { categories: { eq: $category } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
          categories
          projectImages
        }
      }
    }
  }
`;
