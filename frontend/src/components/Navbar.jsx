import React from 'react'
import { assets } from '../assets/assets'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-center py-5 font-medium'>
     <img src={assets.logo} /> 
    </div>
  )
}

export default Navbar