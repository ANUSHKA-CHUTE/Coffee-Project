import React from 'react'

const Header = () => {
  return (
    <div className='hea h-[80px] w-full bg-[#893E3A] text-white text-center flex justify-evenly items-center  '>

        <div className="ha flex  items-center text-white     gap-12">
                                              <div class="dropdown">
                                                  <div class="dropdown-text font-medium">Coffee</div>
                                                  <div class="dropdown-content">
                                                          <a href="#">Baked Goods</a>
                                              <a href="#">Drinks</a>
                                               <a href="#">Savory Dishes</a>
                                      <a href="#">  Condiments & Syrups</a>
                                                      </div>
                                                     </div>
                                                   
                                                     <a className=' font-medium' href="#">Equipment</a>
                                                     <a className='mr-[100px] font-medium' href="#">Stories</a>  </div>
            
        <div className="hs text-4xl flex gap-2"> <svg xmlns="http://www.w3.org/2000/svg" height={33} viewBox="0 0 512 512"><path fill="#ffffff" d="M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32L0 416c0 53 43 96 96 96l192 0c53 0 96-43 96-96l16 0c61.9 0 112-50.1 112-112s-50.1-112-112-112l-48 0L32 192zm352 64l16 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-16 0 0-96zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z"/></svg> AWAKEN</div>

        <div className="hd flex items-center text-white font-medium gap-12">
        <a className='font-medium' href="#">Equipment</a>
      <a className='font-medium'  href="#">Gift</a>
            <div className="lk h-[30px] w-[150px] rounded-2xl bg-[#FACB4C] flex justify-center items-center text-[#301611] font-extrabold text-sm"> ORDER COFFEE &gt;</div>
        </div>







    </div>
  )
}

export default Header
