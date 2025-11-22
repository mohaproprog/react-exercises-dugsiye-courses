import React from 'react'

function CourseProgress() {
  return (
    <div className='p-4 shadow-2xl mt-4 rounded-2xl border-amber-50 border-4 md:col-span-2'>
        <h3 className='text-2xl ml-2'>Course Progress</h3>
        <div>

        <div className='bg-gray-300 p-4 rounded-2xl m-2'>
            <div className='flex justify-between'>
                <div>react Fundmentals</div>
            <p>70%</p>
            </div>
            <progress className='w-full rounded-2xl' value={70} max={100}></progress>
            
            <div className='flex justify-between'>
                <p>Next:Components & Props</p>
                <p>sarah willison</p>
            </div>

        </div>
        </div>
        <div>

        <div className='bg-gray-300 p-4 rounded-2xl m-2'>
            <div className='flex justify-between'>
                <div>Javasript Advanced</div>
            <p>90%</p>
            </div>
            <progress className='w-full' value={90} max={100}></progress>
            <div className='flex justify-between'>
                <p>Next:Asy/Await</p>
                <p>Mc Hamuuda</p>
            </div>

        </div>
        </div>
        <div>

        <div className='bg-gray-300 p-4 rounded-2xl m-2'>
            <div className='flex justify-between'>
                <div>Ui/Ux DEsign</div>
            <p>50%</p>
            </div>
            <progress className='w-full' value={50} max={100}></progress>
            <div className='flex justify-between'>
                <p>Next:Color Theory</p>
                <p>Sharfudiin</p>
            </div>

        </div>
        </div>
    </div>
  )
}

export default CourseProgress