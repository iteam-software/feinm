import React from "react";
/** @jsx jsx */
import { map } from "lodash";
import { jsx, Styled } from "theme-ui";
import { Container, Button, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, graphql } from "gatsby";

const ProjectTemplate = ({ data }) => {
  if (typeof data !== 'undefined' && data.markdownRemark?.frontmatter) {
    const {
      projectImages,
      title,
      categories,
    } = data.markdownRemark.frontmatter;

    const carouselItems = map(projectImages, (image, index) => {
      return (
        <Carousel.Item key={index} className="text-center">
          <img src={image} />
        </Carousel.Item>
      );
    });

    return (
      <Container sx={{ padding: "72px 16px 32px" }}>
        <p className="text-left">
          <Button variant="dark" size="sm">
            <Link
              to="/projects"
              className="text-light"
              sx={{
                textDecoration: "none",
                "&:hover": { textDecoration: "none" },
              }}
            >
              <FontAwesomeIcon icon="arrow-left" /> Back to Projects
            </Link>
          </Button>
        </p>
        <hr />
        <Styled.h1>{title}</Styled.h1>
        <p className="text-center">Categories: {categories}</p>
        <Carousel
          prevIcon={<FontAwesomeIcon className="text-dark" icon="arrow-left" />}
          nextIcon={
            <FontAwesomeIcon className="text-dark" icon="arrow-right" />
          }
        >
          {carouselItems}
        </Carousel>
      </Container>
    );
  }
};

export default ProjectTemplate;

export const ProjectQuery = graphql`
  query projectBySlug($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        publishedDate
        categories
        projectImages
      }
    }
  }
`;
