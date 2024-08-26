import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { useNavigate } from "react-router-dom";

const Questions = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/details');
  };


  return (
    <div className='bg-[#000000] h-full pb-[50px] text-[#D8D8D8]'>
      <div className='border-b-[1px] border-b-[#121212] pb-3 md:mx-[100px] lg:mx-[200px] mx-[30px] pt-[50px]'>
        <span className='text-[20px]'>Frequently asked questions</span>
      </div>
      <div className='mt-5 md:mx-[100px] lg:mx-[200px] mx-[30px]'>
        {/* Accordion 1 */}
        <div className='border-b-[1px] border-b-[#121212] pb-4'>
          <div
            className='flex items-center gap-[10px] cursor-pointer'
            onClick={() => toggleAccordion(1)}
          >
            <span
              className={`transform transition-transform duration-300 mt-[-90px] md:mt-[-25px] ${
                openAccordion === 1 ? 'rotate-180' : ''
              }`}
            >
              <IoIosArrowDown />
            </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam id consectetur ab repudiandae, minus magnam perferendis quia doloremque blanditiis, nisi dignissimos?</span>
          </div>

          {openAccordion === 1 && (
            <div className='mt-3 text-[#797979] flex flex-col gap-[10px] pl-[25px]'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, id obcaecati nulla sint corporis accusamus, ex laborum omnis vitae, repudiandae inventore facilis! Possimus repellat at ducimus ipsa quod reiciendis error. Ad cum optio, </p>
              <p>quibusdam recusandae at, animi nesciunt laborum voluptas eius impedit ab! Sunt soluta molestiae cumque, corrupti inventore accusantium corporis nulla vel architecto doloribus reprehenderit. Consequatur, iure! Praesentium, adipisci.</p>
            </div>
          )}
        </div>
        {/* Accordion 2 */}
        <div className='border-b-[1px] border-b-[#121212] pb-4 pt-4'>
          <div
            className='flex items-center gap-[10px] cursor-pointer'
            onClick={() => toggleAccordion(2)}
          >
            <span
              className={`transform transition-transform duration-300 mt-[-90px] md:mt-[-25px] ${
                openAccordion === 2 ? 'rotate-180' : ''
              }`}
            >
              <IoIosArrowDown />
            </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam id consectetur ab repudiandae, minus magnam perferendis quia doloremque blanditiis, nisi dignissimos?</span>
          </div>

          {openAccordion === 2 && (
            <div className='mt-3 text-[#797979] flex flex-col gap-[10px] pl-[25px]'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, id obcaecati nulla sint corporis accusamus, ex laborum omnis vitae, repudiandae inventore facilis! Possimus repellat at ducimus ipsa quod reiciendis error. Ad cum optio, </p>
              <p>quibusdam recusandae at, animi nesciunt laborum voluptas eius impedit ab! Sunt soluta molestiae cumque, corrupti inventore accusantium corporis nulla vel architecto doloribus reprehenderit. Consequatur, iure! Praesentium, adipisci.</p>
            </div>
          )}
        </div>
        {/* Accordian 3 */}
        <div className='border-b-[1px] border-b-[#121212] pb-4 pt-4'>
          <div
            className='flex items-center gap-[10px] cursor-pointer'
            onClick={() => toggleAccordion(3)}
          >
            <span
              className={`transform transition-transform duration-300 mt-[-90px] md:mt-[-25px] ${
                openAccordion === 3 ? 'rotate-180' : ''
              }`}
            >
              <IoIosArrowDown />
            </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam id consectetur ab repudiandae, minus magnam perferendis quia doloremque blanditiis, nisi dignissimos?</span>
          </div>

          {openAccordion === 3 && (
            <div className='mt-3 text-[#797979] flex flex-col gap-[10px] pl-[25px]'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, id obcaecati nulla sint corporis accusamus, ex laborum omnis vitae, repudiandae inventore facilis! Possimus repellat at ducimus ipsa quod reiciendis error. Ad cum optio, </p>
              <p>quibusdam recusandae at, animi nesciunt laborum voluptas eius impedit ab! Sunt soluta molestiae cumque, corrupti inventore accusantium corporis nulla vel architecto doloribus reprehenderit. Consequatur, iure! Praesentium, adipisci.</p>
            </div>
          )}
        </div>
        {/* Accordian 4 */}
        <div className='border-b-[1px] border-b-[#121212] pb-4 pt-4'>
          <div
            className='flex items-center gap-[10px] cursor-pointer'
            onClick={() => toggleAccordion(4)}
          >
            <span
              className={`transform transition-transform duration-300 mt-[-90px] md:mt-[-25px] ${
                openAccordion === 4 ? 'rotate-180' : ''
              }`}
            >
              <IoIosArrowDown />
            </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam id consectetur ab repudiandae, minus magnam perferendis quia doloremque blanditiis, nisi dignissimos?</span>
          </div>

          {openAccordion === 4 && (
            <div className='mt-3 text-[#797979] flex flex-col gap-[10px] pl-[25px]'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, id obcaecati nulla sint corporis accusamus, ex laborum omnis vitae, repudiandae inventore facilis! Possimus repellat at ducimus ipsa quod reiciendis error. Ad cum optio, </p>
              <p>quibusdam recusandae at, animi nesciunt laborum voluptas eius impedit ab! Sunt soluta molestiae cumque, corrupti inventore accusantium corporis nulla vel architecto doloribus reprehenderit. Consequatur, iure! Praesentium, adipisci.</p>
            </div>
          )}
        </div>
         {/* Accordian 5 */}
         <div className='border-b-[1px] border-b-[#121212] pb-4 pt-4'>
          <div
            className='flex items-center gap-[10px] cursor-pointer'
            onClick={() => toggleAccordion(5)}
          >
            <span
              className={`transform transition-transform duration-300 mt-[-90px] md:mt-[-25px] ${
                openAccordion === 5 ? 'rotate-180' : ''
              }`}
            >
              <IoIosArrowDown />
            </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam id consectetur ab repudiandae, minus magnam perferendis quia doloremque blanditiis, nisi dignissimos?</span>
          </div>

          {openAccordion === 5 && (
            <div className='mt-3 text-[#797979] flex flex-col gap-[10px] pl-[25px]'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, id obcaecati nulla sint corporis accusamus, ex laborum omnis vitae, repudiandae inventore facilis! Possimus repellat at ducimus ipsa quod reiciendis error. Ad cum optio, </p>
              <p>quibusdam recusandae at, animi nesciunt laborum voluptas eius impedit ab! Sunt soluta molestiae cumque, corrupti inventore accusantium corporis nulla vel architecto doloribus reprehenderit. Consequatur, iure! Praesentium, adipisci.</p>
            </div>
          )}
        </div>
         {/* Accordian 6 */}
         <div className='border-b-[1px] border-b-[#121212] pb-4 pt-4'>
          <div
            className='flex items-center gap-[10px] cursor-pointer'
            onClick={() => toggleAccordion(6)}
          >
            <span
              className={`transform transition-transform duration-300 mt-[-90px] md:mt-[-25px] ${
                openAccordion === 6 ? 'rotate-180' : ''
              }`}
            >
              <IoIosArrowDown />
            </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam id consectetur ab repudiandae, minus magnam perferendis quia doloremque blanditiis, nisi dignissimos?</span>
          </div>

          {openAccordion === 6 && (
            <div className='mt-3 text-[#797979] flex flex-col gap-[10px] pl-[25px]'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, id obcaecati nulla sint corporis accusamus, ex laborum omnis vitae, repudiandae inventore facilis! Possimus repellat at ducimus ipsa quod reiciendis error. Ad cum optio, </p>
              <p>quibusdam recusandae at, animi nesciunt laborum voluptas eius impedit ab! Sunt soluta molestiae cumque, corrupti inventore accusantium corporis nulla vel architecto doloribus reprehenderit. Consequatur, iure! Praesentium, adipisci.</p>
            </div>
          )}
        </div>
      </div>
      <div className='flex md:hidden items-center justify-center pt-2'>
      <button className="bg-[#CF112D] text-[#D8D8D8] flex items-center px-24 py-3 rounded-md lg:gap-[10px] gap-[10px] lg:text-[15px] md:text-[12px]"  onClick={handleGetStartedClick}> 
                <span>Get Started</span>
                <span><FaArrowRight /></span>
            </button>
      </div>
    </div>
  );
};

export default Questions;
