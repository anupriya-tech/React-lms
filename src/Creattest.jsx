import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Testmodule from './Testmodule';


function Creattest() {
  return (
    <div class="gap-4 grid-cols-4 mt-10 ms-60 mt-10 justify-top">
 
     <div class=" flex gap-4 grid-cols-4 mr-80  max-[640px]:inline  max-[900px]:inline">
     
     <Link to="/Testmodule"><button class="bg-transparent hover:bg-blue-950 text-black-60 hover:text-white py-2 px-2 border border-black-100 hover:border-transparent rounded">All Test</button><br /><br /></Link> 
     <Link to="/Creattest"><button class="bg-transparent hover:bg-blue-950 text-black-60 hover:text-white py-2 px-2 border border-black-100 hover:border-transparent rounded">Create Test</button><br /><br /></Link> 
     <Link to="/Creattestmodule"><button class="bg-transparent hover:bg-blue-950 text-black-60 hover:text-white py-2 px-2 border border-black-100 hover:border-transparent rounded">Test Result</button><br /><br /></Link> 
     
   
   </div>
    <div class="flex justify-center min-h-96  mt-10 gap-2 mr-60 ">
    <div >
   
     
      <div class='text-1s font-bold text-gray-500 text-sm '> Test Name <input class="w-80 ml-28 h-8 border-gray-200 border-2 box-border" type="text" /></div><br />
      <div class='text-1s font-bold text-gray-500 text-sm '>Test Duration <input class="w-80 ml-24 h-8 border-gray-200 border-2 box-border" type="text" /></div><br />
      <div class='text-1s font-bold text-gray-500 text-sm '>Select courses
        <select class="w-80 ml-24 h-8 border-gray-200 border-2 box-border" name="courses" id="courses">
          {/* Add course options here */}
          <option value="">Select a course</option>
        </select></div>
      </div>
      <Outlet />
      </div>
      </div>
      
       
     
     
     
  )

}


export default Creattest;