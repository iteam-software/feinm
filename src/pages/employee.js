/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useStaticQuery, graphql } from "gatsby";
import EmployeeAnnouncements from "../components/EmployeeAnnouncements";
import EmployeeKioskButton from "../components/EmployeeKioskButton";
import EmployeeTable from "../components/EmployeeTable";

const EmployeePage = () => {
  const data = useStaticQuery(graphql`
    {
      employeeCalendars: allFile(
        filter: { sourceInstanceName: { eq: "employeeCalendars" } }
        limit: 1
        sort: {
          fields: childMarkdownRemark___frontmatter___publishedDate
          order: DESC
        }
      ) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              calendarImage
            }
          }
        }
      }
      employeeMemos: allFile(
        filter: {
          sourceInstanceName: { eq: "employeeMemos" }
          childMarkdownRemark: { frontmatter: { state: { eq: "Published" } } }
        }
        limit: 4
        sort: {
          fields: childMarkdownRemark___frontmatter___publishedDate
          order: DESC
        }
      ) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              title
              file
              publishedDate(formatString: "MMM Do YYYY")
            }
          }
        }
      }
      employeeNewsletters: allFile(
        filter: {
          sourceInstanceName: { eq: "employeeNewsletters" }
          childMarkdownRemark: { frontmatter: { state: { eq: "Published" } } }
        }
        limit: 4
        sort: {
          fields: childMarkdownRemark___frontmatter___publishedDate
          order: DESC
        }
      ) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              title
              publishedDate(formatString: "MMM Do YYYY")
              file
            }
          }
        }
      }
    }
  `);

  const {
    employeeCalendars: { nodes },
    employeeMemos,
    employeeNewsletters,
  } = data;

  const currentCalendar =
    nodes[0].childMarkdownRemark.frontmatter.calendarImage;

  return (
    <>
      <section sx={{ backgroundColor: "#f8f9fa", padding: "0 16px 32px" }}>
        <Container>
          <Styled.h1>Employees</Styled.h1>
          <EmployeeAnnouncements />
          <EmployeeKioskButton />
        </Container>
      </section>
      <section sx={{ padding: "72px 16px 32px" }}>
        <Container>
          <Row>
            <Col lg={6}>
              <h2 className="text-center">Employee Memos</h2>
              <EmployeeTable data={employeeMemos} />
            </Col>
            <Col lg={6}>
              <h2 className="text-center">Franklin's News</h2>
              <EmployeeTable data={employeeNewsletters} />
            </Col>
          </Row>
        </Container>
      </section>
      <section sx={{ backgroundColor: "#f8f9fa", padding: "72px 16px 32px" }}>
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className="text-center">Franklin's Events</h2>
              <a href={currentCalendar} rel="noopener noreferrer">
                <img className="d-block w-100 rounded" src={currentCalendar} />
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default EmployeePage;
