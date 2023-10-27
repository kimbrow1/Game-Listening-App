import React, { useState } from 'react'
import logo from './../assets/Images/logo.png'
import { HiSearch } from 'react-icons/hi';
import { HiOutlineMoon } from 'react-icons/hi';
import { HiSun} from 'react-icons/hi';



export default function Header() {
  const[toogle, setToogle] =  useState(true)
  return (
    <div className='flex items-center px-3'>
        <img src={logo} width={60} height={60} /> 
        <div className='flex text-black bg-slate-200 p-2  w-full mx-5 rounded-full item-center'>
        <HiSearch />
            <input type='text' placeholder='Search Games'  className=' text-black px-2 bg-transparent outline-none' />
        </div>
        <div>
         {toogle? <HiOutlineMoon className='text-[35px] bg-slate-200 text-black p-1 rounded-full' onClick={ () => setToogle(!toogle)}/>: <HiSun className='text-[35px] bg-slate-200 text-black p-1 rounded-full'/>} 
       
        </div>
    </div>
  )
}


