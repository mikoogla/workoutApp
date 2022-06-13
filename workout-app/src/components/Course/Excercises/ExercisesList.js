import React from "react";
import Exercise from "./Exercise";
import Filter from "./Filter";
import "./course.css";

function ExercisesList(props) {
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
        return <Exercise key={exercise.exName} data={exercise} />;
      })}

      <div>Wybrany filter: {userFilter}</div>
    </div>
  );
}

export default ExercisesList;
