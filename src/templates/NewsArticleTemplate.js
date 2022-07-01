/** @jsx jsx */
import React from "react";
import { graphql } from "gatsby";
import { jsx, Styled } from "theme-ui";
import { Container, Row, Col } from "react-bootstrap";

const NewsArticleTemplate = ({ data, pageContext }) => {
  return (
    <section>
      <Container>
        <Row>
          <Col className="text-center">
            <Styled.h1>{data.markdownRemark.frontmatter.title}</Styled.h1>

            <img
              src={data.markdownRemark.frontmatter.images}
              className="pt-3 pb-5"
            />
            <div
              className="text-left pb-5"
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            ></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsArticleTemplate;

export const newsQuery = graphql`
  query newsQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        state
        slug
        publishedDate
        description
      }
    }
  }
`;
