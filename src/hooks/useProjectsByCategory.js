import { useStaticQuery, graphql } from "gatsby";
export const useProjectsByCategory = () => {
  const data = useStaticQuery(
    graphql`
    query getNumberOfProjectsByCategory {
      public_work: allFile(filter: {sourceInstanceName: {eq: "projectPages"}, childMarkdownRemark: {frontmatter: {categories: {eq: "Public Work"}}}}) {
        totalCount
      }
      commercial: allFile(filter: {sourceInstanceName: {eq: "projectPages"}, childMarkdownRemark: {frontmatter: {categories: {eq: "Commercial"}}}}) {
        totalCount
      }
     subdivisions: allFile(filter: {sourceInstanceName: {eq: "projectPages"}, childMarkdownRemark: {frontmatter: {categories: {eq: "Subdivisions"}}}}) {
      totalCount  
      }
    } 
    `
  );
  return data;
};
