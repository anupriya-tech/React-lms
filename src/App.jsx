import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Aside from './Aside';
import Middelcard from './Middelcard';
import Module from './Module';
import Testmodule from './Testmodule';
import Resources from './Resources';
import Creattest from './Creattest';
import Creattestmodule from './Creattestmodule';
import { Popup } from './Popup';
// import './App.css'; // Uncomment if you have global styles here

function App() {
  return (
    <BrowserRouter>
    
        <Header />
        {/* <Popup /> */}
       <Aside />
       <div className="shadow-[inset_-12px_-8px_40px_#46464620]">
        <Routes>
          <Route path="/" element={<Middelcard />} /> 
          <Route path="/module" element={<Module />} />
          <Route path="/middelcard" element={<Middelcard />} />
          <Route path="/testmodule" element={<Testmodule />} />
          <Route path="/creattest" element={<Creattest />} /> 
          <Route path="/creattestmodule" element={<Creattestmodule />} /> 
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<div>404 Not Found</div>} /> {/* Handle unknown routes */}
        </Routes>
        </div>
      <div className="flex justify-start gap-4 grid-cols-4 mt-10 ms-60">
        {/* Additional content here */}
      </div>
     
    </BrowserRouter>
  );
}

export default App;
