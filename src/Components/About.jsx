import React from 'react'
import {useNavigate} from 'react-router-dom'

function About() {
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate('/');

  }
  return (
    <div>
      <div className='flex flex-col justify-center align-center text-center h-max'>
       <div className='flex justify-center mt-10'>
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Tom_and_Jerry_logo.svg/375px-Tom_and_Jerry_logo.svg.png"/>
       </div>
       <div>
        <h2 className='text-xl italic'>Franchise logo since 1985</h2>
       </div>
       <div className='flex lg:flex-row mt-20 sm:flex-col'>
        <div className='m-8 flex justify-center'>
          <img  className="rounded-full flex" src="https://i.pinimg.com/736x/6d/55/05/6d5505eae7c9f757f5a9842179a0b296.jpg"/>
        </div>
        <div className='m-5'>
          <h2 className='text-3xl text-pink-400'>About Tom & Jerry</h2>
          <p className='flex text-center text-xl mt-10'>
          Tom and Jerry is an American animated media franchise and series of comedy short films created in 1940 by William Hanna and Joseph Barbera.
           Best known for its 161 theatrical short films by Metro-Goldwyn-Mayer, the series centers on the
            enmity between the titular characters of a cat named Tom and a mouse named Jerry.
          </p>
          <h3 className='mt-10 text-xl text-blue-400'>To Know More about tom and jerry <a href="https://en.wikipedia.org/wiki/Tom_and_Jerry" className='bg-pink-400 text-white px-4 py-2 rounded-md hover:text-yellow-400'>Visit!!</a></h3>

        </div>


       </div>
       <div className=''>
        <button className='bg-blue-400 py-2 px-4 rounded-md mb-12 text-white' onClick={handleClick}>BACK</button>
       </div>
      </div>
       
    </div>
  )
}

export default About
