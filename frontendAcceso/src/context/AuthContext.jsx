
import { createContext, useContext } from 'react';
import { useState } from 'react';
//crear el contexto
const AuthContext= createContext();
//children va a ser todo lo que este dentro del AuthProvedor
export const AuthPro=({children})=>{
    const [token, setToken]= useState(null);
    const guardarToken=(tk/*recibir token*/)=>{
        setToken(tk);

        }
    return(
        <AuthContext.Provider value={{token, guardarToken}}>
            {children}
        </AuthContext.Provider>
    )
    }
    //crear un hook para usar el contexto
    export const useAuth=()=>{
        return useContext(AuthContext);
    }