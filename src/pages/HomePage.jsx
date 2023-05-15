import React from "react";

import { SectionOne } from "../components/SectionOne";

import { NavLink } from "react-router-dom";

import {AiFillLinkedin,AiFillTwitterCircle,AiFillFacebook,AiOutlineInstagram} from 'react-icons/ai'

import {DownArrow} from '../assets/DownArrow'


export const HomePage = () => {
  

  
  
 
  return (
    <>


{/* <div
        className={`bgImg ${isLoggedIn ? "bgImg-loggedin" : ""}`}
      ></div> */}

     
       
        
<div className="bgImg"></div>
  <section>


      <div
        className=" top-[30%] text-center w-[20em] sm:w-[30em]  mx-auto absolute left-[50%] right-[50%] leading-8
        -translate-x-[50%] -translate-y-[50%] "
        >
        <p className=" text-[3.5rem] sm:text-[4em] text-white font-extrabold">Shramik</p>

        <p className="mt-5 text-white text-[1.3rem] leading-10 font-light opacity-75 sm:text-[1.5rem]">
          Uniting shramiks across the nation for a brighter tomorrow.
        </p>
    

{/* Addd Arrow  */}
      </div>


        </section>
        <section className=" p-2 max-w-[960px]
          mx-auto">
 <SectionOne/>


        
        </section>




        <footer className="w-[100%]  bg-black bg mt-2 bg-opacity-80 text-white rounded-t-lg">
 
       <div className=" p-10 border-b-2 w-full sm:max-w-[50em] mx-auto ">

     
          <div className="flex gap-4 mt-2 justify-evenly pt-7">


        <div className="flex flex-col gap-4 ">
         <div> <h1>About Shramik</h1></div>
          <div><p>Investor Relations</p></div>
          <div><p>Report Fraud</p></div>
          <div><p>Contact Us</p></div>
        </div>
        {/* Second d */}
        <div className="flex flex-col gap-3">
          <div><h1>Learn More</h1></div>
          <div><p>Privacy</p></div>
          <div><p>Security</p></div>

          <div><p>Terms</p></div>
          <div><p>Sitemap</p></div>
        </div>
        <div className="">
          <h1>Social Links</h1>
          <div className="flex flex-col  mt-4 gap-3">

          <div ><NavLink><AiFillLinkedin className="hover:text-blue-400"/></NavLink></div>
          <div><NavLink><AiFillTwitterCircle className="hover:text-blue-500" /></NavLink></div>
          <div><NavLink> <AiFillFacebook className="hover:text-blue-700" /></NavLink></div>
          
          <div><NavLink><AiOutlineInstagram className="hover:text-pink-400" /></NavLink></div>
          </div>
        </div>
          </div>
         

       </div>



       <div className=" text-center   mx-auto p-4 mt-3 ">
          <p className="tracking-wide">By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners.2023 © Shramik™ Ltd. All rights reserved.</p>

          </div>


        </footer>
    </>
  );
};
