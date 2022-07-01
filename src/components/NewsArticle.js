/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Col, Row } from "react-bootstrap";

const NewsArticle = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "news" }
          childMarkdownRemark: { frontmatter: { state: { eq: "Published" } } }
        }
      ) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              publishedDate(formatString: "D MMM")
              title
              description
              slug
            }
            id
          }
        }
      }
    }
  `);

  const newsCards = data.allFile.nodes.map((node, index) => {
    const {
      childMarkdownRemark: { frontmatter },
    } = node;

    return (
      <Row className="mb-5" key={node.childMarkdownRemark.id}>
        <Col
          sm={2}
          md={6}
          className="text-dark p-3 d-flex flex-column justify-content-center"
          sx={{ backgroundColor: "primary" }}
        >
          <h4>{frontmatter.publishedDate}</h4>
        </Col>
        <Col sm={10} md={6} className="bg-dark text-light p-2 text-left">
          <div className="text-truncate font-weight-bold">
            {frontmatter.title}
          </div>
          <div className="text-truncate">{frontmatter.description}</div>
          <div className="text-right mt-1">
            <Link
              to={frontmatter.slug}
              className="btn btn-rnd text-dark"
              sx={{ backgroundColor: "primary" }}
            >
              Read More
            </Link>
          </div>
        </Col>
      </Row>
    );
  });

  return <>{newsCards}</>;
};

export default NewsArticle;
