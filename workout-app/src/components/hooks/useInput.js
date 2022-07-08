import { useState } from "react";

export default function useInput(validator) {
  const [enteredValue, setenteredValue] = useState("");
  const [Touched, setTouched] = useState(false);
  const isValid = validator(enteredValue);
  const error = Touched && !isValid;

  const handleChange = (event) => {
    setTouched(true);
    setenteredValue(event.target.value);
  };
  const handleBlur = (event) => {
    setTouched(true);
  };

  return {
    value: enteredValue,
    isValid,
    error,
    handleChange,
    handleBlur,
  };
}
