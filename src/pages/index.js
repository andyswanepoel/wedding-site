import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import FlowerBackground from "../components/FlowerBackground";
import ContentSection from "../components/ContentSection";
import Heading from "../components/Heading";
import FlexWrapper from "../components/FlexWrapper";
import AccommodationTile from "../components/AccommodationTile";
import Header from "../components/Navigation/Header";
import Notification from "../components/Notification/Notification";

import "../styles/base.scss";
import * as styles from "../styles/index.module.scss";

import { picton, belleville } from "../accommodations";

const IndexPage = ({ location }) => {
  console.log(location.state?.notification);
  const message = location.state?.notification?.message;
  const type = location.state?.notification?.type;
  const closeRedirect = location.state?.notification?.closeRedirect;

  return (
    <>
      <Header />
      <Notification
        message={message}
        type={type}
        closeRedirect={closeRedirect}
      />
      <main>
        <title>Swandry Wedding</title>
        <FlowerBackground>
          <Heading headingLevel="1" color="white" style={{ lineHeight: 0.8 }}>
            Katie &amp; Andy are getting married!
          </Heading>
          <p className={styles.eventDetails}>
            <span className={styles.eventDetailTitle}>When:</span> July 23, 2022
            <span className={styles.eventSubDetails}>
              Ceremony to begin at 4pm
            </span>
          </p>
          <p className={styles.eventDetails}>
            <span className={styles.eventDetailTitle}>Where:</span> Picton, ON
          </p>
          <p className={styles.eventDetails}>
            <span className={styles.eventDetailTitle}>Venue:</span> Cherryvale
            Weddings
          </p>
          <ContentSection>
            <Heading headingLevel="2" weight="400">
              Where to stay?
            </Heading>
            <p>
              Picton and the surrounding area are very popular summer
              destinations. <br />
              We recommend securing accommodations as soon as possible.
            </p>
            <p>Here are a few suggestions to get&nbsp;started!</p>
            <hr />
            <Heading headingLevel="3" weight="400">
              Prince Edward County
            </Heading>
            <p>
              There are no shortage of Airbnb hosts in the area. Click on the
              link below to see your options.
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
            <Heading headingLevel="3" weight="400">
              Belleville
            </Heading>
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
    </>
  );
};

export default IndexPage;
