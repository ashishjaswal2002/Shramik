import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "../shared/Navbar";

import { useState } from "react";


export const HomePage = () => {

  const [showModal,setModal] = useState(true);


 const closeModalHandler= ()=>{
  setModal(false);
 }

 const showModalHandler = ()=>{
  setModal(true);
 }



  return (
      <>
      <div className="bgImg "></div>
      <header className="flex justify-around w-[100%] h-[50px] fixed top-0 bg-white items-center bg-opacity-70 backdrop-blur-sm rock">
          <h1>Logo</h1>
          
          {showModal &&
          <nav className="flex gap-16 items-center mt-[0.24rem] resp  ">
            <button className='self-end pr-2 pt-2' onClick={closeModalHandler} >❌</button>
  <NavLink className="nav-link">Home</NavLink>
  <NavLink className="nav-link" to="signin" >User Login</NavLink>
  <NavLink className="nav-link" to="login" >Worker Login</NavLink>
  <NavLink className="nav-link" >Contact</NavLink>
  
</nav>
}
 
 <button onClick={showModalHandler}>
  {!showModal &&
  <Navbar className=''/>}
  </button>
  
    
      </header>
        
      <div className=" top-[30%] text-center w-[22em] mx-auto absolute left-[50%] right-[50%] leading-8
        -translate-x-[50%] -translate-y-[50%]">
        <p className="text-[4rem] text-white font-extrabold">Shramik</p>

        <p className="mt-5 text-white text-[1.2rem]">Uniting shramiks across the nation for a brighter tomorrow.</p>
      </div>
    </>
  );
};
