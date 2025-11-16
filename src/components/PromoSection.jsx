import React from "react";
import bgLight from "../assets/be-a-merchant-bg.png";
import location from "../assets/location-merchant.png";

const PromoSection = () => {
  return (
    <div
      className="relative w-full rounded-3xl p-10 md:p-18 flex flex-col md:flex-row justify-between items-center text-white mt-10 md:mt-30 overflow-hidden 
      bg-[#03373D]"
    >
      <img
        src={bgLight}
        alt="bg effect"
        className="absolute top-0 left-0 w-full object-cover pointer-events-none"
      />

      {/* Left Content */}
      <div className="relative flex flex-col md:flex-row justify-between items-center">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Merchant and Customer Satisfaction is Our First Priority
          </h2>

          <p className="text-gray-300 text-sm mt-4 leading-relaxed">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product…
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <button className="btn bg-primary text-black rounded-full px-6 font-semibold">
              Become a Merchant
            </button>
            <button className="btn btn-outline border-primary text-primary rounded-full px-6 hover:text-secondary">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/3 mt-10 md:mt-0 flex justify-center">
          <img
            src={location}
            alt="illustration"
            className="w-64 md:w-100 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
