import React from 'react'
import oi from '../assets/oi.png'
const pone = () => {
  return (
    <div className='h-[400px]  w-full flex justify-center items-center'>
      <div className="title text-[#893E3A] text-5xl no">TASTE OUR BLENDS</div>

      <div className="font-medium ml-[500px]"><p className='font-semibold '>If your Monday morning lagging,<br></br>
                           our Caffeine will wake you up!!!</p></div>
        <div className="">
            <img className='h-40' src={oi}></img></div>                   
    </div>
  )
}

export default pone
