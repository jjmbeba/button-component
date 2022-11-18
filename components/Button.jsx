import Image from 'next/image'
import React from 'react'

const Button = ({variant, disableShadow, disabled, startIcon, endIcon, size,color}) => {
  return (
    <div className='flex flex-col gap-[12px]'>
        <h3 className='font-ubuntu text-[12px] leading-[12px] text-[#333333]'>
            { disableShadow ? '<Button disableShadow/>' : disabled ? variant ? `<Button variant="${variant}" disabled/>` : '<Button disabled/>' : variant ? `<Button variant="${variant}"/>` : startIcon ? `<Button startIcon="${startIcon}"` : endIcon ? `<Button endIcon="${endIcon}"` : size ?  `<Button size="${size}"/>` :  color ? `<Button color="${color}"/>` : '<Button/>'}
        </h3>
        <button className={`bg-[#E0E0E0] rounded-[6px] flex items-center justify-center px-[16px] ${startIcon ? ' gap-[10px]  !w-[105px] px-[16px]' : endIcon && 'flex items-center justify-center gap-[10px] px-[16px] !w-[105px]'} ${endIcon && 'flex-row-reverse'} shadow-default w-[81px] py-[8px] text-[#3F3F3F] font-[500] ${!disabled && !disableShadow && 'hover:bg-[#AEAEAE] focus:bg-[#AEAEAE] '} ${variant === "outline" && 'bg-white text-[#3D5AFE] shadow-none border border-solid border-[#3D5AFE] hover:bg-[rgba(41,98,255,0.1)]'} ${variant === "text" && 'bg-white text-[#3D5AFE] shadow-none hover:bg-[rgba(41,98,255,0.1)]'} ${disableShadow && 'bg-[#3D5AFE] text-white shadow-none'} ${disabled && '!text-[#9E9E9E] bg-[#E0E0E0] shadow-none w-[88px]'} ${disabled && variant==='text' && 'bg-white hover:bg-white'} ${startIcon ==="local_grocery_store" ? 'bg-[#2962FF] text-white' : endIcon==="local_grocery_store" && 'bg-[#2962FF] text-white'} ${size && 'bg-[#2962FF] text-white'} ${size === 'sm' && 'w-[73px]'} ${size === 'md' && 'w-[81px]'} ${size === 'lg' && 'w-[93px]'} ${color === "primary" && 'bg-[#2962FF] text-white hover:bg-[#0039CB]'} ${color === "secondary" && 'bg-[#455A64] hover:bg-[#1C313A] text-white w-[104px]'} ${color === "danger" && 'bg-[#D32F2F] hover:bg-[#9A0007] text-white'}`}>
            {startIcon==='local_grocery_store' ? <Image className='w-[14px] h-[14px]' width={14} height={14} src='/cart.svg' alt='cart'/> : endIcon==='local_grocery_store' && <Image className='w-[14px] h-[14px]' width={14} height={14} src='/cart.svg' alt='cart'/> }
            <span>
              {disabled ? 'Disabled' : color === "secondary" ? 'Secondary' : color === "danger" ? 'Danger' : 'Default'}
            </span>
        </button>
    </div>
  )
}

export default Button