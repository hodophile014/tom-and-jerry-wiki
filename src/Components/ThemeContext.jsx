import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState('Dark');
    useEffect(()=>{
        const savedTheme = localStorage.getItem('theme');
        if(savedTheme){
            setTheme(savedTheme);
        }
    },[]);

    const toggleTheme = () =>{
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme',newTheme);
    }
 return(
    <ThemeContext.Provider value={{theme,toggleTheme}}>
        <div className={theme==='light'?'bg-white text-gray-900': 'bg-gray-900 text-blue-100'} style={{minHeight: '100vh'}}>
           {children}
        </div>
    </ThemeContext.Provider>
 )
}