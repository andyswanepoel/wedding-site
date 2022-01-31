import { useRef, useState } from "react";

const useInput = (validations = []) => {
  const [value, setValue] = useState("");
  const [interacted, setInteracted] = useState(false);
  const inputRef = useRef(null);

  const valueValid = validations.every((validation) => validation.test(value));
  const inputInvalid = interacted && !valueValid;

  const errorMessage = validations.find(
    (validation) => !validation.test(value)
  )?.error;

  const valueChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setInteracted(true);
  };

  return [
    value,
    inputRef,
    valueValid,
    inputInvalid,
    errorMessage,
    valueChangeHandler,
    inputBlurHandler
  ];
};

export default useInput;
