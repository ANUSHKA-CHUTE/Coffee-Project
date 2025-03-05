import React from 'react'
import Ja from '../assets/text.png'
import PA from '../assets/pab.png'
const Collect = () => {
  return (
    <div className='h-[500px] w-full flex justify-center items-center'>
      
<div className="">
  <img className='mt-[200px ] h-[700px] mr-[100px]' src={PA}></img>
</div>



<div className="grid">
<div className="siglesentence ulu">COLLECT BEAN FROM</div>
<div className="siglesentencewithimage">
<div className="text ulu flex justify-center items-center">MOTHER NATURE</div>  <div className="image"><img className='mt-[-100px]  h-[300px]' src={Ja}></img></div>

</div>
<div className="info">It's always exciting to bring in coffee from<br></br> a country we've never featured & while Peru<br></br> isn't a super rare origin</div>
<div className="buttonplusing flex justify-center items-center">
<div className="lk h-[30px] w-[150px] rounded-2xl bg-[#FACB4C] flex justify-center items-center text-[#301611] font-extrabold text-sm"> ORDER COFFEE &gt;</div>

<div className="flex justify-center items-center">
  <img></img><div className="">Ingredient</div>
</div>
</div>

</div>  



    </div>
  )
}

export default Collect
