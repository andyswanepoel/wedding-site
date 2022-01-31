import * as React from "react";
// import { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";

import FlowerBackground from "../components/FlowerBackground";
import ContentSection from "../components/ContentSection";
import Header from "../components/Header";
import FlexWrapper from "../components/FlexWrapper";
import AccommodationTile from "../components/AccommodationTile";

import "../styles/base.scss";
import * as styles from "../styles/index.module.scss";

import { picton, belleville } from "../accommodations";

const IndexPage = () => {
  return (
    <main>
      <title>Swandry Wedding</title>
      <FlowerBackground>
        <Header headingLevel="1" color="white">
          Katie &amp; Andy are getting married!
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
          <hr />
          <Header headingLevel="3" weight="400">
            Prince Edward County
          </Header>
          <p>
            There are no shortage of Airbnb hosts in the area. Click on the link
            below to see your options.
          </p>
          <a
            className={styles.airbnbLink}
            href="https://www.airbnb.ca/picton-prince-edward-canada/stays"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StaticImage alt="Airbnb logo" src="../images/airbnb.png" />
          </a>
          <p>
            If you prefer hotels, the venue has suggested the follow as nearby
            options.
          </p>
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
        </ContentSection>
      </FlowerBackground>
    </main>
  );
};

export default IndexPage;
