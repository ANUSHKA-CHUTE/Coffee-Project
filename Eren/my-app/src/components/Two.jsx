import React from 'react';
import TImage from '../assets/two-cups.jpg'; // Ensure correct path
import cImage from '../assets/cof.png'; // Ensure correct path
import g from '../assets/p.png'; // Ensure correct path
const Two = () => {
  return (
    <div 
      style={{ backgroundImage: `url(${TImage})`, backgroundSize: 'contain',  backgroundImage: `url(${TImage})`, 
      backgroundSize: '100% 100%',  
      backgroundRepeat: 'no-repeat',   }}
      className="h-[600px] w-full text-[#893E3A] text-center pt-5 "
    > 
    <div className="grid  gap-4 mt-10">
      <img className="h-[230px] ml-[1213px] " src={cImage} alt="Coffee" />
      
      <div className="">
      <div className="text-white text-2xl font-extrabold ml-[1050px]">HOW TO DRINK ?</div>
      <img className="h-[160px] ml-[1043px] mt-[-100px]" src={g} alt="Coffee" />
      
      

      </div>
      
      </div>

     {/* <div className="absolute bottom-0 left-0 w-full h-16 bg-[#FCFAF6] clip-wave"></div> */}
    </div>
  );
};

export default Two;
// backgroundPosition: 'center'