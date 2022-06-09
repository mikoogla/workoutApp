import React from 'react';
import Button from "@mui/material/Button";

function Exercise(props) {
    return (
        <div className='excercise-item'>
            <div className='excercise-item__name'>{props.data.exName.toString()}</div>
            <div className='excercise-item__date'>{props.data.exDate.toISOString()}</div>
            <div className='excercise-item__data'>{props.data.exData}</div>
            <Button variant="outlined">{props.data.exInfo}</Button>
        </div>
    );
}

export default Exercise