import { useState } from "react";

export default function useInput(validator) {
  const [enteredValue, setEnteredValue] = useState("");
  const [Touched, setTouched] = useState(false);
  const Valid = validator(enteredValue);
  const Error = Touched && !Valid;

  const handleChange = (event) => {
    setEnteredValue(event.target.value);
  };
  const handleBlur = () => {
    setTouched(true);
  };

  return {
    value: enteredValue,
    Error,
    Valid,
    handleChange,
    handleBlur,
  };
}
