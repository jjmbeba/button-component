import React from 'react'
import Button from './Button'

const ButtonArea = () => {
  return (
    <div className='pt-[28px] pb-[52px]'>
        <div className='flex flex-col gap-[45px]'>
            <Button/>
            <Button variant="outline" />
            <Button variant="text" />
            <Button disableShadow />
            <div className='flex items-center gap-[125px] w-full'>
              <Button disabled />
              <Button variant="text" disabled />
            </div>
            <div className='flex items-center gap-[80px] w-full'>
              <Button startIcon='local_grocery_store'/>
              <Button endIcon='local_grocery_store'/>
            </div>
            <div className='flex items-center gap-[84px] w-full'>
              <Button size="sm"/>
              <Button size="md"/>
              <Button size="lg"/>
            </div>
            <div className='flex items-center gap-[45px] w-full'>
              <Button color="default"/>
              <Button color="primary"/>
              <Button color="secondary"/>
              <Button color="danger"/>
            </div>
        </div>
    </div>
  )
}

export default ButtonArea