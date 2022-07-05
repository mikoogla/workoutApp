import React from "react";
import Movie from "./Movie";
import styles from "./Styles.module.css";

export default function MoviesList(props) {
  return (
    <div className={styles.MovList}>
      {props.movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
