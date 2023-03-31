import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState,useEffect} from 'react';

export const HeaderSection = () => {

  const [isOpen,setOpen] = useState(false);

  
  function toggleNav(){
    setOpen(!isOpen);


  }

useEffect(()=>{
   
  document.body.style.overflow=isOpen?'hidden':'auto';


  return()=>{
    document.body.style.overflow='auto';
    
  }

},[isOpen])


  return (
   <>
   {isOpen &&
       <div className='bg-black w-full h-screen bg-opacity-60 backdrop-blur-md fixed '>
        </div>
}
     <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-4  fixed top-0 
      bg-white overflow-hidden    " >
    

      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
        <div className="flex items-center justify-between">
          <NavLink className="flex-none text-xl font-semibold text-white dark:text-gray-800" to='/' >Logo</NavLink>
          <div className="sm:hidden">
            <button onClick={toggleNav} type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-gray-700 font-medium bg-gray-800 text-gray-400 shadow-sm align-middle hover:bg-gray-700/[.25] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-dark" aria-controls="navbar-dark" aria-label="Toggle navigation">
           
          
            <svg width="11" height="10" className="" viewBox="0 0 72 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.8769 32.9393L28.4077 50.6963L23.3219 57L0 28.5L23.3219 0L28.4077 6.30374L13.8769 24.0607H72V32.9393H13.8769ZM72 1.86449V10.743H35.6731V1.86449H72ZM72 46.257V55.1355H35.6731V46.257H72Z" fill="#F8F8F8"/>
</svg>


            </button>
          </div>
        </div>
        <div id="navbar-dark" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
          <div className="flex flex-col gap-8 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5   h-[18rem] sm:h-[2.1em]">
   


            <div>User Profile</div>
             
            <NavLink className=" font-medium " to='userlogin'  aria-current="page" >User Login</NavLink>
            <NavLink className=" font-medium " to='workerlogin' aria-current="page">Worker Login</NavLink>
            <NavLink className=" font-medium " to='contact' aria-current="page" >Contact</NavLink>
            <NavLink>Logout</NavLink>
            <div>Change Language</div>

          </div>
        </div>
      </nav>
    
    </header>
        

   
   </>
  )
}
