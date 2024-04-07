import React from 'react'
import Testimonial from './components/Testimonial'
import reviews from './data'

function App() {
  return (
    <div className='flex flex-col  w-[100vw] md:h-[100vh] h-[115vh]  md:justify-center items-center bg-gray-200'>
      <div className='text-center  '>
        <div className='sm:p-0 sm:m-0 m-10'>
        <h1 className='sm:text-3xl sm:font-bold font-bold text-3xl  md:p-0 '>Our Testimonials</h1>
        <div className='bg-violet-400 h-[4px] sm:w-[7rem] w-[5rem] md:p-0  text-center mt-1 m-auto'></div>
      </div>
        <Testimonial reviews={reviews}/>
      </div>
    </div>
  )
}

export default App