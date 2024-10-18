import React from 'react'
import '../App.css'

function LoadingSpinner() {
  return (
  <div className='flex justify-center items-center h-screen'>
      <div className='border-4  border-gray-200 rounded-full w-[100px] h-[100px] spinner'>
      <img className=" rounded-full" src="https://i.pinimg.com/564x/61/36/a5/6136a5a3d6e0e41e8cdc456da960304c.jpg" alt="" />
    </div>
  </div>
  )
}

export default LoadingSpinner
