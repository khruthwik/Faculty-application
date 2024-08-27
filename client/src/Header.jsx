import { useContext } from "react";
import {Link} from "react-router-dom";
import { UserContext } from "./usercontext";

export default function Header(){
    const {user} = useContext(UserContext);
    return(
        <header className="flex p-4 justify-between">
        <a href="" className=" flex items-center gap-1 text-pink-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 -rotate-90  rounded-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
        </svg>
        <span className="font-bold text-xl">PARADISE</span>
        </a>
        <div className="flex border border-gray-500 rounded-full px-4 py-2 gap-2  mr-32 shadow-md justify-between ml-32 "> 
        <div className=" font-thin">Anywhere</div>
        <div className="border border-l border-gray-400"></div>
        <div className=" font-thin ">Anyweek</div>
        <div className=" border border-l border-gray-400"></div>
        <div className="font-thin">Add guests</div>
        <button className="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 bg-pink-400 rounded-full p-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        </button>
        </div>
        <Link to={user?'/account':'/login'} className="flex border items-center border-gray-500 rounded-full px-4 py-2 gap-2 justify-between ">
        <button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        </button>
        <button className="border rounded-full bg-pink-500  shadow-lg text-white overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
        </button>
        {!!user && (
            <div>
                {user.name}
            </div>
        )}
        </Link>

       </header>
    );
}