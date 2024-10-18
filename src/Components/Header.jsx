import React, { useState } from 'react'
import {Menu,X} from "lucide-react";
import { navItems } from '../Constants/Data';
import {NavLink} from "react-router-dom"
import ThemeSwitcher from './ThemeSwitcher';
function Header() {
  const [mobileDrawerOpen,setMobileDrawerOpen] = useState(false);
  const toggleNavBar = () =>{
    setMobileDrawerOpen(!mobileDrawerOpen);
  }
  return (
  <div>
    <nav className='sticky top-0 py-3 z-50 backdrop-blur-lg border-b border-neutral-700/80'>
    <div className='container px-4 mx-auto relative text-sm'>
      <div className='flex justify-between items-center'>
      <div className='flex items-center flex-shrink-0'>
        <img className='h-10 mr-2 w-10 rounded-full' src="https://i.pinimg.com/564x/61/36/a5/6136a5a3d6e0e41e8cdc456da960304c.jpg" alt=""/>
        <span className='text-xl tracking-tight'>tom and jerry</span>
      </div>
      <ul className='hidden lg:flex ml-14 space-x-12'>
        {navItems.map((item,index)=>(
          <li key={index}>
            <NavLink to={item.href}>{item.label}</NavLink>
            
          </li>
          
        ))}
        <ThemeSwitcher/>
      </ul>
      <div className='lg:hidden md:flex flex-col justify-end'>
    <div className='flex flex-row'>
    <ThemeSwitcher/>
        <button onClick={toggleNavBar}>
          {mobileDrawerOpen?<X/>:<Menu/>}
        </button>
    </div>

      </div>
      {mobileDrawerOpen && (
        <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-row justify-center items-center lg:hidden text-white'>
          <ul>
            {navItems.map((item,index)=>(
              <li key={index} className='py-4'>
                <NavLink to={item.href}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
          </div>
      )}
      </div>
    
    </div>

    </nav>


      
    </div>
  )
}

export default Header
