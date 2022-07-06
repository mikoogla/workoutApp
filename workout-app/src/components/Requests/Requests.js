import React, { useEffect, useState, useCallback } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import MoviesList from "./MoviesList";
import styles from "./Styles.module.css";
import { DatabaseURL } from "../../private/WorkoutApp-private/Private";
import AddMovie from "./AddMovie";
import Counter from "../CustomHooks/Counter";
import TaskContainer from "../CustomHooks/Tasks/TaskContainer";

export default function Requests() {
  const [Movies, setMovies] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function addMovie(movie) {
    console.log(movie);
    const response = await fetch(`${DatabaseURL}/movies.json`, {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setMovies([...Movies, data]);
    console.log(data);
    fetchMovies();
  }

  const fetchMovies = useCallback(async () => {
    setMovies([]);
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${DatabaseURL}/movies.json`);
      if (!response.ok) throw new Error("Error: " + response.status);
      const data = await response.json();

      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
      setMovies(loadedMovies);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const Content = () => {
    if (IsLoading) {
      return <p>Loading...</p>;
    }
    if (!IsLoading && Movies.length === 0) {
      return <div>No movies</div>;
    }
    if (!IsLoading && !error) {
      return <MoviesList movies={Movies} />;
    }
    if (!IsLoading && error) {
      return <div>{error}</div>;
    }
  };
  return (
    <div className={styles.main}>
      <Counter />
      <TaskContainer />
      <AddMovie onAddMovie={addMovie} />
      <Button onClick={fetchMovies}>Fetch Movies</Button>
      <Card className={styles.MoviesContainer}>
        <Content />
      </Card>
    </div>
  );
}
