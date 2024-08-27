import { useContext } from "react"
import Header from "../Header"
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../usercontext"
import LoginPage from "./Loginpage";

export default function AccountPage(){
    const {user,ready} = useContext(UserContext);
    if(!ready){
        return <div>Loading...</div>
    }
    if(ready && !user){
        return <LoginPage/>;
    }
    let {subpage} = useParams();
    console.log(subpage);

    if(subpage === undefined){
        subpage = 'profile';
    }

    async function Logout(){
        await post('/Logout');
        
    }

    function linkClasses (type=null){
        let classes='py-1 px-2 bg-gray-300 rounded-full font-extralight text-black';
       if(type===subpage){
        classes = 'py-1 px-2 bg-pink-300 rounded-full font-extralight text-white';
       }
        return classes;
    }
    return (
        <div className="flex flex-col justify-center">
        <Header/>
      <div className=" flex flex-col justify-between mx-auto">

        <nav className=" flex mt-1 gap-5 mr-28 mx-auto">
        <Link className= {linkClasses('profile')} to='/account'>My profile</Link>
        <Link className= {linkClasses('bookings')} to='/account/bookings'>My bookings</Link>
        <Link className= {linkClasses('places')} to='/account/places'>My places</Link>   
        </nav>
        
        {subpage==='profile' && (<div className="mt-4 font-light">
            You are logged in as {user.name}( {user.email} ) <br/>
            <div className=" ml-44 mt-6">
            <button className=" bg-pink-300 rounded-full px-2 py-1">Logout</button>
            </div>
            
        </div>)}
        
       
       
      





        </div>
      
      
       
        </div>
    )
}