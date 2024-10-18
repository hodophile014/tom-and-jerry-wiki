
import './App.css';


import { ThemeProvider } from './Components/ThemeContext';
import { Routes,Route } from 'react-router-dom';
import About from './Components/About';
import Characters from './Components/Characters';
import Contact from './Components/Contact';
import  Home  from './Components/Home';
function App() {
 
  return (
   <>
   <ThemeProvider>
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/characters" element={<Characters/>}/>
      <Route path="/contact" element={<Contact/>}/>


     </Routes>
   </ThemeProvider>
  
   </>
   
  );
}

export default App;
