import { React, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Card from './Card';

function Testimonial(props) {
    let review=props.reviews
    let [index,setIndex]=useState(0)

    function leftShiftHandler(){
        if(index-1<0){
            setIndex(review.length-1)
        }
        else{
        setIndex(index-1)
    }}
    function rightShiftHandler(){
        if(index+1>=review.length){
            setIndex(0)
        }
        else{
        setIndex(index+1)
    }}
    function surpriseHandler(){
        let random = 0
        function randomNo(){
            random=Math.floor(Math.random()*review.length);
        }
        randomNo();
        while(random===index){
            randomNo();
    }
        setIndex(random)
        console.log(random)
    }
    
  return (
    <div className='w-[85vw] sm:w-[625px] sm:min-h-[425px] min-h-[400px] bg-white md:flex flex-col justify-center items-center  md:mt-7 mt-5 md:p-6 p-7 transition-all duration-400 shadow-md rounded-md hover:shadow-xl  '>
    <Card review={review[index]}></Card>
            <div className=' text-3xl my-4 gap-3 text-violet-400 font-bold mx-auto '>
                <button onClick={leftShiftHandler} className='cursor-pointer hover:text-violet-500'>
                    <FiChevronLeft/>
                </button>
                <button onClick={rightShiftHandler} className='cursor-pointer hover:text-violet-500'>
                    <FiChevronRight/>
                </button>
            </div>
            <div className='bg-violet-400 text-wrap  hover:bg-violet-500 transition-all duration-200 cursor-pointer  mx-auto  rounded-md font-bold text-white  text-lg'>
                <button className='md:h-[42px] h-[42px]   md:w-[180px]' onClick={surpriseHandler}>Surprise Me</button>
            </div>
    </div>
)
}

export default Testimonial