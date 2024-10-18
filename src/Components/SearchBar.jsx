import React from 'react'

function SearchBar({setSearchTerm}) {
  return (
    <div>
   <input 
   type="text"
   placeholder='search characters'
   onChange={(e)=>setSearchTerm(e.target.value)}/>
      
    </div>
  )
}

export default SearchBar
