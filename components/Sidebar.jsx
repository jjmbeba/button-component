import React from 'react'
import Menu from './Menu'
import Title from './Title'

const Sidebar = () => {
  return (
    <div className='h-screen bg-[#FAFBFD] w-[16vw] pl-[50px] flex flex-col gap-[122px] fixed top-0 left-0'>
        <Title/>
        <Menu/>
    </div>
  )
}

export default Sidebar