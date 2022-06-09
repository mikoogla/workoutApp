import React from 'react';
import Button from "@mui/material/Button";
import CalendarItem from './CalendarItem';
import Card from '../UI/Card';

function Exercise(props) {

    return (
        <Card className='excercise-item'>
            <div className='excercise-left'>
                <CalendarItem data={props.data} />
                <div className='excercise-item__name'>{props.data.exName}</div>
            </div>
            <div className='excercise-right'>
                <div className='excercise-item__data'>{props.data.exData}</div>
                <Button variant="outlined">{props.data.exInfo}</Button>
            </div>
        </Card>
    );
}

export default Exercise
