import React from 'react'

export const Contact = () => {
  return (
  <>
  
  <div className='p-2'>

  <div className='  mt-[12em] max-w-2xl mx-auto shadow-lg border border-teal-400 ring-teal-300 sm:flex  '>

   <div className='p-10  '>
    <h1 className='text-[2rem] '>Help  Support</h1>
    <p className='font-light opacity-90'>Please type your queries in the Message Section</p>


   <form action="" className='flex flex-col mt-4 '>
     <label htmlFor="">Name</label>
     <input type="text" name='Name' className='mt-2 border border-teal-200  active:border-teal-400' />
     <label htmlFor=" " className='mt-2'>Email</label>
     <input type="text" name='email' className='mt-2 border border-teal-200' />
      
      <label htmlFor="" className='mt-2 '>Subject</label>

      <textarea name="" id="" cols="20" rows="5" className='border border-teal-300 rounded-lg'></textarea>

      <input type="submit" value="Submit" className="mt-10 bg-teal-500 text-white font-medium py-2 px-4 w-[100px] mx-auto rounded-md hover:bg-blue-600 cursor-pointer "  />
   </form>

   </div>

   <div className='flex flex-col bg-teal-500 text-white p-3 gap-10  '>
    <h1></h1>

    <div>
      <p>

      Address: Punjab 140601 Rajpura Patiala Near Neelam Hospital 
      </p>


    </div>
    <div>Phone:+91 1800000212</div>
    <div>Email:info@DhruvShramik.com</div>
    <div>Website ________</div>
    
   </div>

  </div>
    
  </div>

  </>
  )
}
