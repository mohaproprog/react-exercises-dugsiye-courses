import React from 'react'

function Announ() {
  return (
    <div className='p-4 border-2 border-amber-50 rounded-2xl bg-gray-100 mt-4 ml-2'>
      <h3 className='text-2xl mb-2'>Announciments</h3>
      <div className='flex mb-2'>
        <div className='h-20 w-3 bg-blue-500 rounded-2xl mr-2'></div>
        <div>
          <p className='font-bold'>New Course Availible</p>
          <p>Chacke Out Our New Typescript Course</p>
          <p className='text-sm'>2 hours ago</p>
        </div>
      </div>
      <div className='flex mb-2'>
        <div className='h-20 w-3 bg-blue-500 rounded-2xl mr-2'></div>
        <div>
          <p className='font-bold'>Maintainent Notice</p>
          <p>Platform Update Schuldes for Night</p>
          <p className='text-sm'> 5 hours ago</p>
        </div>
      </div>
    </div>
  )
}

export default Announ