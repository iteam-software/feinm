/** @jsx jsx */
import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { jsx, Styled } from "theme-ui";
import ProjectGrid from "../components/ProjectGrid";

const LatestProjects = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { sourceInstanceName: { eq: "projectPages" } }
        sort: {
          order: DESC
          fields: childMarkdownRemark___frontmatter___publishedDate
        }
        limit: 3
      ) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              title
              slug
              projectImages
              publishedDate
            }
            id
          }
        }
      }
    }
  `);

  const projects = { projectsArray: [] };
  data.allFile.nodes.forEach(node =>
    projects.projectsArray.push(node.childMarkdownRemark)
  );

  return <ProjectGrid projects={projects} />;
};

export default LatestProjects;
