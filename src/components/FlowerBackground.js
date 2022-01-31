import * as React from "react";

import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";

import * as styles from "./FlowerBackground.module.scss";

const FlowerBackground = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "flowers.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const imageData = [
    data.desktop.childImageSharp.fluid,
    `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55))`
  ].reverse();

  return (
    <BackgroundImage
      Tag="div"
      className={styles.coverImage}
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
      {children}
    </BackgroundImage>
  );
};

export default FlowerBackground;
