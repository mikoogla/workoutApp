// import { Label } from "@mui/icons-material";
// import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    color: ${(props) => (props.invalid ? "red" : "inherit")};
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    background: ${(props) => (props.invalid ? "#332323" : "inherit")};
    color: white;
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0.25rem 0.5rem;
  }

  & input:focus {
    outline: none;
    background: #353535;
    border-color: #8b005d;
  }
`;

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
      <FormControl invalid={!isValid}>
        <label>{LabelText}</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
