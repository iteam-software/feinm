import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const EmployeeAnnouncements = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { sourceInstanceName: { eq: "employeeAnnouncements" } }
        sort: {
          fields: childMarkdownRemark___frontmatter___publishedDate
          order: DESC
        }
        limit: 4
      ) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              title
              publishedDate(formatString: "MMM Do YYYY")
              description
            }
          }
        }
      }
    }
  `);

  const announcements = data.allFile.nodes.map((node, index) => {
    const {
      childMarkdownRemark: { frontmatter: announcement },
    } = node;

    return (
      <div key={index} className="my-5">
        <h3 className="d-flex justify-content-between">
          <span className="text-center">{announcement.title}</span>
          <span className="text-right text-nowrap">{announcement.publishedDate}</span>
        </h3>
        <p className="text-left">{announcement.description}</p>
      </div>
    );
  });

  return <div>{announcements}</div>;
};

export default EmployeeAnnouncements;
