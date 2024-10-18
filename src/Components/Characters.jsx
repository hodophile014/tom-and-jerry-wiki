import React,{useState} from 'react'
import { char } from '../Constants/Data'
import SearchBar from './SearchBar';
import CharDetail from "./CharDetail"
import {useNavigate} from 'react-router-dom'
function Characters() {
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate('/');
  }
  const [selectedCharacter,setSelectedCharacter] = useState(null);
  if(selectedCharacter){
    return(
      <CharDetail char={selectedCharacter} goBack={()=>setSelectedCharacter(null)}/>
    )
  }
  

  return (
    <div className='flex flex-col bg-gray-900 text-fuchsia-300 justify-center items-center font-mono'>
      <div className='flex flex-col'>
         <div><h1 className='text-4xl m-4 font-mono'>Characters</h1></div>
         <div className='flex justify-center'>
         <button className='text-white bg-fuchsia-400 py-2 px-4 rounded-md' onClick={handleClick}>BACK</button>
         </div>
      </div>
     <div className='flex flex-col'>
     
     <div className='flex justify-center flex-wrap'>
        {char.map((item,index)=>(
          <div key={index} className='border-1 border-solid border-white-400 rounded-md m-[10px] p-[10px] w-[250px] shadow-custom'>
            <img src={item.image} alt="" className='w-full rounded-md'/>
            <h2 className='text-center text-white'>{item.name}</h2>
            <p className='m-4 text-center text-white'><strong className='text-fuchsia-300'>Species:</strong>{item.species}</p>
            <p className='m-4 text-center text-white'><strong className='text-fuchsia-300'>Origin:</strong>{item.origin}</p>
            <p className='m-4 text-center text-white'><strong className='text-fuchsia-300'>Gender:</strong>{item.gender}</p>
            <button className='bg-fuchsia-400 py-2 px-4 rounded-md text-white' onClick={()=>setSelectedCharacter(item)}>MORE</button>

          </div>
        ))}


      </div>
      
     </div>

    </div>
  )
}

export default Characters
