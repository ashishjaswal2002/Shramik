import React from "react";
import { NavLink } from "react-router-dom";


export const HomePage = () => {

  
 
  return (
    <>

      <div className="bgImg relative "></div>
     <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-4  fixed top-0  bg-white">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
        <div class="flex items-center justify-between">
          <a class="flex-none text-xl font-semibold text-white dark:text-gray-800" href="#">Logo</a>
          <div class="sm:hidden">
            <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-gray-700 font-medium bg-gray-800 text-gray-400 shadow-sm align-middle hover:bg-gray-700/[.25] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-dark" aria-controls="navbar-dark" aria-label="Toggle navigation">
           
          
            <svg width="11" height="10" className="" viewBox="0 0 72 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.8769 32.9393L28.4077 50.6963L23.3219 57L0 28.5L23.3219 0L28.4077 6.30374L13.8769 24.0607H72V32.9393H13.8769ZM72 1.86449V10.743H35.6731V1.86449H72ZM72 46.257V55.1355H35.6731V46.257H72Z" fill="#F8F8F8"/>
</svg>


            </button>
          </div>
        </div>
        <div id="navbar-dark" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
          <div class="flex flex-col gap-8 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5   h-[14rem] sm:h-[1em]">
            <NavLink className=" font-medium"  aria-current="page">Home</NavLink>
            <NavLink className=" font-medium " aria-current="page" >Contact</NavLink>
            <NavLink className=" font-medium " aria-current="page" >User Login</NavLink>
            <NavLink className=" font-medium " aria-current="page">Worker Login</NavLink>
          </div>
        </div>
      </nav>
    </header>
       
        


      <div
        className=" top-[30%] text-center w-[30em] mx-auto absolute left-[50%] right-[50%] leading-8
        -translate-x-[50%] -translate-y-[50%]"
      >
        <p className="text-[4rem] text-white font-extrabold">Shramik</p>

        <p className="mt-5 text-white text-[1.9rem] leading-10 font-light opacity-75">
          Uniting shramiks across the nation for a brighter tomorrow.
        </p>
      </div>
    </>
  );
};
