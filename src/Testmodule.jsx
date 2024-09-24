import React from 'react';
import { Outlet } from 'react-router-dom';

import App from './App';
import Creattest from './Creattest';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Creattestmodule from './Creattestmodule';

function Testmodule() {
  return (
    <div class="gap-4 grid-cols-4 mt-10 ms-60 mt-10 justify-top">
 
     <div class=" flex gap-4 grid-cols-4 mr-80  max-[640px]:inline  max-[900px]:inline">
     
     <button class=" w-20 h-10 bg-transparent hover:bg-blue-950 text-black-60 hover:text-white py-2 px-2 border border-black-100 hover:border-transparent rounded">All Test</button>
     <Link to="/Creattest"><button class="bg-transparent hover:bg-blue-950 text-black-60 hover:text-white py-2 px-2 border border-black-100 hover:border-transparent rounded">Create Test</button><br /><br /></Link> 
     <Link to="/Creattestmodule"><button class="bg-transparent hover:bg-blue-950 text-black-60 hover:text-white py-2 px-2 border border-black-100 hover:border-transparent rounded">Test Result</button><br /><br /></Link> 
     
     <Outlet />
   </div>
   
    <div  class="flex justify-center mr-80  mt-10 gap-8 ">
      <div class=" shadow-2xl box-border h-80 w-80 p-4  border-2 rounded-lg shadow-[rgba(1,41,81)_0px_-6px_0px_0px]" >
   
     
   <p class="text-slate-500 hover:text-blue-800 text-2xl font-bold"><h1>Frontend Developer</h1></p><br/>
   <p class="border-b-2 text-blue-900 font-bold">HTML CSS</p><br/>
   <p class="border-b-2 text-blue-900 font-bold">Javascript, ReactJS </p>
  
   </div>
   <div class="shadow-2xl box-border h-80 w-80 p-4  border-2 rounded-lg shadow-[rgba(1,41,81)_0px_-6px_0px_0px]" >
   
     
   <p class="text-slate-500 hover:text-blue-800 text-2xl font-bold"><h1>MERN STACK</h1></p><br/>
   <p class="border-b-2 text-blue-900 font-bold">Javascript</p><br/>
   
   
   </div>
   
 </div>
 </div> 

  );
  
}


export default Testmodule;