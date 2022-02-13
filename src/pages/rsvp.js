import * as React from "react";
import { Link } from "gatsby";

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
              We're so excited to have you! <br />
              Please provide some information below to better help us plan our
              day.
            </p>
            <p>
              If you require additional details, please check{" "}
              <Link className="inline-link" to="/">
                the home page
              </Link>
              .
            </p>
            <p>Please respond by May 23, 2022.</p>
            <RsvpForm />
          </ContentSection>
        </FlowerBackground>
      </main>
    </>
  );
};

export default RsvpPage;
