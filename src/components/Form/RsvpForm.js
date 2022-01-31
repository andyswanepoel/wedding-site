import * as React from "react";
import { useState, useEffect } from "react";
import { navigate } from "gatsby-link";

import * as styles from "./RsvpForm.module.scss";
import ShellForm from "./ShellForm";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import useQueryParams from "../../hooks/use-query-params";
import useInput from "../../hooks/use-input";

const RsvpForm = () => {
  const [showShellForm, setShowShellForm] = useState(true);
  const [botValue, setBotValue] = useState("");
  const [plusOne] = useQueryParams("plus", true);

  const [
    nameValue,
    nameInputRef,
    nameValueValid,
    nameInputInvalid,
    nameErrorMessage,
    nameValueChangeHandler,
    nameInputBlurHandler
  ] = useInput([
    {
      test: (value) => value.trim() !== "",
      error: "Please enter your name."
    }
  ]);

  const [
    emailValue,
    emailInputRef,
    emailValueValid,
    emailInputInvalid,
    emailErrorMessage,
    emailValueChangeHandler,
    emailInputBlurHandler
  ] = useInput([
    {
      test: (value) => value.trim() !== "",
      error: "Please enter your email."
    },
    {
      test: (value) =>
        value
          .trim()
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
      error: "Please enter a valid email address."
    }
  ]);

  const [
    attendingValue,
    attendingInputRef,
    attendingValueValid,
    attendingInputInvalid,
    attendingErrorMessage,
    attendingValueChangeHandler,
    attendingInputBlurHandler
  ] = useInput([
    {
      test: (value) => value.trim() !== "",
      error: "Please select an option."
    }
  ]);
  const [
    plusOneValue,
    plusOneInputRef,
    plusOneValueValid,
    plusOneInputInvalid,
    plusOneErrorMessage,
    plusOneValueChangeHandler,
    plusOneInputBlurHandler
  ] = useInput([
    {
      test: (value) => value.trim() !== "",
      error: "Please select an option."
    }
  ]);

  const [
    guestNameValue,
    guestNameInputRef,
    guestNameValueValid,
    guestNameInputInvalid,
    guestNameErrorMessage,
    guestNameValueChangeHandler,
    guestNameInputBlurHandler
  ] = useInput([
    {
      test: (value) => value.trim() !== "",
      error: "Please enter your guest's name."
    }
  ]);

  const [
    dietaryValue,
    dietaryInputRef,
    dietaryValueValid,
    dietaryInputInvalid,
    dietaryErrorMessage,
    dietaryValueChangeHandler,
    dietaryInputBlurHandler
  ] = useInput();

  // Address Info
  const [
    address1Value,
    address1InputRef,
    address1ValueValid,
    address1InputInvalid,
    address1ErrorMessage,
    address1ValueChangeHandler,
    address1InputBlurHandler
  ] = useInput([
    {
      test: (value) => value.trim() !== "",
      error: "Please enter your address."
    }
  ]);

  const [
    address2Value,
    address2InputRef,
    address2ValueValid,
    address2InputInvalid,
    address2ErrorMessage,
    address2ValueChangeHandler,
    address2InputBlurHandler
  ] = useInput([]);

  const [
    cityValue,
    cityInputRef,
    cityValueValid,
    cityInputInvalid,
    cityErrorMessage,
    cityValueChangeHandler,
    cityInputBlurHandler
  ] = useInput([
    {
      test: (value) => value.trim() !== "",
      error: "Please enter your city."
    }
  ]);

  const [
    stateValue,
    stateInputRef,
    stateValueValid,
    stateInputInvalid,
    stateErrorMessage,
    stateValueChangeHandler,
    stateInputBlurHandler
  ] = useInput([
    {
      test: (value) => value.trim() !== "",
      error: "Please enter your state or provice."
    }
  ]);

  const [
    zipValue,
    zipInputRef,
    zipValueValid,
    zipInputInvalid,
    zipErrorMessage,
    zipValueChangeHandler,
    zipInputBlurHandler
  ] = useInput([
    {
      test: (value) => value.trim() !== "",
      error: "Please enter your ZIP or postal code."
    }
  ]);

  const [
    countryValue,
    countryInputRef,
    countryValueValid,
    countryInputInvalid,
    countryErrorMessage,
    countryValueChangeHandler,
    countryInputBlurHandler
  ] = useInput([
    {
      test: (value) => value.trim() !== "",
      error: "Please enter your country."
    }
  ]);

  useEffect(() => {
    setShowShellForm(false);
  }, []);

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  // This function will check if the form is valid and will focus the first input that is invalid
  const isFormInvalid = () => {
    const inputs = [
      {
        valid: nameValueValid,
        ref: nameInputRef
      },
      {
        valid: emailValueValid,
        ref: emailInputRef
      },
      {
        valid: attendingValueValid,
        ref: attendingInputRef
      }
    ];

    // If you are attending and have a plus one option, that field is required
    if (attendingValue === "yes" && plusOne) {
      inputs.push({
        valid: plusOneValueValid,
        ref: plusOneInputRef
      });
    }

    if (attendingValue === "yes" && plusOneValue === "yes") {
      inputs.push({
        valid: guestNameValueValid,
        ref: guestNameInputRef
      });
    }

    // If the guest is attending, we require address and dietary info
    if (attendingValue === "yes") {
      inputs.push(
        {
          valid: address1ValueValid,
          ref: address1InputRef
        },
        {
          valid: cityValueValid,
          ref: cityInputRef
        },
        {
          valid: stateValueValid,
          ref: stateInputRef
        },
        {
          valid: zipValueValid,
          ref: zipInputRef
        },
        {
          valid: countryValueValid,
          ref: countryInputRef
        }
      );
    }

    const invalids = inputs.filter((input) => !input.valid);
    if (invalids.length > 0) {
      invalids[0].ref.current.focus();
    }
    return invalids.length > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // These fields will always be required
    nameInputBlurHandler();
    emailInputBlurHandler();
    attendingInputBlurHandler();

    // These fields depend on other selections
    if (attendingValue === "yes" && plusOne) plusOneInputBlurHandler();

    if (attendingValue === "yes" && plusOneValue === "yes")
      guestNameInputBlurHandler();

    if (attendingValue === "yes") {
      address1InputBlurHandler();
      cityInputBlurHandler();
      stateInputBlurHandler();
      zipInputBlurHandler();
      countryInputBlurHandler();
    }

    if (isFormInvalid()) return;

    const form = e.target;

    const formValues = {
      "bot-field": botValue,
      name: nameValue,
      email: emailValue,
      attending: attendingValue,
      "plus-one": attendingValue === "yes" && plusOne ? plusOneValue : "n/a",
      "guest-name":
        attendingValue === "yes" && plusOneValue === "yes"
          ? guestNameValue
          : "n/a",
      "dietary-needs": dietaryValue,
      address1: attendingValue === "yes" ? address1Value : "n/a",
      address2: address2Value,
      city: attendingValue === "yes" ? cityValue : "n/a",
      state: attendingValue === "yes" ? stateValue : "n/a",
      zip: attendingValue === "yes" ? zipValue : "n/a",
      country: attendingValue === "yes" ? countryValue : "n/a"
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formValues
      })
    })
      .then(() => navigate("/", { state: { showThankYou: true } }))
      .catch((error) => alert(error));
  };

  return (
    <form
      name="rsvp"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className={styles.form__rsvp}
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <fieldset hidden>
        <label>
          Don't fill this out:{" "}
          <input
            name="bot-field"
            onChange={(e) => {
              setBotValue(e.target.value);
            }}
          />
        </label>
      </fieldset>
      <fieldset className={styles.fieldset__rsvp}>
        <legend className={styles.legend__rsvp}>Your Personal Details</legend>
        <TextInput
          id="name"
          label="Name"
          value={nameValue}
          invalid={nameInputInvalid}
          errorMessage={nameErrorMessage}
          valueChangeHandler={nameValueChangeHandler}
          inputBlurHandler={nameInputBlurHandler}
          ref={nameInputRef}
        />
        <TextInput
          id="email"
          label="Email"
          value={emailValue}
          invalid={emailInputInvalid}
          errorMessage={emailErrorMessage}
          valueChangeHandler={emailValueChangeHandler}
          inputBlurHandler={emailInputBlurHandler}
          ref={emailInputRef}
        />
      </fieldset>
      <fieldset className={styles.fieldset__rsvp}>
        <legend className={styles.legend__rsvp}>Will you be attending?</legend>
        <RadioInput
          invalid={attendingInputInvalid}
          errorMessage={attendingErrorMessage}
          valueChangeHandler={attendingValueChangeHandler}
          inputBlurHandler={attendingInputBlurHandler}
          ref={attendingInputRef}
          name="attending"
          options={[
            { id: "attending__yes", label: "Yes", value: "yes" },
            { id: "attending__no", label: "No", value: "no" }
          ]}
        />
      </fieldset>
      {/* Need to include this to pick up the fields for the CSV */}
      {showShellForm && <ShellForm />}
      {attendingValue === "yes" && plusOne === "true" && (
        <fieldset className={`${styles.fieldset__rsvp} ${styles.animate}`}>
          <legend className={styles.legend__rsvp}>
            Will you be bringing a plus one?
          </legend>
          <RadioInput
            invalid={plusOneInputInvalid}
            errorMessage={plusOneErrorMessage}
            valueChangeHandler={plusOneValueChangeHandler}
            inputBlurHandler={plusOneInputBlurHandler}
            ref={plusOneInputRef}
            name="plus-one"
            options={[
              { id: "plus-one__yes", label: "Yes", value: "yes" },
              { id: "plus-one__no", label: "No", value: "no" }
            ]}
          />
          {plusOneValue === "yes" && (
            <TextInput
              id="guest-name"
              label="Guest's Name"
              value={guestNameValue}
              invalid={guestNameInputInvalid}
              errorMessage={guestNameErrorMessage}
              valueChangeHandler={guestNameValueChangeHandler}
              inputBlurHandler={guestNameInputBlurHandler}
              ref={guestNameInputRef}
            />
          )}
        </fieldset>
      )}
      {attendingValue === "yes" && (
        <fieldset className={`${styles.fieldset__rsvp} ${styles.animate}`}>
          <legend className={styles.legend__rsvp}>
            Any dietary restrictions or allergies we should know about for you
            {plusOneValue === "yes" ? " or your guest" : ""}?
          </legend>
          <TextInput
            id="dietary-needs"
            label="Dietary restrictions"
            value={dietaryValue}
            invalid={dietaryInputInvalid}
            errorMessage={dietaryErrorMessage}
            valueChangeHandler={dietaryValueChangeHandler}
            inputBlurHandler={dietaryInputBlurHandler}
            ref={dietaryInputRef}
          />
        </fieldset>
      )}
      {attendingValue === "yes" && (
        <fieldset className={`${styles.fieldset__rsvp} ${styles.animate}`}>
          <legend className={styles.legend__rsvp}>Your Address Details</legend>
          <TextInput
            id="address1"
            label="Address"
            value={address1Value}
            invalid={address1InputInvalid}
            errorMessage={address1ErrorMessage}
            valueChangeHandler={address1ValueChangeHandler}
            inputBlurHandler={address1InputBlurHandler}
            ref={address1InputRef}
          />
          <TextInput
            id="address2"
            label="Address Line 2"
            value={address2Value}
            invalid={address2InputInvalid}
            errorMessage={address2ErrorMessage}
            valueChangeHandler={address2ValueChangeHandler}
            inputBlurHandler={address2InputBlurHandler}
            ref={address2InputRef}
          />
          <TextInput
            id="city"
            label="City"
            value={cityValue}
            invalid={cityInputInvalid}
            errorMessage={cityErrorMessage}
            valueChangeHandler={cityValueChangeHandler}
            inputBlurHandler={cityInputBlurHandler}
            ref={cityInputRef}
          />
          <TextInput
            id="state"
            label="Province/State"
            value={stateValue}
            invalid={stateInputInvalid}
            errorMessage={stateErrorMessage}
            valueChangeHandler={stateValueChangeHandler}
            inputBlurHandler={stateInputBlurHandler}
            ref={stateInputRef}
          />
          <TextInput
            id="zip"
            label="Postal/ZIP Code"
            value={zipValue}
            invalid={zipInputInvalid}
            errorMessage={zipErrorMessage}
            valueChangeHandler={zipValueChangeHandler}
            inputBlurHandler={zipInputBlurHandler}
            ref={zipInputRef}
          />
          <TextInput
            id="country"
            label="Country"
            value={countryValue}
            invalid={countryInputInvalid}
            errorMessage={countryErrorMessage}
            valueChangeHandler={countryValueChangeHandler}
            inputBlurHandler={countryInputBlurHandler}
            ref={countryInputRef}
          />
        </fieldset>
      )}
      <button className={styles.submit__rsvp}>Submit</button>
    </form>
  );
};

export default RsvpForm;
