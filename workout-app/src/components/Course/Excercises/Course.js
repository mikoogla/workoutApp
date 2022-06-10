import React from "react";
import UserInfo from "./UserInfo";
import ExercisesList from "./ExercisesList";
import NewExercise from "../NewExercise/NewExercise";

import "./course.css";

function Course() {
  return (
    <div className="Course-container">
      Course Component
      <UserInfo></UserInfo>
      <NewExercise />
      <ExercisesList />
    </div>
  );
}

export default Course;
