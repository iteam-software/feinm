/** @jsx jsx */
import React from "react";
import ReactPlayer from "react-player";
import { graphql } from "gatsby";
import { jsx, Styled } from "theme-ui";
import { map } from "lodash";
import { Container, Carousel } from "react-bootstrap";
const ServiceTemplate = ({ data }) => {
  const {
    title,
    headline,
    subhead,
    specializations,
    videos,
    carouselImages,
  } = data?.allMarkdownRemark?.nodes[0]?.frontmatter;
  console.log(data);
  let list = specializations && specializations.map((specialty, i) => (
    <li key={i}>{specialty}</li>
  ));

  let videoItems = map(videos, ({ video_title, video_link }, i) => {
    return (
      <section
        key={video_link}
        id={video_title}
        className="pb-3"
        sx={{ backgroundColor: "#f8f9fa" }}
      >
        <Container
          sx={{
            fontSize: "1.25rem",
            textAlign: "justify",
          }}
        >
          <Styled.h1>{video_title}</Styled.h1>
          <div
            className="mb-4"
            sx={{
              backgroundColor: "black",
              height: "0",
              overflow: "hidden",
              paddingTop: "56.25%",
              position: "relative",
              textAlign: "center",
              width: "100%",
            }}
          >
            <ReactPlayer
              url={video_link}
              sx={{
                left: "50%",
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "contain",
                position: "absolute",
                top: "0",
                transform: "translateX(-50%)",
              }}
              height="600px"
            />
          </div>
        </Container>
      </section>
    );
  });

  let images = carouselImages.map((image, index) => {
    return (
      <Carousel.Item
        key={index}
        className="text-center"
        sx={{ height: "50vh" }}
      >
        <img src={image} className="w-100 h-100" sx={{ objectFit: "cover" }} />
      </Carousel.Item>
    );
  });
  return (
    <>
      <section sx={{ paddingBottom: "32px" }}>
        <Carousel>{images}</Carousel>
        <Container>
          <Styled.h1>{title}</Styled.h1>
          <div className="content">
            <p className="font-weight-bold">{headline}</p>
            <p>{subhead}</p>
            <ul>{list}</ul>
          </div>
        </Container>
      </section>
      {videoItems}
    </>
  );
};
export const indexQuery = graphql`
  query service($title: String!) {
    allMarkdownRemark(filter: { frontmatter: { title: { eq: $title } } }) {
      nodes {
        id
        frontmatter {
          title
          headline
          subhead
          carouselImages
          specializations
          videos {
            video_title
            video_link
          }
        }
      }
    }
  }
`;
export default ServiceTemplate;
