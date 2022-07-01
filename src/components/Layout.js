import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => {
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const data = useStaticQuery(graphql`
    {
      franklinLogoImage: allImageSharp(
        filter: { fixed: { originalName: { eq: "franklinsearthmoving.png" } } }
      ) {
        nodes {
          fixed {
            src
          }
        }
      }
    }
  `);

  const franklinLogoImage = data.franklinLogoImage.nodes[0].fixed.src;

  return (
    <>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Franklin's Earthmoving Inc. - Albuquerque, NM</title>
    <link rel="canonical" href={url} />
    <meta name="description" content="Franklin's Earthmoving Inc. - Albuquerque, NM"></meta>
  </Helmet>
      <Header data={franklinLogoImage} />
      {children}
      <Footer data={{ franklinLogoImage }} />
    </>
  );
};

export default Layout;
