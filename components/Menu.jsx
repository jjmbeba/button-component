import React from 'react'

const Menu = () => {
  const menu = ["Colors","Typography","Spaces","Buttons","Inputs","Grid"]
return (
  <ul className='flex flex-col gap-[25px]'>
      {
          menu.map((item) => (
              <li key={item} className={`text-[14px] leading-[20px] font-[500] text-[#9E9E9E] font-noto ${item === "Inputs" && 'font-bold text-[#090F31]'}`}>{item}</li>
          ))
      }
  </ul>
)
}

export default Menu