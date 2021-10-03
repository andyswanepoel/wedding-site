import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import BackgroundImage from "gatsby-background-image";

import ContentSection from "../components/ContentSection";
import Header from "../components/Header";
import FlexWrapper from "../components/FlexWrapper";
import AccomodationTile from "../components/AccomodationTile";

import "../styles/base.scss";
import * as styles from "../styles/index.module.scss";

import accomodations from "../accomodations";

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
    `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55))`
  ].reverse();

  return (
    <main>
      <title>Swandry Wedding</title>
      <BackgroundImage
        Tag="div"
        className={styles.coverImage}
        fluid={imageData}
        backgroundColor={`#040e18`}
      >
        <Header headingLevel="1" color="white">
          We're getting married!
        </Header>
        <p className={styles.eventDetails}>
          <span>When:</span> July 23, 2022
        </p>
        <p className={styles.eventDetails}>
          <span>Where:</span> Picton, ON
        </p>
        <ContentSection>
          <Header headingLevel="2" weight="400">
            Where to stay?
          </Header>
          <p>
            Picton and the surrounding area are very popular summer
            destinations. <br />
            We recommend securing accomodation as soon as possible.
          </p>
          <p>Here are a few suggestions to get&nbsp;started!</p>
          <FlexWrapper
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
          >
            {accomodations.map((accomodation) => (
              <AccomodationTile
                name={accomodation.name}
                promo={accomodation.promo}
                link={accomodation.link}
              />
            ))}
          </FlexWrapper>
          <p>
            If hotels are not your thing, there are no shortages of Airbnb host
            in the area. Click on the link below to see your options.
          </p>
          <a
            className={styles.airbnbLink}
            href="https://www.airbnb.ca/picton-prince-edward-canada/stays"
          >
            <StaticImage
              alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
              src="../images/airbnb.png"
            />
          </a>
        </ContentSection>
      </BackgroundImage>
    </main>
  );
};

export default IndexPage;
