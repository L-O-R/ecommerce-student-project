import React from 'react'
import BGimage from "../../assets/images/BG.png";
import { useRef,useEffect } from 'react';




const SubscriberModal = () => {

  const refObj = useRef(null);
  //creating reference object with useRef() hook

  //using useEffect hook to make modal display after the render
  useEffect( ()=>{
    refObj.current.showModal(), []
    
  }

  )
  //this useEffect runs only after render and empty dependecy array makes it run only once
  //after the component is rendered. 

  function handleSubmit(e) {
  e.preventDefault();
  alert("subscribed Successfully")
}

function handleClose(){
  refObj.current.close();

}

  return (
   


  
    <div>
      <dialog
        ref={refObj}
        className="rounded-xl p-0  my-0 mx-auto backdrop:bg-black/50"
      >
        
        <div className="flex w-[750px] max-w-full bg-white rounded-xl overflow-hidden">

          {/* Image Section - 40% */}
          <div className="w-2/5">
            <img
              src={BGimage}
              alt="Background image"
              className="w-full h-full object-cover px-2 py-2"
            />
          </div>

          {/* Form Section - 60% */}
          <div className="w-3/5 px-10 py-4 flex flex-col justify-center">

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

              <div className="flex justify-end">
                <button
                  onClick={handleClose}
                  type="button"
                  className="text-lg"
                >
                  X
                </button>
              </div>
<div className='flex flex-col justify-center items-center gap-5'>
              <h1 className="text-2xl font-medium">
                Subscribe to Our Newsletter
              </h1>

              <p className="text-gray-600">
                Subscribe to our newsletter and save your{" "}
                <span className="text-orange-500 font-semibold">
                  20% money
                </span>{" "}
                with discount today.
              </p>

         
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  required
                  className="w-full border border-gray-300 rounded-full py-3 px-4 pr-28 focus:outline-none focus:border-primary"
                />

                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1  px-5 bg-primary text-white rounded-full"
                >
                  Subscribe
                </button>
              </div>

             
              <div className="flex gap-2 items-center my-4">
                <input id="checkbox" type="checkbox" />
                <label htmlFor="checkbox" className="text-sm">
                  Do not show this window
                </label>
              </div>
              </div>

            </form>
          </div>

        </div>
      </dialog>
    </div>
  )
}

export default SubscriberModal

