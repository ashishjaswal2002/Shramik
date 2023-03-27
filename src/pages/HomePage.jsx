import React from "react";
import { NavLink } from "react-router-dom";
export const HomePage = () => {
  return (
      <>
      <div className="bgImg "></div>
      <header className="flex justify-around w-[100%] h-[50px] fixed top-0 bg-white items-center bg-opacity-70 backdrop-blur-sm">
          <h1>Logo</h1>
          
          <nav className="flex gap-16 items-center">
  <NavLink className="nav-link" activeClassName="active">Home</NavLink>
  <NavLink className="nav-link" to="signin" activeClassName="active">Signin</NavLink>
  <NavLink className="nav-link" to="login" activeClassName="active">Login</NavLink>
  <NavLink className="nav-link" activeClassName="active">Contact</NavLink>
</nav>
      </header>
        
      <div className=" top-[35%] text-center w-[22em] mx-auto absolute left-[50%] right-[50%] leading-8
        -translate-x-[50%] -translate-y-[50%]">
        <p className="text-[4rem] text-white font-extrabold">Shramik</p>

        <p className="mt-5 text-white text-[1.2rem]">Uniting shramiks across the nation for a brighter tomorrow.</p>
      </div>
    </>
  );
};
