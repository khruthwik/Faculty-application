import { useState } from "react";
import Headerr from "../Header";
import {Link} from "react-router-dom";
import axios from "axios";

export default function Registorpage(){


    const[name,setName] = useState('');
    const[password,setPassword] = useState('');
    const[email,setEmail] = useState('');



    async function registeruser(ev){
        ev.preventDefault()
        try{
        await axios.post('http://127.0.0.1:4000/register',{name,email,password});
        alert('Registration successfull.Now you can login');
        }catch(e){
        console.log(e);
        alert('Registration failed');
        } 
    }


    return(
        <div>
            <Headerr/>
            <div className="flex flex-col mt-36">
            <div className="text-center text-2xl font-extralight">REGISTER</div>
            <div className=" mt-8">

            <form className="flex flex-col max-w-sm mx-auto gap-2" onSubmit={registeruser}>
            <input className="text-center border rounded-full py-2 bg-pink-200"type="text" placeholder="name" value={name} onChange={ev=>setName(ev.target.value)}/>
            <input className="text-center border rounded-full py-2 bg-pink-200" type="email" placeholder="your@email.com" value={email} onChange={ev=>setEmail(ev.target.value)} />
            <input className="text-center border rounded-full py-2 bg-pink-200 " type="password" placeholder="password" value={password} onChange={ev=>setPassword(ev.target.value)} />
            <button className=" border rounded-full p-1 bg-pink-400 text-white">Registor</button>
            <Link to={'/Login'} className=" mx-auto py-2 font-extralight">Aldready a user? Click here to Login!!</Link>
            </form>
            </div>
            </div>
        </div>
    );
}