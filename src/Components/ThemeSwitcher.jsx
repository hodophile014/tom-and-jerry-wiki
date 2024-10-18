import React, { useContext } from 'react'
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { ThemeContext } from './ThemeContext';
function ThemeSwitcher() {
    const {theme,toggleTheme} = useContext(ThemeContext);

  return (
    <div>
        <button onClick={toggleTheme} className='px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-blue-600 transition'>
        {theme==='light'?<FaMoon />:<CiSun />}
        </button>
      
    </div>
  )
}

export default ThemeSwitcher
