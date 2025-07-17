import React, {createContext, useState} from "react";
export const ThemeContext = createContext();
export const ThemeProvider = ({children}) =>{
    const[darkMode, setDarkMode] = useState(false);
    const toggleTheme =() => setDarkMode((prev)=> !prev);

    return(
        <ThemeContext.Provider value = {{darkMode, toggleTheme}}>
            <div className = {darkMode ? "dark" : "light"}>{children}</div>
        </ThemeContext.Provider>
    );
}