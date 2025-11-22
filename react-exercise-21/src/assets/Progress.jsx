import React from 'react'
import CourseProgress from './CourseProgress'
import UpcomingAssign from '../UpcomingAssign'
import Announ from '../Announ'

function Progress() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 gap-4"'>
        <CourseProgress/>
        <UpcomingAssign/>
        <div></div>
        <div></div>
        <Announ/>
    </div>
  )
}

export default Progress