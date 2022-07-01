/** @jsx jsx */
import React from "react";
import { jsx, Styled } from "theme-ui";
import { Container } from "react-bootstrap";
import NewsArticle from "../components/NewsArticle";

const ProjectsIndexTemplate = ({ data, pageContext }) => {
  return (
    <section>
      <Container>
        <Styled.h1>News</Styled.h1>
        {!data && <p>No news articles found.</p>}
        {data && <NewsArticle />}
      </Container>
    </section>
  );
};

export default ProjectsIndexTemplate;
