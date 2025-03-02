import React from 'react'
import oimage from '../assets/barista-.jpg'
const Baris = () => {
  return (
    <div className='h-[500px] w-full flex justify-center items-center'>

       <div className="flex justify-center items-center border-black  border-2">



        <div className="one grid ">
        <div className="grid h-[250px] border-2">
            <div className="tit no">ORGANIC BREWED COFFEE </div>
            <div className="det">Brewed coffee is made by pouring hot water ground coffee beans </div>
        </div>
        <div className="grid h-[250px] border-2">
            <div className="tit no">MANUALLY SORTED BY HANDS </div>
            <div className="det">Sorting a coarse of coffee into two or more classes on taste</div>
        </div>
            
        </div>




        <div style={{backgroundImage: `url(${oimage})`, backgroundSize: 'cover'}} className="two">
          <img className='h-[500px]' src={oimage} alt="" />
        </div>




        <div className="three">
        <div className="grid h-[250px] border-2  place-items-start ">
            <div className="tit no">TRADITIONALLY FRESH ROASTED </div>
            <div className="det">Roasting coffee transforms the chemical and physical properties</div>
        </div> <div className="grid h-[250px] border-2">
            <div className="tit no">DELIVERED TROUGH-OUT WORLD </div>
            <div className="det">Committed strong relationships with excellence, sustainability.</div>
        </div>
       

        </div>





       </div>
    </div>
  )
}

export default Baris
