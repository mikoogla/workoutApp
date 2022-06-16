// import { Label } from "@mui/icons-material";
// import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";
import styles from "./CourseInput.module.css";

import Button from "../../UI/Button/Button";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [LabelText, setLabelText] = useState("Course Goal");

  const goalInputChangeHandler = (event) => {
    setIsValid(true);
    setLabelText("Course Goal");
    setEnteredValue(event.target.value);
  };

  const clearInput = () => {
    setEnteredValue("");
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!enteredValue.trim().length) {
      setLabelText("can't add empty goal");
      setIsValid(false);
      return;
    }
    clearInput();
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>{LabelText}</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
