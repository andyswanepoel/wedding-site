import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import "../styles/base.scss";
import * as styles from "../styles/index.module.scss";
console.log(styles);

const IndexPage = () => {
  React.useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  }, []);

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
    `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))`
  ].reverse();

  return (
    <main>
      <title>Home Page</title>
      <BackgroundImage
        Tag="div"
        className={styles.coverImage}
        fluid={imageData}
        backgroundColor={`#040e18`}
      >
        <h1>We're getting married!</h1>
        <p className={styles.eventDetails}>
          <span>When:</span> July 23, 2022
        </p>
        <p className={styles.eventDetails}>
          <span>Where:</span> Picton, ON
        </p>
        <p className={styles.eventDetails}>Stay tuned for more&nbsp;details.</p>
      </BackgroundImage>
    </main>
  );
};

export default IndexPage;
