import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

export default function Select(props) {
  const [selection, setSelection] = React.useState("empty");

  const handleChange = (event) => {
    setSelection(event.target.value);
  };

  return (
    <TextField
      sx={{ width: "25ch" }}
      id="outlined-select-currency"
      select
      label="Workout type"
      value={selection}
      onChange={handleChange}
    >
      <MenuItem key={Math.random()} value={"empty"}>
        {"empty"}
      </MenuItem>
      {props.list !== undefined &&
        props.list.map((workoutType) => (
          <MenuItem key={Math.random()} value={workoutType}>
            {workoutType}
          </MenuItem>
        ))}
    </TextField>
  );
}
