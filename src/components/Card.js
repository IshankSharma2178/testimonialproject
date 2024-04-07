import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

function Card(props) {
    let review=props.review;
    return (
        <div className='flex flex-col  sm:relative md:p-1'>
            <div className='sm:absolute relative  sm:top-[-5rem] z-[10] mx-auto md:mx-auto'>
                <img className=' aspect-square  rounded-full w-[130px]  sm:m-0 sm:p-0 mt-1 h-[130px] sm:w-[140px] sm:h-[140px] z-25' src={review.image}/>
                <div className=' absolute sm:w-[140px] sm:h-[140px]  top-[1px] right-[-5px]  sm:left-[5px] sm:top-[-3px] w-[130px] h-[130px] bg-violet-500 rounded-full   z-[-10]'></div>
            </div>
            <div className='text-center mt-8 md:m-0 mx-auto'>
                <p className='font-bold text-2xl capitalize'>{review.name}</p>
            </div>
            <div className='text-center mx-auto'>
                <p className='text-violet-300 uppercase text-sm '>{review.job}</p>
            </div>
            <div className='text-violet-400 mx-auto mt-5 '>
                <FaQuoteLeft/>
            </div>
            <div className='text-center mt-4 text-slate-500 '>
                {review.text}
            </div>
            <div className='text-violet-400 mx-auto mt-5 '>
                <FaQuoteRight/>
            </div>
            
        </div>
      )
}

export default Card