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

      {props.exDB
        .filter((exercise) => {
          if (userFilter !== "") return exercise.exName === userFilter;
          else return 1;
        })
        .map((exercise) => (
          <Exercise key={exercise.exName} data={exercise} />
        ))}

      {/* <div>Wybrany filter: {userFilter}</div> */}
    </div>
  );
}

export default ExercisesList;
