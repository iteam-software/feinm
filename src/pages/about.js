/** @jsx jsx */
import React from "react";
import { jsx, Styled } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import { useStaticQuery, graphql, Link } from "gatsby";

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "employeeNewsletters" }
          childMarkdownRemark: { frontmatter: { state: { eq: "Published" } } }
        }
        limit: 1
        sort: {
          fields: childMarkdownRemark___frontmatter___publishedDate
          order: DESC
        }
      ) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              file
            }
          }
        }
      }
    }
  `);

  const file = data?.allFile?.nodes[0]?.childMarkdownRemoar?.frontmatter?.file;
  return (
    <>
      <section sx={{ backgroundColor: "#f8f9fa", padding: "0 16px 32px" }}>
        <Container>
          <Styled.h1>About Us</Styled.h1>
          <h2 className="text-center font-weight-bold">
            Since 1958, Franklin's Earthmoving Inc. has been a construction
            industry leader in the New Mexico area.
          </h2>
        </Container>
      </section>

      <section id="news" sx={{ padding: "0 16px 32px" }}>
        <Container>
          <Styled.h1>News</Styled.h1>
          <div className="text-center">
            <p>
              Check out our latest{" "}
              <Link sx={{ color: "primary" }} to="/news">
                news
              </Link>
              !
            </p>
          </div>
          {file && (
            <>
              <p>Download our current newsletter!</p>
              <a
                href={file}
                className="btn btn-secondary text-dark border-0"
                rel="noreferrer noopener"
                target="_blank"
                sx={{
                  backgroundColor: "primary",
                  "&:hover, &:focus": {
                    backgroundColor: "primary",
                    filter: "brightness(0.9)",
                  },
                }}
              >
                <FontAwesomeIcon icon="file-pdf" className="mr-2" />
                Download Newsletter
              </a>
            </>
          )}
        </Container>
      </section>

      <section sx={{ backgroundColor: "#f8f9fa", padding: "0 16px 32px" }}>
        <Container>
          <Styled.h1>Our Commitment</Styled.h1>
          <p>
            Franklin's Earthmoving Inc., is committed to quality and customer
            satisfaction. Our traditional business philosophy and
            principal-based work ethic provide the value added service our
            customers have come to expect. With experienced leadership,
            Franklin's has become an innovative leader in the site development
            of construction projects.
          </p>
        </Container>
      </section>
    </>
  );
};

export default AboutPage;
