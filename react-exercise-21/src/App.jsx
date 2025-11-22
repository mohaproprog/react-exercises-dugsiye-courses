import React from 'react'
import Header from './Header'
import AboutStudent from './AboutStudent'
import Progress from './assets/Progress'

function App() {
  return (
    <div className='max-w-7xl m-auto p-5'>
      <Header/>
      <AboutStudent/>
      <Progress/>
    </div>
  )
}

export default App