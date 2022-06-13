import React from "react";
import Exercise from "./Exercise";
import Filter from "./Filter";
import "./course.css";

function ExercisesList() {
  const [userFilter, setUserFilter] = React.useState("");
  const buttonContent = "Change";
  const exercises = [
    {
      exName: "Pullups",
      exDate: new Date(2022, 6, 6),
      exData: "5 | 5 | 4 | 2",
      exInfo: buttonContent,
    },
    {
      exName: "Bench press",
      exDate: new Date(2022, 4, 23),
      exData: "40x10 | 40x8 | 40x6 | 40x5",
      exInfo: buttonContent,
    },
    {
      exName: "Barebells",
      exDate: new Date(2022, 5, 11),
      exData: "10x10 | 10x10 | 10x10 | 10x10",
      exInfo: buttonContent,
    },
    {
      exName: "Plank",
      exDate: new Date(2022, 5, 12),
      exData: "1min | 1min | 1min",
      exInfo: buttonContent,
    },
    {
      exName: "Pushups",
      exDate: new Date(2022, 6, 6),
      exData: "15 | 12 | 9 | 8",
      exInfo: buttonContent,
    },
  ];

  const filterChoice = (filter) => {
    setUserFilter(filter);
  };

  return (
    <div>
      <Filter 
      Names={exercises.map((a) => a.exName)} 
      onFilterChoice={filterChoice} 
      />

      {exercises.map(exercise => 
        <Exercise data={exercise}/>
        )}

      <div>Wybrany filter: {userFilter}</div>
    </div>
  );
}

export default ExercisesList;
