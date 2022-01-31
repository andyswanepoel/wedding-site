import * as React from "react";

import FlowerBackground from "../components/FlowerBackground";
import ContentSection from "../components/ContentSection";
import Header from "../components/Header";
import RsvpForm from "../components/Form/RsvpForm";

import "../styles/base.scss";

const RsvpPage = () => {
  return (
    <main>
      <title>RSVP</title>
      <FlowerBackground>
        <ContentSection>
          <Header headingLevel="1" style={{ fontSize: "8rem" }} weight="400">
            RVSP Below
          </Header>
          <p>
            We're so excited to have you! <br />
            Please provide some information below to better help us plan our
            day!
          </p>
          <RsvpForm />
        </ContentSection>
      </FlowerBackground>
    </main>
  );
};

export default RsvpPage;
