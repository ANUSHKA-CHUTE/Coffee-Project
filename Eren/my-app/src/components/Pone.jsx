import React from 'react'
import oi from '../assets/oi.png'
import p1 from '../assets/pack1.png'
import p2 from '../assets/pack2.png'   
import p3 from '../assets/pack3.png'   
import c1 from '../assets/co.jpg'
const pone = () => {
  return (
    <div className=" hg">
    <div className='h-[400px]  w-full flex justify-center items-center'>
      <div className="title text-[#893E3A] text-5xl no">TASTE OUR BLENDS</div>

      <div className="font-medium ml-[500px]"><p className='font-semibold '>If your Monday morning lagging,<br></br>
                           our Caffeine will wake you up!!!</p></div>
        <div className="">
            <img className='h-40' src={oi}></img></div>                   
    </div>
    
    
    
    
    <div className="w-full h-[450px] flex justify-center items-center">



<div className=" grid   gap-4">
    <img className='h-[350px]' src={p2}></img>
    <div className="h-[40px] w-[240px] ml-[70px] mt-[-10px] rounded-xl bg-[#ffffff]  drop-shadow-2xl flex justify-between items-center">
        <div className="pro">  SEASONAL ESPRESSO</div>
        <div className="prize"> 1899</div>
    </div>
</div>
<hr></hr>
{/* <hr class="vertical-hr">      </hr> */}

<div className=" grid   gap-4">
    <img src={p1}></img>
    <div className="h-[40px] w-[240px] ml-[150px] mt-[-100px] rounded-xl bg-[#ffffff]  drop-shadow-2xl flex justify-between items-center">
        <div className="pro">  SEASONAL ESPRESSO</div>
        <div className="prize"> 1899</div>
    </div>
</div>
<hr class="vertical-hr">

</hr>

<div className=" grid   gap-4">
    <img className='h-[350px]' src={p3}></img>
    <div className="h-[40px] w-[240px] ml-[70px] mt-[-20px] rounded-xl bg-[#ffffff]  drop-shadow-2xl flex justify-between items-center">
        <div className="pro">  SEASONAL ESPRESSO</div>
        <div className="prize"> 1899</div>
    </div>
</div>




    </div>
    
    
    
    
    
    
    
    </div>
  )
}

export default pone
