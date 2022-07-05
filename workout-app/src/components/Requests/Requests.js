import React, { useEffect, useState, useCallback } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import MoviesList from "./MoviesList";
import styles from "./Styles.module.css";
import { DatabaseURL } from "../DB/Private";

export default function Requests() {
  const [Movies, setMovies] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = useCallback(async () => {
    setMovies([]);
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) throw new Error("Error: " + response.status);
      const data = await response.json();

      const transfromedMovies = data.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date,
        };
      });
      setMovies(transfromedMovies);
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
      <Button onClick={fetchMovies}>Fetch Movies</Button>
      <Card className={styles.MoviesContainer}>
        <Content />
      </Card>
    </div>
  );
}
