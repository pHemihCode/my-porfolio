import React, { useEffect } from 'react'
import Logo from '../assets/logo.png'
import { NavLink, Outlet,Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { RiContactsLine } from "react-icons/ri";
import { AiOutlineHome,AiOutlineProject } from "react-icons/ai";
import { BsPersonCheck } from "react-icons/bs";
import {MdOutlineMiscellaneousServices } from "react-icons/md";
import { useState } from 'react'
function NavBar() {
    const [hamburger, setHamburger] = useState(true)
    const handleClick= () => {
        setHamburger(true)
    } 
  return (
     <div>
       <div className="navbar z-10 h-20 w-screen fixed top-0 md:flex md:flex-row md:items-center md:justify-between md:pl-5 md:pr-10 md:z-10 lg:pl-10 lg:pr-16 xl:pr-24">
       <div className="logo w-32 h-32 md:h-fit">
           <Link to='/'>
                <img src={Logo} alt='pHoenix' />
           </Link>
       </div>
        <nav onClick={handleClick} className={hamburger ? 'hidden md:flex md:space-x-6 md:activelink xl:space-x-10 xl:text-lg' : 'show bg-blue-400 z-10'}>
            <NavLink to='/' > <AiOutlineHome className='i md:hidden md:active'/>Home</NavLink>
            <NavLink to='/about'><BsPersonCheck className='i md:hidden'/>About</NavLink>
            <NavLink to='/projects'><AiOutlineProject className='i md:hidden'/>Projects</NavLink>
            <NavLink to='/services'><MdOutlineMiscellaneousServices className='i md:hidden'/>Services</NavLink>
            <NavLink to='/contact'><RiContactsLine className='i md:hidden'/>Contact</NavLink>
       </nav>
       <div className="icons md:hidden absolute right-6 top-8 text-3xl text-blue-500">
        {
            hamburger ?  <GiHamburgerMenu onClick={() => setHamburger(!hamburger)}className='icons'/>  : <RxCross1 className='icons' onClick={() => setHamburger(!hamburger)} />
        }
       </div>
       </div>
       <Outlet/>
     </div>
  )
}

export default NavBar