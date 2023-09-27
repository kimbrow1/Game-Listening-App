import React from 'react'
import logo from './../assets/Images/logo.png'



export default function Header() {
  return (
    <div>
        <img src={logo} width={60} height={60} /> 
        <div>
            <input type='text'/>
        </div>
    </div>
  )
}
