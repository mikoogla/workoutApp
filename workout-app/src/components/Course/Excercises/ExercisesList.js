import React from "react";
import Exercise from "./Exercise";
import Filter from "./Filter";
import "./course.css";

function ExercisesList(props) {
  const [userFilter, setUserFilter] = React.useState("");
  const filterChoice = (filter) => {
    setUserFilter(filter);
  };
  const filteredExercises = props.exDB
    .filter((exercise) => {
      if (userFilter !== "") return exercise.exName === userFilter;
      else return 1;
    })
    .map((exercise) => <Exercise key={exercise.id} data={exercise} />);

  let exercisesList = <p>No results</p>;
  filteredExercises.length !== 0 && (exercisesList = filteredExercises);

  return (
    <div>
      <Filter
        ID={props.exDB.map((exercise) => exercise.id)}
        Names={props.exDB.map((exercise) => exercise.exName)}
        onFilterChoice={filterChoice}
      />
      {exercisesList}
    </div>
  );
}

export default ExercisesList;
