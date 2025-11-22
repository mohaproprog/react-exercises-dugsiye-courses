import React from 'react'

function UpcomingAssign() {
  return (
    <div className='p-4 border-2 border-amber-50 rounded-2xl bg-gray-100 mt-4 ml-2'>
        <h3 className='text-2xl mb-2'>Upcoming Assignments</h3>
        <div className='flex justify-between mb-2'>
           <div>
            <p className='font-semibold text-xl'>Api Integration</p>4
            <span className='text-md'>Javascript Advanced</span>
           </div>
           <div>
            <p className='bg-green-500 rounded-full flex items-center justify-center'>Completeted</p>
            <p className='text-sm'>Due 2025-1-6</p>
           </div>
        </div>
        <div className='flex justify-between mb-2'>
           <div>
            <p className='font-semibold text-xl'>Design System</p>4
            <span className='text-md'>Ui/Ux Design</span>
           </div>
           <div>
            <p className='bg-yellow-500 rounded-full flex items-center justify-center'>In Progress</p>
            <p className='text-sm'>Due 2025-9-10</p>
           </div>
        </div>
        <div className='flex justify-between mb-2'>
           <div>
            <p className='font-semibold text-xl'>Build a Todo App</p>4
            <span className='text-md'>React Fundmentls</span>
           </div>
           <div>
            <p className='bg-red-500 rounded-full flex items-center justify-center'>Panding</p>
            <p className='text-sm'>Due 2025-10-20</p>
           </div>
        </div>

    </div>
  )
}

export default UpcomingAssign