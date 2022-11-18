import React from 'react'
import ButtonArea from './ButtonArea'
import Header from './Header'

const MainArea = () => {
  return (
    <div className='h-screen absolute top-0 left-[16vw] w-[84vw] pl-[91px] pt-[53px] overflow-x-hidden'>
        <Header/>
        <ButtonArea/>
    </div>
  )
}

export default MainArea