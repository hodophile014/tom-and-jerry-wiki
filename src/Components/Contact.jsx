import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
function Contact() {
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate('/');
  }
  return (
    <div className='flex justify-center items-center bg-gray-400 h-screen w-screen'>
      <div className='bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg h-4/5 w-4/5 flex flex-row h-max w-max'>
      <div className='flex flex-col '>
        <div><img className="h-1/2 mt-5 rounded-full shadow-lg" src="https://i.pinimg.com/originals/f4/ee/5b/f4ee5ba03faa4aa849660bad7f289f8e.gif" alt=""></img></div>
        <div className='text-3xl m-4 text-black  flex space-x-8'>
          <a href="" className='hover:text-4xl hover:text-gray-400'><FaTwitter /></a>
          <a href="" className='hover:text-4xl hover:text-gray-400'><FaInstagram /></a>
          <a href="" className='hover:text-4xl hover:text-gray-400'><IoIosMail /></a>
        </div>
      </div>
      <div className='flex flex-col'>
        <h2 className='text-2xl text-orange-500 font-bold'>REACH OUT US!!</h2>
        <h3 className='text-xl text-white italic mt-5'>Contact us for more query.</h3>
        <label className='text-xl mt-5 text-orange-500'>Name</label>
        <input type="text" placeholder='enter username' className='bg-gray-400 rounded-md w-full mt-5'/>
        <label className='text-xl mt-5 text-orange-500'>EMAIL</label>
        <input type="text" placeholder='enter username' className='bg-gray-400 rounded-md w-full mt-5'/>
        <label className='text-xl mt-5 text-orange-500'>Please enter the details of your request</label>
        <textarea type="text" placeholder='enter username' className='bg-gray-400 rounded-md w-full mt-5 h-[150px]'/>
        <div className='mt-5 flex'>
          <button className='m-4 text-white bg-gradient-to-r from-gray-400 to-orange-500 h-[40px] w-[150px] rounded-md hover:h-[50px]'>SUBMIT</button>
          <button className=' m-4 text-white bg-gradient-to-l from-gray-400 to-orange-500 h-[40px] w-[150px] rounded-md hover:h-[50px]' onClick={handleClick}>BACK</button>
        </div>

      </div>


      </div>

      
    </div>
  )
}

export default Contact
