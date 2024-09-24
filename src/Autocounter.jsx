import React from 'react'
import { useEffect, useState, useRef } from "react";
export default function Autocounter() {


const count = useRef(0);
const text = useRef("");
const [inputValue, setInputValue] = useState("");

useEffect(() => {
    text.current = inputValue;
    count.current = count.current + 1;
});

return (
    <>
      <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
      <h1>Render Count: {count.current}</h1> //displays 1 after re-rende
      <h1>{text.current}</h1> //displays "" after re-render
    </>
  );
}
export default Autocounter;

   
 

