import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Q from '../assets/coff-footer.png'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
const Footer = () => {
  return (
    <div className='grid h-[450px] w-full bg-[#61292f] text-white '>



        <div className="p1 flex justify-center items-center border-2 border-[#ffffff]">

<div className="grid ">

        <div className="flex justify-center items-center pb-[80px] pr-[60px]">
        <div className=""><img className='h-[100px]' src={Q}></img></div>
        <div className="lk h-[30px] w-[150px] rounded-2xl bg-[#FACB4C] flex justify-center items-center text-[#301611] font-extrabold text-sm"> ORDER COFFEE &gt;</div>
        </div> 

      <div className="border-t-2 w-[400px] pt-[100px] ml-[-99px] border-[#ffffff] flex justify-center items-center ">    <div className="hs text-4xl flex gap-2"> <svg xmlns="http://www.w3.org/2000/svg" height={33} viewBox="0 0 512 512"><path fill="#ffffff" d="M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32L0 416c0 53 43 96 96 96l192 0c53 0 96-43 96-96l16 0c61.9 0 112-50.1 112-112s-50.1-112-112-112l-48 0L32 192zm352 64l16 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-16 0 0-96zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z"/></svg> AWAKEN</div>
      </div>

   
   
</div>

<div className="grid ml-[-170px] ">
    <div className="border-l-2 border-[#ffffff] w-[1100px] h-[100px] ml-[165px] flex justify-evenly items-center "> 
    <a>Shop</a>
    <a>About Us</a>
    <a>Our Stories</a>
    <a>Voucher</a>
     </div>
    <div className="border-t-2 border-l-2 border-[#ffffff]w-full h-[100px] ml-[165px] flex justify-evenly items-center "> 

    <a>All Product</a>
    <a>Instant</a>
    <a>Capsules</a>
    <a>Ground</a>

    </div>
    <div className="border-t-2 border-l-2  border-[#ffffff]  h-[200px] ml-[165px] flex justify-evenly items-center "> 

        <div className="grid">
            <div className="">E-MAIL</div>
            <div className="">vedant@gmail.com</div>
        </div>

        
        <div className="grid">
            <div className="">HEAD OFFICE</div>
            <div className="">165,Shikshak Colony, Nagpur , Maharashtra,India</div>
        </div>

        <div className="grid">
            <div className="">CONTACT</div>
            <div className="">9574493986</div>
        </div>


    </div>
</div>





        </div>





        <div className="p2 flex justify-evenly items-center">
            <div className="text-white">
                <a>Terms</a>
                <a>Privacy Policy</a>

            </div>

            <div className="">©2025Vedant-LTT</div>
            <div className="flex justify-center items-center gap-5 ml-[100px]">
            <FaTwitter />
            <FaInstagram />
            <IoLogoTiktok />
            </div>

        </div>



      
    </div>
  )
}

export default Footer






