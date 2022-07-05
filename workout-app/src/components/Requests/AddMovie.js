import React, { useRef } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import styles from "./Styles.module.css";

export default function AddMovie(props) {
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);
  }

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className={styles.MovList}>
          <label htmlFor="title">Title</label>
          <Input type="text" id="title" ref={titleRef} />
        </div>
        <br />
        <div className={styles.MovList}>
          <label htmlFor="opening-text">Opening Text</label>
          <Input rows="5" id="opening-text" ref={openingTextRef}></Input>
        </div>
        <br />
        <div className={styles.MovList}>
          <label htmlFor="date">Release Date</label>
          <Input type="text" id="date" ref={releaseDateRef} />
        </div>
        <br />
        <div className={styles.MovList}>
          <Button>Add Movie</Button>
        </div>
      </form>
    </Card>
  );
}
