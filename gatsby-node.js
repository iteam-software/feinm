const path = require("path");
const kebabCase = require("lodash/kebabCase");

exports.createPages = async ({
  graphql,
  actions: { createPage },
  reporter,
}) => {
  const ProjectTemplate = path.resolve("src/templates/ProjectTemplate.js");
  const ProjectsIndexTemplate = path.resolve(
    "src/templates/ProjectsIndexTemplate.js"
  );
  const ProjectCategoryTemplate = path.resolve(
    "src/templates/ProjectCategoryTemplate.js"
  );
  const ApplyNowTemplate = path.resolve("src/templates/ApplyNowTemplate.js");
  const NewsArticleTemplate = path.resolve(
    "src/templates/NewsArticleTemplate.js"
  );
  const NewsIndexTemplate = path.resolve("src/templates/NewsIndexTemplate.js");
  const ServiceTemplate = path.resolve("src/templates/ServiceTemplate.js");
  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            categories
          }
          id
        }
      }
      projects: allFile(
        filter: { sourceInstanceName: { eq: "projectPages" } }
      ) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              slug
              title
            }
          }
        }
      }
      projectCategories: allFile(
        filter: { sourceInstanceName: { eq: "projectCategories" } }
      ) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              slug
              title
            }
          }
        }
      }
      positions: allFile(
        filter: {
          sourceInstanceName: { eq: "positions" }
          childMarkdownRemark: { frontmatter: { state: { eq: "Published" } } }
        }
      ) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              title
            }
            id
          }
        }
      }
      news: allFile(
        filter: {
          sourceInstanceName: { eq: "news" }
          childMarkdownRemark: { frontmatter: { state: { eq: "Published" } } }
        }
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
              description
              slug
              state
            }
          }
        }
      }
      services: allFile(filter: { sourceInstanceName: { eq: "services" } }) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              title
              carouselImages
              headline
              subhead
              videos {
                video_title
                video_link
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query");
    return;
  }
  if (
    result &&
    result.data &&
    result.data.allMarkdownRemark &&
    result.data.allMarkdownRemark.nodes
  ) {
    const pages = result.data.allMarkdownRemark.nodes.filter(
      item => item.frontmatter.categories !== null
    );
    const itemsPerPage = 9;
    const numPages = Math.ceil(pages.length / itemsPerPage);

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/projects` : `/projects/${index + 1}`,
        component: ProjectsIndexTemplate,
        context: {
          limit: itemsPerPage,
          skip: index * itemsPerPage,
          numPages,
          currentPage: index + 1,
        },
      });
    });

    Array.from({ length: 4 }).forEach((_, index) => {
      createPage({
        path: `/news`,
        component: NewsIndexTemplate,
        context: {
          limit: 4,
          skip: index * 4,
          currentPage: index + 1,
        },
      });
    });

    result.data.allMarkdownRemark.nodes.forEach(node => {
      const {
        frontmatter: { categories },
      } = node;
      if (categories !== null) {
        categories.forEach(category => {
          let slug;
          result.data.projectCategories.nodes.forEach(node => {
            const {
              childMarkdownRemark: { frontmatter },
            } = node;

            if (category === frontmatter.title) {
              slug = frontmatter.slug;
            }
          });

          createPage({
            path: `projects/${slug}`,
            component: ProjectCategoryTemplate,
            context: {
              category,
              slug,
            },
          });
        });
      }
    });
  }
  if (
    result &&
    result.data &&
    result.data.projects &&
    result.data.projects.nodes
  ) {
    result.data.projects.nodes.forEach(node => {
      if (
        node &&
        node.childMarkdownRemark &&
        node.childMarkdownRemark.frontmatter
      ) {
        const { slug } = node.childMarkdownRemark.frontmatter;
        createPage({
          path: `/project/${slug}`,
          component: ProjectTemplate,
          context: {
            slug,
          },
        });
      }
    });
  }
  if (
    result &&
    result.data &&
    result.data.positions &&
    result.data.positions.nodes
  ) {
  result.data.positions.nodes.forEach(node => {
    const {
      childMarkdownRemark: { frontmatter },
    } = node;

    const slug = kebabCase(frontmatter.title);

    createPage({
      path: `/jobs/apply-now/${slug}`,
      component: ApplyNowTemplate,
      context: {
        title: frontmatter.title,
      },
    });
  });
}
if (
  result &&
  result.data &&
  result.data.news &&
  result.data.news.nodes
) {
  result.data.news.nodes.forEach(node => {
    const {
      childMarkdownRemark: { frontmatter },
    } = node;

    createPage({
      path: `/${frontmatter.slug}`,
      component: NewsArticleTemplate,
      context: {
        slug: frontmatter.slug,
      },
    });
  });
}
if (
  result &&
  result.data &&
  result.data.services &&
  result.data.services.nodes
) {
  result.data.services.nodes.forEach(node => {
    const { title } = node.childMarkdownRemark.frontmatter;
    const slug = kebabCase(title);
    createPage({
      path: `/services/${slug}`,
      component: ServiceTemplate,
      context: {
        title: title,
      },
    });
  });
}
};
