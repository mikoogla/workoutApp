import React from "react";
import BrickInput from "../UI/BrickInput";
import Button from "@mui/material/Button";
import "./ExerciseForm.css";

function ExerciseForm() {
  return (
    <form>
      <div className="exercise-form">
        <BrickInput title="Name" type="text" />
        <BrickInput title="Date" type="date" min="2019-01-01" />
        <BrickInput title="Data" type="text" />
      </div>
      <div className="exercise-form-submit">
        <Button variant="contained" color="success">
          Submit
        </Button>
      </div>
    </form>
  );
}

export default ExerciseForm;
