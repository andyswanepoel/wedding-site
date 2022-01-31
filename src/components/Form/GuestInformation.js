import * as React from "react";

import * as styles from "./GuestInformation.module.scss";

const GuestInformation = ({ handleChange, guestNumber }) => {
  const updateFormData = (e) => {
    handleChange(e);
  };
  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <div>
      <p>Guest {capitalizeFirstLetter(guestNumber)}</p>
      <div className={styles.inputWrapper}>
        <input
          onChange={updateFormData}
          required
          id={`guest-${guestNumber}-first-name`}
          name={`guest-${guestNumber}-first-name`}
          type="text"
        />
        <label htmlFor={`guest-${guestNumber}-first-name`}>First Name</label>
      </div>
      <div className={styles.inputWrapper}>
        <input
          onChange={updateFormData}
          required
          id={`guest-${guestNumber}-last-name`}
          name={`guest-${guestNumber}-last-name`}
          type="text"
        />
        <label htmlFor={`guest-${guestNumber}-last-name`}>Last Name</label>
      </div>
      <p>Dietary Restrictions</p>
      <div className={styles.checkboxGroupWrapper}>
        <div className={styles.checkboxWrapper}>
          <input
            onChange={updateFormData}
            required
            id={`guest-${guestNumber}-dietary__veggie`}
            name={`guest-${guestNumber}-dietary`}
            type="checkbox"
          />
          <label htmlFor={`guest-${guestNumber}-dietary__veggie`}>
            Vegetarian
          </label>
        </div>
        <div className={styles.checkboxWrapper}>
          <input
            onChange={updateFormData}
            required
            id={`guest-${guestNumber}-dietary__vegan`}
            name={`guest-${guestNumber}-dietary`}
            type="checkbox"
          />
          <label htmlFor={`guest-${guestNumber}-dietary__vegan`}>Vegan</label>
        </div>
        <div className={styles.checkboxWrapper}>
          <input
            onChange={updateFormData}
            required
            id={`guest-${guestNumber}-dietary__gluten`}
            name={`guest-${guestNumber}-dietary`}
            type="checkbox"
          />
          <label htmlFor={`guest-${guestNumber}-dietary__gluten`}>
            Gluten Free
          </label>
        </div>
      </div>
    </div>
  );
};

export default GuestInformation;
