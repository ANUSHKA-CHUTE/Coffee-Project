import React from 'react'
import oimage from '../assets/barista-.jpg'
import { CiCoffeeBean } from "react-icons/ci";
import { BsCupHot } from "react-icons/bs";
import { MdOutlineCoffeeMaker } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import { PiCoffeeBeanBold } from "react-icons/pi";
const Baris = () => {
  return (
    <div className='h-[500px] w-full flex justify-center items-center'>

       <div className="flex justify-center items-center border-black  border-2">



        <div className="one grid ">


        <div className="grid h-[250px] border-2">
          <div className=" ml-10 text-4xl mt-8 mb-[-30px] "><PiCoffeeBeanBold /></div>
            <div className="tit no bar ml-10  mt-4">ORGANIC BREWED<br></br> COFFEE </div>
            <div className="det  ml-10 text-xl mt-[-20px]  font-medium">Brewed coffee is made by pouring<br></br> hot water ground coffee beans </div>
        </div>








        <div className="grid h-[250px] border-2">
          <div className="ml-10 text-4xl mt-8 mb-[-30px]  "><FaHandHoldingHeart /></div>
            <div className="tit no ba bar ml-10  mt-6 text-2xl mr-20">MANUALLY SORTED<br></br> BY HANDS </div>
            <div className="det ml-10 text-xl mt-[-20px]  font-medium">Sorting a coarse of coffee into two <br></br>or more classes on taste</div>
        </div>
            
        </div>




        <div style={{backgroundImage: `url(${oimage})`, backgroundSize: 'cover'}} className="two">
          <img className='h-[500px]' src={oimage} alt="" />
        </div>




        <div className="three">

        <div className="grid h-[250px] border-2  place-items-start ">
          <div className="ml-10 text-4xl mt-8 mb-[-30px]"><MdOutlineCoffeeMaker /></div>
            <div className="tit no ba bar ml-10  mt-6 text-2xl mr-20">TRADITIONALLY FRESH<br></br> ROASTED </div>
            <div className="det ml-10 text-xl mt-[-20px]  font-medium">Roasting coffee transforms the<br></br> chemical and physical properties</div>

        </div>
        
        
         <div className="grid h-[250px] border-2">
          <div className="ml-10 text-4xl mt-8 mb-[-30px] "><BsCupHot /></div>
            <div className="tit no ba bar ml-10  mt-6 text-2xl mr-20">DELIVERED TROUGH-<br></br>OUT WORLD </div>
            <div className="det ml-10 text-xl mt-[-20px]  font-medium">Committed strong relationships<br></br> with excellence, sustainability.</div>
        </div>
       

        </div>
</div>
    </div>
  )
}

export default Baris
