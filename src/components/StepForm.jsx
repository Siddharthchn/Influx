import React, { useEffect, useState } from "react";
import stateCities from "../data/stateCities.json";
import billings from "../data/billingCycle.json";
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineReplay } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const StepForm = () => {
    
  const [currentStep, setCurrentStep] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedBillingCycle, setSelectedBillingCycle] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [storedEmail, setStoredEmail] = useState("");
  const [isTermsChecked, setIsTermsChecked] = useState(false); // Add this state
  const navigate = useNavigate(); // Initialize the navigate function
  

  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []);


  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() !== "") {
      const filtered = stateCities.filter(
        (item) =>
          item.city.toLowerCase().includes(value.toLowerCase()) ||
          item.state.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCities(filtered);
    } else {
      setFilteredCities([]);
    }
  };

  const handleSelectCity = (city, state) => {
    setSelectedCity({ city, state });
    setSearchTerm(`${city}, ${state}`);
    setFilteredCities([]);
  };

  const handleSelectBillingCycle = (cycle) => {
    setSelectedBillingCycle(cycle);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateForm(e.target.value, password);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validateForm(email, e.target.value);
  };

  const validateForm = (email, password) => {
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordIsValid = password.length >= 6;
    setIsValid(emailIsValid && passwordIsValid);
  };

  const handleLogin = () => {
    setStoredEmail(email);
    nextStep();
  };

  const handleTermsChange = (e) => {
    setIsTermsChecked(e.target.checked);
  };

  const handleCompletePayment = () => {

    if (isTermsChecked) {
      navigate("/confirmation");
    }
  };

  return (
    <div className={`bg-[#1D1C20] h-full w-full text-white flex items-center justify-center pt-[50px] ${currentStep === 4 ? "lg:pb-[250px] md:pb-[360px] pb-[530px]" : "pb-[150px]"}`}>
      <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-0">
        {/* Sidebar with steps */}
        <div className="xl:w-[500px] xl:h-[500px] lg:w-[400px] lg:h-[400px] md:w-[450px] md:h-[500px] w-[300px] h-[300px] flex flex-col lg:items-start items-center justify-center xl:pl-16 lg:pl-8 xl:pb-36 lg:pb-8 relative mx-[50px] md:px-0 mt-6 md:pt-0">
  <h2 className="text-xl font-bold mb-4">MVP Subscription</h2>
  <p className="text-gray-400 mb-8">
    Your go-to Movie Membership Program
  </p>
  <div className="relative flex flex-col space-y-8">
    <div className="absolute top-0 left-4 w-1 bg-gray-600 h-full z-0">
      <div
        className={`transition-all duration-300 ${
          currentStep >= 1 ? 'bg-white h-[33%]' : 'bg-gray-600 h-0'
        }`}
      ></div>
      <div
        className={`transition-all duration-300 ${
          currentStep >= 2 ? 'bg-white h-[33%]' : 'bg-gray-600 h-0'
        }`}
      ></div>
      <div
        className={`transition-all duration-300 ${
          currentStep >= 3 ? 'bg-white h-[33%]' : 'bg-gray-600 h-0'
        }`}
      ></div>
    </div>
    <div
      className={`flex items-center z-10 ${
        currentStep === 1 ? 'text-white' : 'text-gray-600'
      }`}
    >
      <div
        className={`w-8 h-8 rounded-full border-2 border-current flex items-center justify-center
          ${currentStep >= 1 ? 'bg-white text-black' : 'bg-gray-600'}`}
      >
        {currentStep > 1 ? (
          <svg className="w-4 h-4 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        ) : (
          '1'
        )}
      </div>
      <p className="ml-4">Pick your theatre</p>
    </div>
    <div
      className={`flex items-center z-10 ${
        currentStep === 2 ? 'text-white' : 'text-gray-600'
      }`}
    >
      <div
        className={`w-8 h-8 rounded-full border-2 border-current flex items-center justify-center
          ${currentStep >= 2 ? 'bg-white text-black' : 'bg-gray-600'}`}
      >
        {currentStep > 2 ? (
          <svg className="w-4 h-4 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        ) : (
          '2'
        )}
      </div>
      <p className="ml-4">Select billing cycle</p>
    </div>
    <div
      className={`flex items-center z-10 ${
        currentStep === 3 ? 'text-white' : 'text-gray-600'
      }`}
    >
      <div
        className={`w-8 h-8 rounded-full border-2 border-current flex items-center justify-center
          ${currentStep >= 3 ? 'bg-white text-black' : 'bg-gray-600'}`}
      >
        {currentStep > 3 ? (
          <svg className="w-4 h-4 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        ) : (
          '3'
        )}
      </div>
      <p className="ml-4">Login or Sign up</p>
    </div>
    <div
      className={`flex items-center z-10 ${
        currentStep === 4 ? 'text-white' : 'text-gray-600'
      }`}
    >
      <div
        className={`w-8 h-8 rounded-full border-2 border-current flex items-center justify-center
          ${currentStep >= 4 ? 'bg-white text-black' : 'bg-gray-600'}`}
      >
        {currentStep > 4 ? (
          <svg className="w-4 h-4 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        ) : (
          '4'
        )}
      </div>
      <p className="ml-4">Select payment method</p>
    </div>
  </div>

  {/* Display billing details for Step 4 */}
  {currentStep === 4 && (
    <div className="absolute xl:bottom-[-70px] lg:bottom-[-180px] md:bottom-[-150px] bottom-[-250px] text-gray-400 space-y-2 bg-[#1D1C20] p-4 rounded-md">
      <div className="flex flex-col space-y-1 w-[280px]">
        <div className="flex flex-col mb-2">
          <p className="text-[#FFFFFF]">Billing Cycle</p>
          <div className="flex justify-between">
            <p>Annual</p>
            <p>$109.89</p>
          </div>
        </div>
        <hr className="border-dotted border-gray-500" />
        <div className="flex flex-col mb-4 pt-2">
          <p className="text-[#ffffff]">Convenience Fee</p>
          <div className="flex justify-between">
            <p className="text-xs">Tax applied wherever applicable</p>
            <p>$6</p>
          </div>
        </div>

        <hr className="border-gray-500" />
        <div className="flex justify-between text-lg text-[#ffffff] pt-1">
          <p className="uppercase">Total</p>
          <p>$115.89</p>
        </div>
      </div>
    </div>
  )}
</div>



        {/* Form content */}
        <div
          className={`xl:w-[500px] xl:h-[520px] lg:w-[450px] lg:h-[500px] md:w-[450px] md:h-[540px] w-[350px] h-[500px] p-10 rounded-lg shadow-lg flex flex-col justify-between mx-[30px] mt-8 md:mt-0 ${
            currentStep === 4 ? "bg-[#1D1C20] p-0 shadow-none" : "bg-[#0D0D0D]"
          }`}
        >
          {currentStep === 1 && (
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-bold mb-6">STEP 1/4</h3>
                <p className="mb-4">Pick your favorite Marcus theatre</p>

                {/* Input for searching cities */}
                <input
                  type="text"
                  placeholder="Search by city, theatre or zipcode..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="w-full p-3 bg-[#2C2C2C] text-white rounded-md mb-6"
                />

                {/* Display filtered cities */}
                {filteredCities.length > 0 && (
                  <ul
                    className="bg-[#1D1C20] p-4 rounded-md mb-4 max-h-40 overflow-y-auto"
                    style={{ maxHeight: "200px", width: "100%" }}
                  >
                    {filteredCities.map((item, index) => (
                      <li
                        key={index}
                        className="p-2 cursor-pointer hover:bg-[#333] rounded-md"
                        onClick={() => handleSelectCity(item.city, item.state)}
                      >
                        {item.city}, {item.state}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Show selected city and state */}
                {selectedCity && (
                  <div className="mt-4 text-gray-400">
                    Selected: {selectedCity.city}, {selectedCity.state}
                  </div>
                )}
              </div>

              <div className="flex justify-between">
               <div></div>
                <button
                  className="md:px-16 md:py-3 px-8 py-2 text-sm bg-[#CF102D] text-white rounded-full"
                  onClick={nextStep}
                  disabled={!selectedCity}
                >
                  Save & Next
                </button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-bold mb-2">STEP 2/4</h3>
                <p className="mb-8">Select billing cycle</p>

                {/* Billing cycle options */}
                <div className="space-y-4">
                  {billings.map((cycle, index) => (
                    <label
                      key={index}
                      className={`relative p-4 border rounded-lg flex items-center cursor-pointer ${
                        selectedBillingCycle?.name === cycle.name
                          ? " bg-[#28241F]"
                          : "border-gray-600"
                      }`}
                    >
                      {/* Custom Radio Button */}
                      <input
                        type="radio"
                        name="billingCycle"
                        value={cycle.name}
                        checked={selectedBillingCycle?.name === cycle.name}
                        onChange={() => handleSelectBillingCycle(cycle)}
                        className="hidden" // Hide the default radio input
                      />

                      {/* Custom radio visual representation */}
                      <div
                        className={`w-5 h-5 mr-4 rounded-full border-2 flex items-center justify-center ${
                          selectedBillingCycle?.name === cycle.name
                            ? "bg-white border-white"
                            : "border-white"
                        }`}
                      >
                        {selectedBillingCycle?.name === cycle.name && (
                          <div className="text-black font-extrabold">
                            &#10003;
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col">
                        <div>
                          <h4 className="text-lg font-bold">{cycle.name}</h4>
                          <p className="text-base font-bold">
                            ${cycle.price_per_month}{" "}
                            <span className="text-gray-400">/mo</span>
                          </p>
                          <p className="text-gray-400 text-sm">
                            {cycle.description}
                          </p>
                        </div>
                        <div>
                          {cycle.label && (
                            <span className="absolute top-[-12px] left-6 text-xs bg-[#C3AC93] text-[#010101] px-2 py-1 rounded-full">
                              {cycle.label}
                            </span>
                          )}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  className="px-6 py-2 text-sm text-gray-300 underline"
                  onClick={prevStep}
                >
                  Back
                </button>
                <button
                  className="md:px-16 md:py-3 px-8 py-2 text-sm bg-[#CF102D] text-white rounded-full"
                  onClick={nextStep}
                  disabled={!selectedBillingCycle}
                >
                  Save & Next
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-bold mb-1">
                  Login to redeem awards
                </h3>
                <p className="mb-7 text-sm text-gray-400">
                  Don't have an account? You can enroll in the next step{" "}
                </p>

                {/* Email Input */}
                <label className="text-gray-400 text-xs mb-1">
                  Email Address or MMR number*
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full p-3 bg-[#2C2C2C] text-white rounded-md mb-4"
                />

                {/* Password Input */}
                <label className="text-gray-400 text-xs mb-1">Password*</label>
                <input
                  type="password"
                  placeholder="Password (6plus characters)"
                  value={password}
                  onChange={handlePasswordChange}
                  className="w-full p-3 bg-[#2C2C2C] text-white rounded-md mb-8"
                />

                {/* Email validation and storage */}
                <button
                  className="md:px-16 md:py-3 px-8 py-2 text-sm bg-[#CF102D] text-white rounded-full w-full"
                  onClick={handleLogin}
                  disabled={!isValid}
                >
                  Send Login Code
                </button>

                <p className="text-center mt-6 text-base text-gray-300">
                  Don't have an account?{" "}
                  <span className="text-[#BAA38D] underline ml-1">Sign up</span>{" "}
                </p>
              </div>

              <div className="flex justify-between">
                <button
                  className="px-6 py-2 text-sm text-gray-300 underline mt-[-44px]"
                  onClick={prevStep}
                >
                  Back
                </button>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="flex flex-col justify-between h-full md:pt-[160px] lg:pt-0 pt-[200px]">
              <div className="flex flex-col justify-between gap-6">
                {/* Block 1: Payment Method */}
                <div className="flex-1 bg-[#0C0C0C] p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-6 text-gray-200">
                    Terms & Conditions *
                  </h3>
                  <div className="flex gap-[10px] items-center">
                  <input
              type="checkbox"
              id="terms"
              checked={isTermsChecked}
              onChange={handleTermsChange}
              className="mr-2 mt-[-25px]"
            />
                    <label htmlFor="terms" className="text-sm">
              I agree to the <span className="underline text-[#907F6E]">Terms and Conditions, Public policy & Refund policy</span>
            </label>
                  </div>
                </div>

                {/* Block 2: Billing Details */}
                <div className="flex-1 bg-[#0C0C0C] p-6 rounded-t-xl">
                  <div className="flex items-center gap-[15px] text-gray-200">
                    <div className="mt-[-15px]">
                      <CiCreditCard1 size={30} />
                    </div>
                    <h4 className="text-lg font-bold mb-4">
                      Credit / Debit Card
                    </h4>
                  </div>

                  <div className="text-gray-400 px-[15px]">
                    <div className="mt-2">
                      {/* inputs */}
                      <label className="text-gray-400 text-xs mb-1">
                        Cardholder Name*
                      </label>
                      <input
                        type="name"
                        className="w-full p-2 bg-[#2C2C2C] text-white rounded-md mb-4"
                      />

                      {/* input */}
                      <label className="text-gray-400 text-xs mb-1">
                        Card Number*
                      </label>
                      <input
                        type="number"
                        className="w-full p-2 bg-[#2C2C2C] text-white rounded-md mb-6"
                      />
                    </div>
                    <div className="flex md:gap-[50px] gap-[10px]">
                      <div className="flex flex-col">
                        <label className="text-gray-400 text-xs mb-1">
                          Expiration Date*
                        </label>
                        <input
                          type="date"
                          className="w-full p-2 bg-[#2C2C2C] text-white rounded-md mb-4"
                        />
                      </div>

                      {/* Password Input */}
                      <div className="flex flex-col">
                        <label className="text-gray-400 text-xs mb-1">
                          CVV*
                        </label>
                        <input
                          type="number"
                          className="w-full p-2 bg-[#2C2C2C] text-white rounded-md mb-8"
                        />
                      </div>
                    </div>
                    <div className="flex gap-[10px] items-center px-[15px]">
                      <input className="mt-[-20px]" type="radio" />
                      <p className="text-sm text-gray-200">
                        I agree to consent to use the same card for <br />
                        renewals.
                        <span className="underline text-[#948271]">
                          {" "}
                          Learn more
                        </span>
                      </p>
                    </div>
                    <button  onClick={handleCompletePayment}
            disabled={!isTermsChecked}
                  className="md:px-16 md:py-3 px-8 py-2 text-sm bg-[#CF102D] text-white rounded-full w-full mt-4"
                >
                  Complete payment
                </button>
                  </div>
                </div>
              </div>

              <div className="bg-[#202020] flex gap-[10px] items-center rounded-b-xl md:px-12 md:py-2 px-4 py-2 shadow-2xl">
                <div>
                  <MdOutlineReplay size={20} />
                </div>
                <div className="text-xs hidden md:block">
                  Subscription payment will auto-billed on 25 Oct 2025 for{" "}
                  <br />
                  $115.89 from your credit card, unless cancelled otherwise{" "}
                </div>
                <div className="text-xs block md:hidden">
                  Subscription payment will auto-billed on 25 Oct 2025 for 
                  $115.89 from your credit card, unless cancelled otherwise{" "}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepForm;
