import React, { useEffect } from 'react';
import img from '../assets/Images/Asset-1.png' 
import img2 from '../assets/Images/Icon-5.svg' 
import { MdOutlineReplay } from 'react-icons/md';

const ConfirmationPage = () => {


    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);

  return (
    
    <div className="flex items-center justify-center h-full md:min-h-screen bg-[#131313] text-white px-[60px] md:px-0 py-[20px] md:py-0">
      <div className="max-w-4xl mx-auto p-8 flex flex-col md:flex-row space-y-14 md:space-y-0 md:space-x-12 lg:space-x-24">
        {/* Left Side */}
        <div className="relative w-full md:w-1/2">
          <div className="relative h-64 overflow-hidden rounded-t-lg">
            <img
              src={img}
              alt="Cinema Seats"
              className="object-cover w-full h-full"
            />
          </div>
          <div className='absolute top-[44%]'>
            {/* left circle */}
            <div className='w-6 h-8 rounded-r-full bg-[#131313]'></div>
          </div>
          <div className='absolute top-[44%] right-0'>
            {/* right circle */}
            <div className='w-6 h-8 rounded-l-full bg-[#131313]'></div>
          </div>
          <div className="bg-[#000000] p-4">
            <h2 className="text-xl font-bold mb-2">MVP Subscription</h2>
            <hr className='text-gray-800 border-dotted' />
            <ul className="mt-4 space-y-2">
              <li className="flex items-center space-x-2">
                <span>🏆</span>
                <span>Annual</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>🎥</span>
                <span>Horizon Village Cinema</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📅</span>
                <span>Sunday 25 Feb</span>
              </li>
            </ul>
            <hr className='text-gray-800 border-dotted mt-2' />
            <div className="mt-4 flex justify-between">
              <div className='flex flex-col '>
                <p className='text-gray-500 text-sm'>Email</p>
                <p>julie.janette@gmail.com</p>
              </div>
              <div className='flex flex-col '>
                <p className='text-gray-500 text-sm'>MMR Number</p>
                <p>28002001339169</p>
              </div>
            </div>
          </div>
          <div className="bg-[#202020] p-2 rounded-b-lg text-xs flex items-center gap-[10px]">
            <div className='mt-[-2px]'> <MdOutlineReplay /> </div>
            <p> Subscription payment will auto-bill on 25 Aug 2025 for $115.89 from your credit card, unless cancelled.</p> 
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col space-y-4">
            <div className="text-lg font-bold flex gap-[10px]">
                <span className=''><img src={img2} alt="" /></span>
               <span>MVP SUBSCRIPTION ACTIVE</span> </div>
            <div className="text-sm text-gray-400 pl-10">ORDER #WK3JH8K</div>
            <div className="border-b border-gray-700"></div>
            <div className="flex flex-col space-y-1 w-full">
                  <div className="flex flex-col mb-2">
                    <p className="text-[#FFFFFF]">Billing Cycle</p>
                    <div className="flex justify-between text-gray-500">
                      <p>Annual</p>
                      <p>$109.89</p>
                    </div>
                  </div>
                  <hr className="border-dotted border-gray-500" />
                  <div className="flex flex-col mb-4 pt-2">
                    <p className="text-[#ffffff]">Convenience Fee</p>
                    <div className="flex justify-between text-gray-500">
                      <p className="text-xs ">Tax applied wherever applicable</p>
                      <p>$6</p>
                    </div>
                  </div>

                  <hr className="border-gray-500" />
                  <div className="flex justify-between text-lg text-[#ffffff] pt-2">
                    <p className="uppercase">Total</p>
                    <p>$115.89</p>
                  </div>
                </div>
            <div className="pt-1">
             
              <div className="flex justify-between items-center bg-[#000000] p-4 rounded-lg mt-2 mb-4">
                <div>
                <div className="font-medium pb-2">PAYMENT SUMMARY</div>
                  <div>Credit card</div>
                  <div>XXXXXXXXXXXX9871</div>
                </div>
                <div className='pt-14'>$115.89</div>
              </div>
            </div>
            <button
              className="mt-10 bg-[#CF102D] text-white font-bold py-2 px-4 rounded-full hover:bg-red-700 transition duration-300"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Back to homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
