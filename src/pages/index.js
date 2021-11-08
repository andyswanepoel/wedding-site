import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import BackgroundImage from "gatsby-background-image";

import ContentSection from "../components/ContentSection";
import Header from "../components/Header";
import FlexWrapper from "../components/FlexWrapper";
import AccommodationTile from "../components/AccommodationTile";

import "../styles/base.scss";
import * as styles from "../styles/index.module.scss";

import { picton, belleville } from "../accommodations";

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
        <p className={styles.eventDetails}>
          <span>Venue:</span> Cherryvale Weddings
        </p>
        <ContentSection>
          <Header headingLevel="2" weight="400">
            Where to stay?
          </Header>
          <p>
            Picton and the surrounding area are very popular summer
            destinations. <br />
            We recommend securing accommodations as soon as possible.
          </p>
          <p>Here are a few suggestions to get&nbsp;started!</p>
          <Header headingLevel="3" weight="400">
            Prince Edward County
          </Header>
          <FlexWrapper
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
          >
            {picton.map((accommodation) => (
              <AccommodationTile
                name={accommodation.name}
                promo={accommodation.promo}
                link={accommodation.link}
              />
            ))}
          </FlexWrapper>
          <Header headingLevel="3" weight="400">
            Belleville
          </Header>
          <FlexWrapper
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
          >
            {belleville.map((accommodation) => (
              <AccommodationTile
                name={accommodation.name}
                promo={accommodation.promo}
                link={accommodation.link}
              />
            ))}
          </FlexWrapper>
          <p>
            If hotels are not your thing, there are no shortage of Airbnb hosts
            in the area. Click on the link below to see your options.
          </p>
          <a
            className={styles.airbnbLink}
            href="https://www.airbnb.ca/picton-prince-edward-canada/stays"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StaticImage alt="Airbnb logo" src="../images/airbnb.png" />
          </a>
        </ContentSection>
      </BackgroundImage>
    </main>
  );
};

export default IndexPage;
