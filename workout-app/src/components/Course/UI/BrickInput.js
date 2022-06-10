import React from "react";
import TextField from "@mui/material/TextField";
import "./BrickInput.css";

function BrickInput(props) {
  return (
    <div className="brick">
      <div className="brick-label">
        <label>{props.title}</label>
      </div>

      <div className="brick-input">
        <TextField
          type={props.type}
          min={props.min}
          max={props.max}
          id="standard-basic"
          variant="standard"
        />
      </div>
    </div>
  );
}

export default BrickInput;
