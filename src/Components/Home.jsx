import React from 'react'
import { useState,useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';
import Header from './Header'
function Home() {
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>setLoading(false),3000);
    return () => clearTimeout(timer);

  },[]);
  return (
     <div>
     {loading? (<LoadingSpinner/>):(
         <div style={{
          backgroundImage: 'url(https://wallpaperaccess.com/full/5297777.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh'
         }}>
          <Header/>
          </div>
         
     )}
    </div>
  

  )
}

export default Home
