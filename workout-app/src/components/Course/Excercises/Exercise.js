import React, { useState } from 'react';
import Button from "@mui/material/Button";
import CalendarItem from './CalendarItem';
import Card from '../UI/Card';



function Exercise(props) {

    const [name, setName] = useState(props.data.exName);

    const ClickHandler = () => {
        if (name === "hidden")
            setName(props.data.exName);
        else
            setName("hidden");
    }
    return (
        <Card className='excercise-item'>
            <div className='excercise-left'>
                <CalendarItem data={props.data} />
                <div className='excercise-item__name'>{name}</div>
            </div>
            <div className='excercise-right'>
                <div className='excercise-item__data'>{props.data.exData}</div>
                <Button onClick={ClickHandler} variant="outlined">{props.data.exInfo}</Button>
            </div>
        </Card>
    );
}

export default Exercise
