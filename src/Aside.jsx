import React from 'react'
import styles from './Project.module.css'; 
import Module from './Module';
import Middelcard from './Middelcard';
import Testmodule from './Testmodule';
import { Link } from 'react-router-dom';
import Resources from './Resources';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Aside() {
  return (
  <div className="bg-cyan-500 shadow-lg shadow-cyan-500/50 "> 
  <div className="mt-10 absolute min-h-full min-w-52 top-55 start-0 ...bg-cyan-500 shadow-lg shadow-cyan-500/50 ">
  <Link to="/Module"> <button className="box-border h-10 w-48 p-2 border-2 ...bg-transparent hover:bg-blue-950 text-black-100 font-semibold hover:text-white py-2 px-2 border border-white-100 hover:border-transparent rounded">Module</button><br /><br /></Link> 
  <Link to="/Middelcard"> <button className="box-border h-10 w-48 p-2 border-2 ...bg-transparent hover:bg-blue-950 text-black-100 font-semibold hover:text-white py-2 px-2 border border-white-100 hover:border-transparent rounded">Batch</button><br /><br /></Link> 
  <Link to="/Testmodule"> <button className="box-border h-10 w-48 p-2 border-2 ...bg-transparent hover:bg-blue-950 text-black-100 font-semibold hover:text-white py-2 px-2 border border-white-100 hover:border-transparent rounded">Test Module</button><br /><br /></Link>
  <Link to="/Resources"> <button className="box-border h-10 w-48 p-2 border-2 ...bg-transparent hover:bg-blue-950 text-black-100 font-semibold hover:text-white py-2 px-2 border border-white-100 hover:border-transparent rounded">Resources</button><br /><br /></Link>

    </div>
    </div>
  )
}
export default Aside;


