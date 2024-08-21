import { useEffect, useState } from "react";
import React from "react";
import bg from "../assets/Background.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";

const NavHero = () => {

  const [navBackground, setNavBackground] = useState('bg-transparent');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBackground('bg-[rgba(0,0,0,0.9)]'); 
      } else {
        setNavBackground('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="relative h-screen font-altivo md:block hidden">
      <img
        src={bg}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Navbar */}
      <nav className={`text-[#D8D8D8] lg:py-8 lg:px-36 md:py-6 md:px-16 fixed w-full transition-colors duration-300 ${navBackground} z-10`}>
        <div className="flex justify-between border-b-[1px] border-b-[#D8D8D8] pb-5">
          <div></div>
          <div className="flex gap-[25px]">
            <div className="flex items-center gap-[5px]">
              <p className="font-medium md:text-[13px] lg:text-[14px] xl:text-[16px] uppercase">
                Placeholder Title
              </p>
              <span className="md:text-[13px] lg:text-[14px] xl:text-[16px]">
                <IoIosArrowDown />
              </span>
            </div>
            <div className="flex items-center gap-[5px]">
              <p className="font-medium md:text-[13px] lg:text-[14px] xl:text-[16px] uppercase">
                Placeholder Title
              </p>
              <span className="md:text-[13px] lg:text-[14px] xl:text-[16px]">
                <IoIosArrowDown />
              </span>
            </div>
            <div className="flex items-center gap-[5px]">
              <p className="font-medium md:text-[12px] lg:text-[14px] xl:text-[16px] uppercase">
                Placeholder Title
              </p>
              <span className="md:text-[13px] lg:text-[14px] xl:text-[16px]">
                <IoIosArrowDown />
              </span>
            </div>
            <button className="flex items-center gap-[10px] border py-1 px-4 rounded-full mr-1">
              <span className="md:text-[13px] lg:text-[14px] xl:text-[16px]">
                <IoPersonOutline />
              </span>
              <p className="font-medium md:text-[13px] lg:text-[14px] xl:text-[16px] uppercase">Sign in</p>
            </button>
          </div>
        </div>
        {/* titles */}
        <div className="flex gap-[15px] justify-end pt-4">
            <p>Placeholder title</p>
            <p>Placeholder title</p>
            <p>Placeholder title</p>
            <p>Placeholder title</p>
        </div>
      </nav>

      {/* Navbar ends */}

      {/* Hero section */}
      <div className="absolute inset-0 flex items-center justify-center text-[#D8D8D8] flex-col gap-[20px] ">
        <h1 className="uppercase lg:text-[40px] md:text-[38px] tracking-[15px] font-medium">
          MVP Subscription
        </h1>
        <p className="lg:text-[18px] md:text-[22px]  xl:text-[16px] font-thin">
          Your go to Movie Membership Program
        </p>
      </div>

      {/* Hero section ends */}
    </div>
  );
};

export default NavHero;
