import React from 'react';
import UserInfo from './UserInfo';
import Exercise from './Exercise';
import './course.css'

function Course() {
  const excercises = [
    { exName: 'Pullups', exDate: new Date(2022, 6, 6), exData: '5 | 5 | 4 | 2', exInfo: 'More info' },
    { exName: 'Bench press', exDate: new Date(2022, 4, 23), exData: '40x10 | 40x8 | 40x6 | 40x5', exInfo: 'More info' },
    { exName: 'Barebells', exDate: new Date(2022, 5, 11), exData: '10x10 | 10x10 | 10x10 | 10x10', exInfo: 'More info' },
    { exName: 'Plank', exDate: new Date(2022, 5, 12), exData: '1min | 1min | 1min', exInfo: 'More info' },
    { exName: 'Pushups', exDate: new Date(2022, 6, 6), exData: '15 | 12 | 9 | 8', exInfo: 'More info' }
  ]
  console.log(excercises[0].exData + "<------ex--------")
  return (
    <div >
      Course Component
      <UserInfo></UserInfo>
      <Exercise data={excercises[0]}></Exercise>
      <Exercise data={excercises[1]}></Exercise>
      <Exercise data={excercises[2]}></Exercise>
      <Exercise data={excercises[3]}></Exercise>
      <Exercise data={excercises[4]}></Exercise>
    </div>
  )
}

export default Course;
