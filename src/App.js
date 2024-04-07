import React from 'react'
import Testimonial from './components/Testimonial'
import reviews from './data'

function App() {
  return (
    <div className='flex flex-col  w-[100vw] h-[100vh]  justify-center items-center bg-gray-200'>
      <div className='text-center  '>
        <h1 className='sm:text-3xl sm:font-bold font-bold text-3xl  '>Our Testimonials</h1>
        <div className='bg-violet-400 h-[4px] sm:w-[7rem] w-[5rem] text-center mt-1 m-auto'></div>
        <Testimonial reviews={reviews}/>
      </div>
    </div>
  )
}

export default App