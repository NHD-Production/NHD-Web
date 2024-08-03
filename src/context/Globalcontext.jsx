
'use client'
import React, {useState, createContext} from "react";

export const GlobalContext = createContext({});

export default function GlobalProvider({children}) {



    const globalValues={
        nav: useState(600) ,
        theme: useState('dark')
    }

    return (
        <GlobalContext.Provider value ={globalValues}>
            {children}
        </GlobalContext.Provider>
    )
};