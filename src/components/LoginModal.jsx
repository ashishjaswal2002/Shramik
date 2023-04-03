import React,{useEffect} from 'react'



import { createPortal } from 'react-dom'


export const LoginModal = ({closing,userlogedIn}) => {


  const stateHandler = (e)=>{
     e.preventDefault();
     closing();
     userlogedIn();
  }



  return (
    <>
      {createPortal(
       <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm">
        
       <form className="flex flex-col items-center w-[500px] bg-white rounded-lg p-4  relative   ">
       <div onClick={closing} class="before:absolute before:right-[2%]  before:top-[1%] before:content-['❌'] before:block mt-2 cursor-pointer">
       
  </div>

         {/* <label htmlFor="profile-pic" className="mb-2 font-medium text-gray-700">Profile Picture:</label>
         <input type="file" id="profile-pic" name="profile-pic" accept="image/*" required className="border-2 border-gray-300 p-2 rounded-md w-full mb-4" placeholder="Upload your profile picture"/> */}

         <label htmlFor="name" className="mb-2 font-medium text-gray-700">Name:</label>
         <input type="text" name='name' className="border-2 border-gray-300 p-2 rounded-md w-full mb-4" placeholder="Enter your name"/>

         <label htmlFor="email" className="mb-2 font-medium text-gray-700">Email:</label>
         <input type="text" name='email' className="border-2 border-gray-300 p-2 rounded-md w-full mb-4" placeholder="Enter your email"/>

         <label htmlFor="number" className="mb-2 font-medium text-gray-700">Phone Number:</label>
         <input type="number" name='number' className="border-2 border-gray-300 p-2 rounded-md w-full mb-4" placeholder="Enter your phone number"/>

         <label htmlFor="address" className="mb-2 font-medium text-gray-700">Address:</label>
         <textarea name="address" id="address" cols="30" rows="5" className="border-2 border-gray-300 p-2 rounded-md w-full mb-4" placeholder="Enter your address"></textarea>

         <input type="submit" value="Submit" className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 cursor-pointer" onClick={stateHandler}   />
       </form>
     </div>,
        document.getElementById('modal')
      )}
    </>
  )
}
