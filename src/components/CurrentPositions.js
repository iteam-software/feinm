/** @jsx jsx */
import React from "react";
import { kebabCase } from "lodash";
import { Link } from "gatsby";
import { jsx } from "theme-ui";
import { Card, Accordion, Button } from "react-bootstrap";

const CurrentPositions = ({ data }) => (
  <Accordion>
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="0">
        <h5 sx={{ cursor: "pointer" }}>{data.frontmatter.title}</h5>
      </Accordion.Toggle>

      <Accordion.Collapse eventKey="0">
        {data.html ? (
          <>
            <Card.Body dangerouslySetInnerHTML={{ __html: data.html }} />
            <div className="text-right">
              <Button
                as={Link}
                to={`/jobs/apply-now/${kebabCase(data.frontmatter.title)}`}
                variant="dark"
                sx={{ margin: "0 1.25rem 1.25rem 0" }}
              >
                Apply for {data.frontmatter.title}
              </Button>
            </div>
          </>
        ) : (
          <Card.Body>No description given.</Card.Body>
        )}
      </Accordion.Collapse>
    </Card>
  </Accordion>
);

export default CurrentPositions;
