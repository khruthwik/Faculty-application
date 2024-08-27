import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({children}){
    const [user,setUser] = useState(null);
    const [ready,setReady] = useState(false);
    useEffect(()=>{
        if(!user){
           const {data} = axios.get('http://127.0.0.1:4000/profile');
           setUser(data);
           setReady(true);
        }
    },[]);

    return(
        <UserContext.Provider value={{user,setUser,ready}}>
           {children};
        </UserContext.Provider>
    )
}
