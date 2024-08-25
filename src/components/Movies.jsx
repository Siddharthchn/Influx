import React from "react";
import smallstar1 from "../assets/s1.svg";
import bigstar1 from "../assets/s2.svg";
import smallstar2 from "../assets/s3.svg";
import s1 from "../assets/l1.svg";
import s2 from "../assets/l2.svg";
import s3 from "../assets/l3.svg";
import s4 from "../assets/l4.svg";
import s5 from "../assets/l5.svg";
import s6 from "../assets/l6.svg";
import home from '../assets/Home.svg';
import { TbMessage } from "react-icons/tb";

import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Movies = () => {

  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/details');
  };

  return (
    <div className="bg-[#141414] h-full  md:h-screen flex flex-col-reverse md:flex-row items-center justify-center xl:gap-[60px] lg:gap-[30px] md:gap-[30px] gap-[40px] px-[20px] md:px-0 pb-10 md:pb-0">
        {/* left side */}
      <div className="flex flex-col md:ml-10 lg:ml-10 xl:ml-0">
        {/* stars */}
        <div className="hidden md:flex items-center gap-[2px]">
          <div className="pt-10">
            <img src={smallstar1} alt="" />
          </div>
          <div>
            <img src={bigstar1} alt="" />
          </div>
          <div className="pt-10">
            <img src={smallstar2} alt="" />
          </div>
        </div>
        {/* stars end */}
        {/* text */}
        <div className="hidden md:flex flex-col lg:mt-4 md:mt-6 border-b-[1px] border-b-[#797979] pb-8 pr-[20px]">
          <h1 className="text-[#D8D8D8] text-[26px] font-medium">
            Reel Deal Monthly Movies
          </h1>
          <p className="text-[#797979] text-[16px] leading-[20px] lg:mt-1 md:mt-3">
            Your flexible montly membership to the latest <br /> movies
          </p>
        </div>
        {/* text end */}
        {/* What is text */}
        <div className="lg:mt-10 md:mt-12">
          <h1 className="text-[#D8D8D8] text-[18px]">
            What is MVP Subscription?
          </h1>
          <div className="lg:mt-4 md:mt-8 flex flex-col gap-[20px] relative">
            {/* <!-- Line between first and second circles --> */}
            <div className="absolute h-[25px] left-[14px] top-[65px] md:left-[12px] md:top-[44px] md:h-[40px] lg:left-[15px] lg:top-[32px] lg:h-[26px] border-l-2 border-[#AA9681]"></div>

            {/* <!-- Line between second and third circles --> */}
            <div className="absolute h-[35px] left-[14px] top-[120px] md:left-[12px] md:top-[116px] md:h-[60px] lg:left-[15px] lg:top-[90px] lg:h-[33px] border-l-2 border-[#AA9681]"></div>

            <div className="flex items-center gap-[12px] mt-8 md:mt-0">
              <div className="w-8 h-8 rounded-full border-2 border-[#AA9681] flex items-center justify-center relative z-1">
                <span className="text-[#AA9681] text-base font-medium">1</span>
              </div>
              <div className="leading-[18px] text-[#797979]">
                MVP Subscription provides the member <br />1 movie credit per
                month
              </div>
            </div>

            <div className="flex items-center gap-[12px]">
              <div className="w-8 h-8 rounded-full border-2 border-[#AA9681] flex items-center justify-center">
                <span className="text-[#AA9681] text-base font-medium">2</span>
              </div>
              <div className="leading-[18px] text-[#797979]">
                They can avail it at any Marcus theatre <br />
                or Movie Tavern
              </div>
            </div>

            <div className="flex items-center gap-[12px]">
              <div className="w-8 h-8 rounded-full border-2 border-[#AA9681] flex items-center justify-center">
                <span className="text-[#AA9681] text-base font-medium">3</span>
              </div>
              <div className="leading-[18px] text-[#797979]">
                Members earn 100 points and get a Rs.5 <br />
                reward redeemable on food and beverages <br /> plus many more
                benefits
              </div>
            </div>
          </div>
        </div>

        {/* What is text end*/}
        {/* buttons */}
        <div className="hidden md:flex mt-10 md:gap-[20px] lg:gap-[50px] items-center">
            <button className="bg-[#CF112D] text-[#D8D8D8] flex items-center px-10 py-3 rounded-md lg:gap-[10px] md:gap-[5px] lg:text-[15px] md:text-[12px]"  onClick={handleGetStartedClick}> 
                <span>Get Started</span>
                <span><FaArrowRight /></span>
            </button>
            <button className="text-[#D8D8D8] text-[16px] font-medium underline">
                Learn more
            </button>
        </div>
      </div>
      {/* right side */}
      <div>
        <div className="md:hidden block mx-[20px] mt-10">
            <div className="flex justify-between">
                <div></div>
                <div>
                    <img src={home} alt="" />
                </div>
            </div>
            <div className="text-[#5D5D5D] flex items-center justify-center mt-6">
                <TbMessage size={140}/>
            </div>
        </div>
        <div className="md:hidden flex flex-col mt-10">
            <div className="flex gap-[30px] items-center mx-5">
                <img src={smallstar1} alt="" />
                <span className="text-[#D8D8D8] text-[18px]">Reel Deal Monthly Movies</span>
                <img src={smallstar2} alt="" />
            </div>
            <div className="mx-[20px] mt-1 text-[13px] text-[#5D5D5D]">
            Your flexible montly membership to the latest movies
            </div>
        </div>
        {/* cards */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 md:gap-y-5 gap-4 mt-6">
  {/* <!-- Card 1 --> */}
  <div className="flex flex-col gap-[10px] h-[210px] bg-[#0C0C0C] p-4 w-full md:w-[180px] rounded-3xl md:ml-5 lg:ml-0">
    {/* <!--  Icon --> */}
   <img src={s1} alt="" className="w-12 h-12" />
    {/* <!-- Title --> */}
    <h2 className="text-[16px] font-medium leading-[15px] text-[#C7AF96] mt-8">1 Credit per <br />month</h2>
    {/* <!-- Subtitle --> */}
    <p className="text-[13px] leading-[16px] text-[#5D5D5D] ">
      One 2D movie standard <br /> per month
    </p>
  </div>

  {/* <!-- Card 2 --> */}
  <div className="flex flex-col gap-[10px] h-[210px] bg-[#0C0C0C] p-4 w-full md:w-[180px] rounded-3xl">
    {/* <!--  Icon --> */}
   <img src={s2} alt="" className="w-12 h-12" />
    {/* <!-- Title --> */}
    <h2 className="text-[16px] font-medium leading-[15px] text-[#C7AF96] mt-8">Free rollover of <br />unused credits</h2>
    {/* <!-- Subtitle --> */}
    <p className="text-[13px] leading-[16px] text-[#5D5D5D] ">
      Unused credits will <br />be combined the <br />following month 
    </p>
  </div>

  {/* <!-- Card 3 --> */}
  <div className="flex flex-col gap-[10px] h-[210px] bg-[#0C0C0C] p-4 w-full md:w-[180px] lg:w-[150px] rounded-3xl md:ml-5 lg:ml-0 mt-2 md:mt-0">
    {/* <!--  Icon --> */}
   <img src={s3} alt="" className="w-12 h-12" />
    {/* <!-- Title --> */}
    <h2 className="text-[16px] font-medium leading-[15px] text-[#C7AF96] mt-8">All MMR <br />perks <br />included</h2>
    {/* <!-- Subtitle --> */}
    <p className="text-[13px] leading-[16px] text-[#5D5D5D] ">
      benefits 
    </p>
  </div>

  {/* <!-- Card 4 --> */}
  <div className="flex flex-col gap-[10px] h-[210px] bg-[#0C0C0C] p-4 w-full md:w-[180px] lg:w-[150px] rounded-3xl mt-2 md:mt-0 lg:mt-0">
    {/* <!--  Icon --> */}
   <img src={s4} alt="" className="w-12 h-12" />
    {/* <!-- Title --> */}
    <h2 className="text-[16px] font-medium leading-[18px] text-[#C7AF96] mt-8">100% <br />Flexible</h2>
    {/* <!-- Subtitle --> */}
    <p className="text-[13px] leading-[16px] text-[#5D5D5D] ">
      Cancel <br />Anytime
    </p>
  </div>

  {/* <!-- Card 5 --> */}
  <div className="flex flex-col gap-[10px] h-[210px] bg-[#0C0C0C] p-4 w-full md:w-[180px] rounded-3xl mt-2  md:ml-5 lg:ml-[-30px] md:mt-0 lg:mt-0">
    {/* <!--  Icon --> */}
   <img src={s5} alt="" className="w-12 h-12" />
    {/* <!-- Title --> */}
    <h2 className="text-[16px] font-medium leading-[15px] text-[#C7AF96] mt-8">20% Discount on <br />all food <br />beverages </h2>
    {/* <!-- Subtitle --> */}
    <p className="text-[13px] leading-[16px] text-[#5D5D5D] ">
      Excluding alcohol
    </p>
  </div>

  {/* <!-- Card 6 --> */}
  <div className="flex flex-col gap-[10px] h-[210px] bg-[#0C0C0C] p-4 w-full md:w-[180px] rounded-3xl mt-2 md:ml-0 lg:ml-[-30px] md:mt-0 lg:mt-0">
    {/* <!--  Icon --> */}
   <img src={s6} alt="" className="w-12 h-12" />
    {/* <!-- Title --> */}
    <h2 className="text-[16px] font-medium leading-[15px] text-[#C7AF96] mt-8">0 Convenience <br />fees</h2>
    {/* <!-- Subtitle --> */}
    <p className="text-[13px] leading-[16px] text-[#5D5D5D] ">
      Waived on all days <br />or any tickets <br />purchases 
    </p>
  </div>
</div>
<div className="flex flex-col pl-2 mt-6 md:mt-4 text-[10px] text-[#797979] font-medium">
   <p className="md:w-[420px] lg:w-full md:text-[12px] lg:text-[10px] text-[12px]">Excludes IMAX and DBOX formats.No fees apply to Passport Credits only.Other fees apply to full-priced tickets.</p>
   <p className="mt-2 md:mt-1 md:text-[12px] lg:text-[10px] text-[12px]">Excludes alcohic beverages</p>
</div>

      </div>
    </div>
  );
};

export default Movies;
