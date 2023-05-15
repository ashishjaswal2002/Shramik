import React from 'react'
import useModalStore from '../store/State'
import { Link } from 'react-router-dom';
export const CategoriesSection = () => {

  const {isLogin }  = useModalStore();



  
  console.log(isLogin)
    
  return (
   <>

{isLogin &&

      <div className='grid grid-cols-1  pt-40 px-5  sm:grid-cols-3 gap-4 text-center '>
  
    <div className='video h-36 bg-teal-400 px-12 py-12'>
    <Link to='https://cuvette.tech/app/student/jobs/fulltimeJobs/filters?sortByDate=true'>

    Category One
    </Link>
    </div>
    <div className='video h-36 bg-red-400 px-12 py-12'>Two</div>
    <div className='video h-36 bg-pink-400 px-12 py-12'>Three</div>
    <div className='video h-36 bg-purple-400 px-12 py-12'>Four</div>
    <div className='video h-36 bg-yellow-400 px-12 py-12'>Five</div>
    <div className='video h-36 bg-green-400 px-12 py-12'>Six</div>
    </div>

}

   </>
  )
}
