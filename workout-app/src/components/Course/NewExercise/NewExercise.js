import React from "react";
import ExerciseForm from "./ExerciseForm";

function NewExercise(props) {
  const saveExerciseDataHandler = (enteredExerciseData) => {
    const exercise = {
      ...enteredExerciseData,
    };
    props.onNewExercise(exercise);
  };
  return (
    <div className="new-exercise">
      <ExerciseForm onExerciseDataChange={saveExerciseDataHandler} />
    </div>
  );
}

export default NewExercise;
