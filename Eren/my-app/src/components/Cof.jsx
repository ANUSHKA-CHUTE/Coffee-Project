import React from 'react'
import c1 from '../assets/co.jpg'
import c2 from '../assets/fr.png'
import c3 from '../assets/de.png'

const Cof = () => {
  return (
    <div style={{backgroundImage: `url(${c1})`, backgroundSize: 'cover'}} className='h-[340px] w-full grid    '> 
      

<div className="flex justify-center items-center mt-[30px]">
  <div className="foet mr-[-45px]">COFFEE</div>
  <img style={{width:'250px',marginBottom:'60px'}} src={c2}></img>
  <div className="foet ml-[-40px]">IS A BEVERAGE THAT PUTS </div>
</div>



<div className="flex justify-center items-center mt-[-210px] ml-[38px]">
<div className="foet mr-[-170px]">ONE TO SLEEP WHEN</div>
<img style={{width:'350px',marginBottom:'130px',marginLeft:'69px',marginTop:'-2px'}} src={c3}></img>
<div className="foet ml-[-110px]">NOT DRANK</div>
</div>


<div className="fort text-[#ef6d0a] font-extralight text-4xl ml-[1300px] mt-[-200px] ">Love my coffee</div>







    </div>
  )
}

export default Cof
