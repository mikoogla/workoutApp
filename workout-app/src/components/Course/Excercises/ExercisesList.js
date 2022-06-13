import React from "react";
import Exercise from "./Exercise";
import Filter from "./Filter";
import "./course.css";

function ExercisesList(props) {
  console.log("tutaj jest lista: " + props.exDB[0].exName);
  const [userFilter, setUserFilter] = React.useState("");
  const filterChoice = (filter) => {
    setUserFilter(filter);
  };
  return (
    <div>
      <Filter
        Names={props.exDB.map((exercise) => exercise.exName)}
        onFilterChoice={filterChoice}
      />

      {props.exDB.map((exercise) => {
        console.log("mapping: " + exercise.exName);
        return <Exercise data={exercise} />;
      })}

      <div>Wybrany filter: {userFilter}</div>
    </div>
  );
}

export default ExercisesList;
