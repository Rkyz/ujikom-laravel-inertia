import React, { useState } from 'react'
import Side from './Side'
import Top from './Top'
import CartComponent from '@/Components/CartComponent'
import { Link, usePage } from '@inertiajs/react'
import { AiOutlinePlus } from "react-icons/ai";


const MainLayout = ({children}) => {
  const [openCart, setOpenCart] = useState(false)
  const url = usePage().url

  console.log(url)


  const handleOpenCart = () => {
    setOpenCart(!openCart)
  }
  const [side, setSide] = useState(false)

  const handleSide = () => {
    setSide(!side)
  }

  return (
    <div className={`w-full relative h-screen flex ${openCart && 'overflow-hidden hidden-scroll'}`}>
      <Side side={side} children={'asu'}/>
      <div className=' w-full h-full'>
        <div className='flex flex-col w-full h-full'>
          <Top handleSide={handleSide} handleOpenCart={handleOpenCart} side={side}/>
          <div className={`w-full ${openCart && 'max-sm:z-[99]'} sm:z-[48] h-full pt-[86.5px] relative p-[10px] ${side ? 'slg:md:pl-[260px] max-md:sm:pl-[95px]':'md:pl-[95px]'}`}>
          {children}
          {openCart && (
            <CartComponent handleOpenCart={handleOpenCart}/>
          )}
          </div>
        </div>
      <Link href={url === '/product' ? '/product/create' : undefined || url === '/user' ? '/user/create' : undefined} className='absolute z-[99] shadow-lg right-[30px] max-sm:hidden sm:bottom-[30px] bg-red-500 p-[15px] text-[20px] text-white rounded-md '>
      <AiOutlinePlus/>
    </Link>
      </div>
    </div>
  )
}

export default MainLayout
