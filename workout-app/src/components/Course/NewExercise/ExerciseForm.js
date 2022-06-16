import React, { useState } from "react";
import BrickInput from "../UI/BrickInput";
import Button from "@mui/material/Button";
import "./ExerciseForm.css";

function ExerciseForm(props) {
  const [enteredName, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredData, setEnteredData] = useState("");
  const [expandForm, setExpandForm] = useState(false);

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

    if (enteredName.trim().length === 0) {
      return;
    }

    const currentDate = new Date();

    // ID based on date + time + random number
    let date_id =
      currentDate.getDay().toString() +
      currentDate.getHours().toString() +
      currentDate.getMinutes().toString() +
      currentDate.getSeconds().toString() +
      Math.floor(Math.random() * 101);

    const exercise = {
      id: date_id,
      exName: enteredName,
      exData: enteredData,
      exDate:
        enteredDate.length === 0
          ? new Date(currentDate)
          : new Date(enteredDate),
      exInfo: "Made live",
    };

    props.onExerciseDataChange(exercise);
    setEnteredData("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  const cancelHandler = () => {
    setEnteredData("");
    setEnteredDate("");
    setEnteredTitle("");
    handleExpand();
  };

  const handleExpand = () => {
    !expandForm ? setExpandForm(true) : setExpandForm(false);
  };
  const exerciseForm = (
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
        <Button variant="contained" color="error" onClick={cancelHandler}>
          Cancel
        </Button>
      </div>
    </form>
  );

  return (
    <div className="exercise-form-submit">
      {expandForm === true ? (
        exerciseForm
      ) : (
        <Button variant="contained" color="success" onClick={handleExpand}>
          Add Exercise
        </Button>
      )}
    </div>
  );
}

export default ExerciseForm;
