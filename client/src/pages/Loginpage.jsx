import {useContext, useState } from "react";
import Headerr from "../Header";
import {Link,Navigate} from "react-router-dom";
import axios from "axios";
import { UserContext } from "../usercontext";

import AccountPage from "./Accountpage";


export default function LoginPage(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [het,setHet] = useState(false);
    const {setUser} = useContext(UserContext);



    async function handleLoginSubmit(ev) {
        ev.preventDefault();
        try {
          const {data} = await axios.post('http://127.0.0.1:4000/login',{email,password});
               setUser(data);
               console.log(data);
               setHet(true);
               
        } catch (err) {
            alert('login failed,Check password or Register if New');
        }
        if(het){
            alert('Login successfull');
            <Navigate to = {'http://localhost:5173/login'}/>
        }

    }


    return(
        <div>
              <Headerr/>
            <div className="flex flex-col mt-36">
            <div className="text-center text-2xl font-extralight">LOGIN</div>
            <div className=" mt-8">
            <form className="flex flex-col max-w-sm mx-auto gap-2" onSubmit={handleLoginSubmit}>
            <input className="text-center border rounded-full py-2 bg-pink-200" type="email" placeholder="your@email.com"  value={email} onChange={ev=>setEmail(ev.target.value)}/>
            <input className="text-center border rounded-full py-2 bg-pink-200 " type="password" placeholder="password"  value={password} onChange={ev=>setPassword(ev.target.value)} />
            <button className=" border rounded-full p-1 bg-pink-400 text-white">Login</button>
            <Link to={'/registor'} className=" mx-auto py-2 font-extralight">Not a user? Click here to registor!!</Link>
            </form>
            </div>
            </div>   
        </div>
    );



}