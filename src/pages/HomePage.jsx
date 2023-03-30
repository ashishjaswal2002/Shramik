import React from "react";

import { SectionOne } from "../components/SectionOne";






export const HomePage = () => {





  
  
 
  return (
    <>


{/* <div
        className={`bgImg ${isLoggedIn ? "bgImg-loggedin" : ""}`}
      ></div> */}

     
       
        
<div className="bgImg"></div>
  <section>


      <div
        className=" top-[30%] text-center w-[30em] mx-auto absolute left-[50%] right-[50%] leading-8
        -translate-x-[50%] -translate-y-[50%]"
        >
        <p className=" text-[3.5rem] sm:text-[4rem] text-white font-extrabold">Shramik</p>

        <p className="mt-5 text-white sm:text-[1.9rem] leading-10 font-light opacity-75 text-[1.5rem]">
          Uniting shramiks across the nation for a brighter tomorrow.
        </p>
        
         

      </div>
        </section>
        <section className=" p-2 max-w-[960px]
          mx-auto">
 <SectionOne/>


        
        </section>
    </>
  );
};
