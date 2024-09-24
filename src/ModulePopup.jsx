import React, { useState } from 'react';

function ModulePopup({ toggleModal1, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (toggleModal1) toggleModal1();
  };

  return (
    <>
      {isOpen && (
        <div className="popup-overlay" onClick={handleToggle}>
          <div className="popupcontainer1" onClick={(e) => e.stopPropagation()}>
           
            <div>{children}</div>
           <div className='min-w-80 justify-start'>
            <div className='border-b-2 border-indigo-500 min-w-full justify-center'>BSPLModule-2</div>
            <div className=''>Module Nmae</div>
            <div className='shadow-purple-100 shadow-lg shadow-cyan-500/30 h-5 w-full'>Core Pythen</div><br />
            <div className=''>Days</div>
            <div className='shadow-purple-100 shadow-lg shadow-cyan-500/50 h-5 w-full'>45</div><br />
            <div className=''>Fee</div>
            <div className='shadow-purple-100 shadow-lg shadow-cyan-500/50 h-5 w-full'>11800</div><br />
            <div className=''>Topic</div>
            <div className='shadow-purple-100 shadow-lg shadow-cyan-500/50 h-5 w-full'>Introduction to pythen</div><br />
            <div className='shadow-purple-100 shadow-lg shadow-cyan-500/50 h-5 w-full'>Syntex</div><br />
            <div className='shadow-purple-100 shadow-lg shadow-cyan-500/50 h-5 w-full'>control follow stetement</div><br /><br />
            <div className='flex gap-8'>
            <button className='bg-white-500 shadow-lg shadow-indigo-500/50 w-40 h-8' onClick={handleToggle}>Cancel</button>
              <button className='bg-white-500 shadow-lg shadow-indigo-500/50 w-40 h-8'>Submit</button>
            </div>
           </div>
          </div>
        </div>
      )}
      <button onClick={handleToggle}><i className="fa-solid fa-pen"></i></button>
    </>
  );
}

export default ModulePopup;
