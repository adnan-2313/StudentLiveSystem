import { createContext } from "react";

// create context 
const AppContext = createContext();
// to create a provider function  -> it is used globally
const AppProvider = ({ children })=>{
    return (
        <AppContext.Provider value={"Welcome to"}>{children}</AppContext.Provider>
    )
}

export {AppContext,AppProvider};