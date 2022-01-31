import React from "react";
import * as styles from "./RadioInput.module.scss";

const RadioInput = (
  {
    name,
    invalid,
    errorMessage,
    valueChangeHandler,
    inputBlurHandler,
    options
  },
  ref
) => {
  const wrapperClasses = invalid
    ? `${styles.radioWrapper} ${styles.inputError}`
    : `${styles.radioWrapper}`;

  const ariaLabels = invalid
    ? { "aria-invalid": "true", "aria-describedby": `error-${name}` }
    : {};

  const showRef = (index) => {
    if (index === 0) {
      return { ref: ref };
    }
  };
  return (
    <div className={wrapperClasses}>
      {options.map((option, index) => (
        <React.Fragment key={option.id}>
          <input
            {...showRef(index)}
            id={option.id}
            className={styles.radioInput}
            name={name}
            value={option.value}
            onChange={valueChangeHandler}
            onBlur={inputBlurHandler}
            type="radio"
            {...ariaLabels}
          />
          <label className={styles.radioInputLabel} htmlFor={option.id}>
            {option.label}
          </label>
        </React.Fragment>
      ))}
      {invalid === true && (
        <p id={`error-${name}}`} className={styles.inputErrorMessage}>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default React.forwardRef(RadioInput);
