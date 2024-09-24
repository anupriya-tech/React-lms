import React from 'react'
import styles from './Project.module.css'; 


function Middel() {
  return (
    <div class="gap-4 grid-cols-4 mt-10 ms-60 mt-10 justify-top">
     <input class="bg-[#f7f6f4] box-content h-2 w-15 p-4  pt-4 border-2-rounded" type="text" value="Search here" /><br /><br />
      <div class=" flex gap-4 grid-cols-4">
      <button class="bg-transparent hover:bg-blue-950 text-black-100 font-semibold hover:text-white py-2 px-2 border border-black-100 hover:border-transparent rounded">Current</button>
    <button class="bg-transparent hover:bg-blue-950 text-black-100 font-semibold hover:text-white py-2 px-2 border border-black-100 hover:border-transparent rounded">Upcoming</button>
    <button class="bg-transparent hover:bg-blue-950 text-black-100 font-semibold hover:text-white py-2 px-2 border border-black-100 hover:border-transparent rounded">Completed</button>
    </div>
    
    </div>
    
  )
}
export default Middel;