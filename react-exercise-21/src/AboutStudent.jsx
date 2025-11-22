import React from 'react'

function AboutStudent() {
  return (
    <div className='sm:flex gap-4 mt-4'>
        <div className='flex items-center gap-2 shadow-2xl p-2 rounded-2xl border-1 border-amber-50 md:w-5xl sm:w-1 mb-1 '>
            <div>📊</div>
            <div>
                <p className='font-extralight'>Average Grade</p>
                <p className='font-bold text-xl'>88%</p>
            </div>
        </div>
        <div className='flex items-center gap-2 shadow-2xl p-2 rounded-2xl border-1 border-amber-50 md:w-5xl sm:w-1 mb-1'>
            <div>📚 </div>
            <div>
                <p className='font-extralight'>Courses</p>
                <p className='font-bold text-xl'>3</p>
            </div>
        </div>
        <div className='flex items-center gap-2 shadow-2xl p-2 rounded-2xl border-1 border-amber-50 md:w-5xl sm:w-1 mb-1'>
            <div>⏱️</div>
            <div>
                <p className='font-extralight'>Study Hours</p>
                <p className='font-bold text-xl'>45</p>
            </div>
        </div>
        <div className='flex items-center gap-2 shadow-2xl p-2 rounded-2xl border-1 border-amber-50 md:w-5xl sm:w-1 mb-1'>
            <div>📝</div>
            <div>
                <p className='font-extralight'>Assignments</p>
                <p className='font-bold text-xl'>12</p>
            </div>
        </div>
    </div>
  )
}

export default AboutStudent