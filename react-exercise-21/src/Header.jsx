import React from 'react'

function Header() {
  return (
    <div className='flex justify-between shadow-2xl p-5 rounded-2xl border-2 border-amber-50'>
        <div>
        <h2 className='font-semibold text-2xl'>welcome back,Student!</h2>
        <p>here's what happening with your course today.</p>
    </div>
    <div className='flex items-center gap-2'>
        <div>🔔</div>
        <button className='bg-gradient-to-r from-purple-200 to-pink-400 px-4 py-2 rounded-full'>S</button>
    </div>
    </div>
  )
}

export default Header