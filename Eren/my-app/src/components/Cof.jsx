import React from 'react'
import c1 from '../assets/co.jpg'
import c2 from '../assets/fr.png'
import c3 from '../assets/de.png'

const Cof = () => {
  return (
    <div style={{backgroundImage: `url(${c1})`, backgroundSize: 'cover'}} className='h-[340px] w-full grid    '> 
      

<div className="flex justify-center items-center ">
  <div className="">COFFEE</div>
  <img src={c2}></img>
  <div className="">IS A BEVERAGE THAT PUTS </div>
</div>



<div className="flex justify-center items-center ">
<div className="">ONE TO SLEEP WHEN</div>
<img src={c3}></img>
<div className="">NOT DRANK</div>
</div>










    </div>
  )
}

export default Cof
