import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import '../../App.css'
import { Button } from '@mui/material';
import ReorderSharpIcon from '@mui/icons-material/ReorderSharp';
 import img  from '../../images/medicart carousel image/medicare-logo.png'
// import useFirebase from '../../Hook/Usefirebase';
import UseAuth from '../../Hook/UseAuth';


const Header = () => {
  const {user,logOut} = UseAuth();
    const [showLinks, setShowLinks] =useState(true)
    return (
   
       <div className='navbar '>
       
       <div className="leftside">
       <button className='text-white' onClick={() =>setShowLinks(!showLinks)}><ReorderSharpIcon/></button>
       <div><img style={{ width:"170px" }} src={img} alt="" /></div>
       <div className='links' id={showLinks? 'hidden':''}>


       <div className='flex'>
       
       <div className=' flex flex-col lg:block md:block 2xl:block sm:block'>
       <Link className='anchor ' to='/home'>Home</Link>
       <Link className='anchor' to='/service'>Service</Link>
       <Link className='anchor' to='/Guide'>Guide</Link>
       <Link className='anchor' to='/contact'>Contact</Link>
       <Link to="/login" className='anchor'>login</Link>
       <Link className='anchor' to='/Registration'>Register</Link>
       </div>
       {user?.displayName && <div className=' flex flex-col justify-center items-center'>
        
 
        
        <img className='h-1/4 w-1/4 rounded-full lg:hidden md:hidden sm:hidden 2xl:hidden' src={user.photoURL} alt="" />
        
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-5 m-5 border border-blue-500 hover:border-transparent rounded inline" onClick={logOut}>
       Logout
       </button>
      </div>
      }
       
       </div>


   
    
    
       </div>
       
       </div>


       <div className="rightside">

      {user?.displayName && <div className='flex  items-center justify-between'>
        <p className='text-white text-xl hidden lg:block xl:block 2xl:block md:hidden'>{user.displayName}</p>
        <img className='h-1/4 w-1/4 rounded-full mr-3 hidden lg:block xl:block 2xl:block md:block' src={user.photoURL} alt="" /></div>}
      {user?.email && <div className='flex  items-center justify-between'>
        <p className='text-white text-xl hidden lg:block xl:block 2xl:block md:hidden'>{user.displayName}</p>
        <img className='h-1/4 w-1/4 rounded-full mr-3 hidden lg:block xl:block 2xl:block md:block' src='https://www.lightsong.net/wp-content/uploads/2020/12/blank-profile-circle-300x300.png' alt="" /></div>}
       <input type="text" placeholder='Search...' />
      
     
     <SearchIcon style={{margin:'0' ,padding:'0', color:'white'}}></SearchIcon>
     <Button className='search-btn'>Search</Button>
 
     {user?.email && <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-5 m-5 border border-blue-500 hover:border-transparent rounded hidden lg:block xl:block 2xl:block md:block" onClick={logOut}>
     Logout
   </button>}
     {user?.displayName && <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-5 m-5 border border-blue-500 hover:border-transparent rounded hidden lg:block xl:block 2xl:block md:block" onClick={logOut}>
     Logout
   </button>}
       </div>

       </div>
    );
};

export default Header;