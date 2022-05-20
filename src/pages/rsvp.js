import * as React from "react";

import FlowerBackground from "../components/FlowerBackground";
import ContentSection from "../components/ContentSection";
import Header from "../components/Navigation/Header";
import Heading from "../components/Heading";
import RsvpForm from "../components/Form/RsvpForm";

import "../styles/base.scss";

const RsvpPage = () => {
  return (
    <>
      <Header />
      <main>
        <title>Swandry Wedding - RSVP</title>
        <FlowerBackground>
          <ContentSection>
            <Heading headingLevel="1" style={{ fontSize: "6rem" }} weight="400">
              Kindly RSVP below
            </Heading>
            <p>
              We're so excited for you to join us for our&nbsp;wedding!
              <br />
              Please provide some information below to better help us plan
              the&nbsp;day.
            </p>
            <p>
              <strong className="font-lg">When:</strong> July 23, 2022 at 4pm
              <br />
              <strong className="font-lg">Where:</strong> Cherryvale Weddings,
              Picton,&nbsp;ON
            </p>
            <p>Please respond by June 13, 2022, even if you can't make it.</p>
            <RsvpForm />
          </ContentSection>
        </FlowerBackground>
      </main>
    </>
  );
};

export default RsvpPage;
