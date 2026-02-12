import React from 'react'
import BGimage from "../../assets/images/BG.png";
import { useRef, useEffect } from 'react';

const SubscriberModal = () => {

  const refObj = useRef(null);

  useEffect(() => {
    refObj.current.showModal();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    alert("Subscribed Successfully");
  }

  function handleClose() {
    refObj.current.close();
  }

  return (
    <div>
      <dialog
        ref={refObj}
        className="
          fixed top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2
          rounded-xl p-0 backdrop:bg-black/50
          w-[95%] max-w-4xl
        "
      >
        {/* Main Container */}
        <div className="
          flex flex-col md:flex-row
          bg-white rounded-xl overflow-hidden
        ">

          {/* 40% Image Section */}
          <div className="w-full md:w-2/5 flex items-center justify-center bg-gray-50 p-6">
            <img
              src={BGimage}
              alt="Background image"
              className="max-h-[350px] w-full object-contain"
            />
          </div>

          {/* 60% Form Section */}
          <div className="w-full md:w-3/5 px-8 py-8 flex flex-col justify-center">

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

              <div className="flex justify-end">
                <button
                  onClick={handleClose}
                  type="button"
                  className="text-lg bg-transparent border-0 focus:outline-none hover:opacity-70"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col gap-4 text-center md:text-left">

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
                    className="absolute right-1 top-1 bottom-1 px-5 bg-primary text-white rounded-full"
                  >
                    Subscribe
                  </button>
                </div>

                <div className="flex gap-2 items-center text-sm">
                  <input id="checkbox" type="checkbox" />
                  <label htmlFor="checkbox">
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

export default SubscriberModal;
