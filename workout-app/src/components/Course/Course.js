import React from 'react';
import UserInfo from './UserInfo';
import ExcercisesList from './ExcercisesList';

import './course.css'

function Course() {

  return (
    <div className='Course-container'>
      Course Component
      <UserInfo></UserInfo>
      <ExcercisesList/>
    </div>
  )
}

export default Course;
