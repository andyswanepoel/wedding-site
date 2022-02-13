import React from "react";
import * as styles from "./TextInput.module.scss";

const TextInput = (
  {
    id,
    label,
    value,
    invalid,
    errorMessage,
    valueChangeHandler,
    inputBlurHandler,
    ...props
  },
  ref
) => {
  const inputClasses = invalid
    ? `${styles.input} ${styles.inputError}`
    : `${styles.input}`;

  const ariaLabels = invalid
    ? { "aria-invalid": "true", "aria-describedby": `error-${id}` }
    : {};

  return (
    <div className={styles.inputWrapper} {...props}>
      <label className={styles.inputLabel} htmlFor={id}>
        {label}
      </label>
      <input
        ref={ref}
        className={inputClasses}
        id={id}
        name={id}
        value={value}
        onChange={valueChangeHandler}
        onBlur={inputBlurHandler}
        type="text"
        {...ariaLabels}
      />
      {invalid === true && (
        <p id={`error-${id}`} className={styles.inputErrorMessage}>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default React.forwardRef(TextInput);
