import React from 'react'

function CharDetail({char,goBack}) {
return (
    <div className='bg-gray-900 flex justify-center item-center flex-col text-fuchsia-400 text-center h-screen'>
    <button onClick={goBack}>Back to List</button>
    <img src={char.image} alt="" className='w-[200px] mb-[20px] rounded-md mx-auto'/>
            <h2 className='text-center text-white'>{char.name}</h2>
            <p className='m-4 text-center text-white'><strong className='text-fuchsia-300'>Species:</strong>{char.species}</p>
            <p className='m-4 text-center text-white'><strong className='text-fuchsia-300'>Origin:</strong>{char.origin}</p>
            <p className='m-4 text-center text-white'><strong className='text-fuchsia-300'>Gender:</strong>{char.gender}</p>
            



      
    </div>
  )
}

export default CharDetail
