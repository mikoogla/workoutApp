import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./Filter.css";

function Filter(props) {
  const [name, setName] = React.useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    // setName(event.target.value);
    setName(value);
    props.onFilterChoice(value);
  };
  return (
    <div className="filter--style">
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="label">Filter</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={name}
          onChange={handleChange}
        >
          <MenuItem value="">None</MenuItem>

          {props.Names.filter((x, i, a) => a.indexOf(x) === i).map((name) => (
            <MenuItem key={Math.random()} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Filter;
