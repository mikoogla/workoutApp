import React, { useState } from "react";
import BrickInput from "../UI/BrickInput";
import Button from "@mui/material/Button";
import "./ExerciseForm.css";

function ExerciseForm(props) {
  const [enteredName, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredData, setEnteredData] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const dataChangeHandler = (event) => {
    setEnteredData(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const exercise = {
      exName: enteredName,
      exData: enteredData,
      exDate: new Date(enteredDate),
      exInfo: "Made live",
    };

    props.onExerciseDataChange(exercise);
    setEnteredData("");
    setEnteredDate("");
    setEnteredTitle("");
  };
  return (
    <form>
      <div className="exercise-form">
        <BrickInput
          title="Name"
          type="text"
          onChange={nameChangeHandler}
          value={enteredName}
        />
        <BrickInput
          title="Date"
          type="date"
          min="2019-01-01"
          onChange={dateChangeHandler}
          value={enteredDate}
        />
        <BrickInput
          title="Data"
          type="text"
          onChange={dataChangeHandler}
          value={enteredData}
        />
      </div>
      <div className="exercise-form-submit">
        <Button variant="contained" color="success" onClick={submitHandler}>
          Submit
        </Button>
      </div>
    </form>
  );
}

export default ExerciseForm;
