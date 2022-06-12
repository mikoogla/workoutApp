import React from "react";
import UserInfo from "./UserInfo";
import ExercisesList from "./ExercisesList";
import NewExercise from "../NewExercise/NewExercise";

import "./course.css";

function Course() {
  const addExerciseHandler = (exercise) => {
    console.log("In Course.js: ");
    console.log(exercise);
  };

  return (
    <div className="Course-container">
      Course Component
      <UserInfo></UserInfo>
      <NewExercise onNewExercise={addExerciseHandler} />
      <ExercisesList />
    </div>
  );
}

export default Course;
