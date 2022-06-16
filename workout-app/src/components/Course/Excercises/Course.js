import React from "react";
import UserInfo from "./UserInfo";
import ExercisesList from "./ExercisesList";
import NewExercise from "../NewExercise/NewExercise";

import "./course.css";
const buttonContent = "Change";
const exercisesDB = [
  {
    id: "0",
    exName: "Pullups",
    exDate: new Date(2022, 6, 6),
    exData: "5 | 5 | 4 | 2",
    exInfo: buttonContent,
  },
  {
    id: "1",
    exName: "Bench press",
    exDate: new Date(2022, 4, 23),
    exData: "40x10 | 40x8 | 40x6 | 40x5",
    exInfo: buttonContent,
  },
  {
    id: "2",
    exName: "Barebells",
    exDate: new Date(2022, 5, 11),
    exData: "10x10 | 10x10 | 10x10 | 10x10",
    exInfo: buttonContent,
  },
  {
    id: "3",
    exName: "Plank",
    exDate: new Date(2022, 5, 12),
    exData: "1min | 1min | 1min",
    exInfo: buttonContent,
  },
  {
    id: "4",
    exName: "Pushups",
    exDate: new Date(2022, 6, 6),
    exData: "15 | 12 | 9 | 8",
    exInfo: buttonContent,
  },
];

function Course() {
  const [exercises, setExercises] = React.useState(exercisesDB);

  const addExercise = (exercise) => {
    setExercises((e) => {
      return [exercise, ...e];
    });
  };
  const addExerciseHandler = (exercise) => {
    addExercise(exercise);
  };

  return (
    <div className="Course-container">
      Course Component
      <UserInfo></UserInfo>
      <NewExercise onNewExercise={addExerciseHandler} />
      <ExercisesList exDB={exercises} />
    </div>
  );
}

export default Course;
