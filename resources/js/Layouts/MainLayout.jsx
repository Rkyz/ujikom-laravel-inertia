import React, { useState } from 'react'
import Side from './Side'
import Top from './Top'
import CartComponent from '@/Components/CartComponent'
import { usePage } from '@inertiajs/react'

const MainLayout = ({children}) => {
  const [openCart, setOpenCart] = useState(false)

  const handleOpenCart = () => {
    setOpenCart(!openCart)
  }
  const [side, setSide] = useState(false)

  const handleSide = () => {
    setSide(!side)
  }

  return (
    <div className={`w-full h-screen flex ${openCart && 'overflow-hidden hidden-scroll'}`}>
      <Side side={side} children={'asu'}/>
      <div className=' w-full h-full'>
        <div className='flex flex-col w-full h-full'>
          <Top handleSide={handleSide} handleOpenCart={handleOpenCart} side={side}/>
          <div className={`w-full ${openCart && 'max-sm:z-[99]'} sm:z-[48] h-[9999px] pt-[96.5px] relative p-[10px] ${side ? 'slg:md:pl-[260px] max-md:sm:pl-[95px]':'md:pl-[95px]'}`}>
          {children}
          {openCart && (
            <CartComponent handleOpenCart={handleOpenCart}/>
          )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainLayout
