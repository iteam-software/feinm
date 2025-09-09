/** @jsx jsx */
import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Container } from "react-bootstrap";
import { jsx, Styled } from "theme-ui";
import CurrentPositions from "../../components/CurrentPositions";

const JobsPage = () => {
  const data = useStaticQuery(graphql`
    query PositionsQuery {
      allFile(
        filter: {
          sourceInstanceName: { eq: "positions" }
          childMarkdownRemark: { frontmatter: { state: { eq: "Published" } } }
        }
      ) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              title
              state
            }
            id
            html
          }
        }
      }
    }
  `);

  console.log(data.allFile.nodes);
  const openPositions = data.allFile.nodes
    .sort(
      (a, b) =>
        a.childMarkdownRemark.frontmatter.title >
        b.childMarkdownRemark.frontmatter.title
    )
    .map((position) => (
      <CurrentPositions
        key={position.childMarkdownRemark.id}
        data={position.childMarkdownRemark}
      />
    ));

  return (
    <>
      <section sx={{ backgroundColor: "#f8f9fa" }}>
        <Container>
          <Styled.h1>Jobs</Styled.h1>
          <h2 className="pb-5 text-center">
            Thank you for your interest in Franklin's Earthmoving Inc.
          </h2>
        </Container>
      </section>

      <section>
        <Container>
          <Styled.h1>Current Available Positions</Styled.h1>
          <div className="text-justify my-5">
            <p className="pb-4">
              Here is a list of our current available job positions:
            </p>
            {openPositions}
            <h5 className="mt-4">
              Franklin's is always accepting applications for all positions.
            </h5>
            <p>CMV applicants must have a current CDL and clean MVR.</p>
            <p>
              <Link
                to="/jobs/apply-now"
                className="btn text-dark"
                sx={{
                  backgroundColor: "primary",
                  borderColor: "primary",
                  "&:hover": {
                    filter: "brightness(.9)",
                  },
                }}
              >
                Apply for Job
              </Link>
            </p>
          </div>
        </Container>
      </section>

      <section sx={{ backgroundColor: "#f8f9fa", padding: "72px 16px 32px" }}>
        <Container>
          <h4 sx={{ fontWeight: "600", fontSize: "24px" }}>
            Equal Opportunity Employer
          </h4>
          <p className="mb-5">
            Franklin's Earthmoving Inc. is an Equal Opportunity Employer and
            encourages women, minorities, veterans and the disabled to apply.
            Franklin's recruits, hires and promotes all job classifications
            based solely upon the personal qualifications of the individual. All
            Employees are treated equally with respect to compensation and
            opportunities for advancement.
          </p>
          <h4>FRANKLIN'S OFFERS BENEFITS TO OUR EMPLOYEES</h4>
          <p>
            For benefit questions: email{" "}
            <a
              sx={{
                color: "primary",
                "&:hover": {
                  color: "primary",
                  filter: "brightness(.9)",
                },
              }}
              href="mailto:Cecilia.finch@feinm.com?subject=Benefit%20Questions"
            >
              Cecilia.finch@feinm.com&nbsp;
            </a>
            for more information.
          </p>
        </Container>
      </section>

      <section sx={{ padding: "72px 16px 32px" }}>
        <Container>
          <h3 className="text-center">
            Franklin's Earthmoving Inc. participates in the E-Verify Program
          </h3>
        </Container>
      </section>
    </>
  );
};

export default JobsPage;
