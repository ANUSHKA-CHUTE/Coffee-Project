import React from 'react';
import dImage from '../assets/d.png'; // Adjust the path based on location

const Grab = () => {
  return (
    <div className="grab h-[250px] w-full bg-[#FCFAF6] text-[#893E3A] text-center pt-5">
      <div className="text-[130px] ">GRAB YOUR COFFEE</div>
      <img className="h-[197px] ml-[833px] mt-[-159px]" src={dImage} alt="Coffee" />
    </div>
  );
};

export default Grab;
