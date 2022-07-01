/** @jsx jsx */
import React from "react";
import ProjectCategoryFilter from "../components/ProjectCategoryFilter";
import ProjectsPagination from "../components/ProjectsPagination";
import ProjectGrid from "../components/ProjectGrid";
import { jsx, Styled } from "theme-ui";
import { graphql } from "gatsby";
import { Container, Row } from "react-bootstrap";

const ProjectsIndexTemplate = ({ data, pageContext }) => {
  return (
    <section>
      <Container>
        <article>
          <Styled.h1>Projects</Styled.h1>
            <Row>
              <ProjectCategoryFilter />
              <ProjectGrid projects={{ projectsArray: data?.allMarkdownRemark?.nodes }} />
              <ProjectsPagination pageContext={pageContext} />
            </Row>
        </article>
      </Container>
    </section>
  );
};
export default ProjectsIndexTemplate;
// NOTE: if a new category is added it must be added to the query below with regex
export const indexQuery = graphql`
  query projectGridQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          categories: { regex: "/[Public Work|Subdivisions|Commercial]/" }
        }
      }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
          state
          categories
          projectImages
        }
      }
    }
  }
`;
