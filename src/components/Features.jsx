import React from "react";
import liveParcel from "../assets/live-tracking.png";
import callCenter from "../assets/safe-delivery.png";

const Features = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-10 space-y-6 flex-col justify-center items-center mt-24 ">
      <div
        className="card card-side bg-gray-50  shadow-md p-6  rounded-xl 
                     flex flex-col md:flex-row items-center md:items-start gap-6"
      >
        {/* Image */}
        <img src={liveParcel} alt={"item.title"} className="w-32 md:w-40 " />

        <div className="hidden md:block border-l-2 border-dashed text-secondary h-40 ml-10"></div>

        {/* Text */}
        <div className="space-y-3 text-center md:text-left mt-9 ml-5 ">
          <h3 className="text-2xl font-semibold text-secondary">
            Live Parcel Tracking
          </h3>

          <p className=" text-gray-600 leading-relaxed text-sm md:text-[15px]">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>

      <div
        className="card card-side bg-gray-50  shadow-md p-6 rounded-xl 
                     flex flex-col md:flex-row items-center md:items-start gap-6"
      >
        {/* Image */}
        <img src={callCenter} alt={"image"} className="w-32 md:w-40" />

        <div className="hidden md:block border-l-2 border-dashed text-secondary  h-40 ml-10"></div>

        {/* Text */}
        <div className="space-y-3 text-center md:text-left mt-9 ml-5">
          <h3 className="text-2xl font-semibold text-secondary">
            100% Safe Delivery
          </h3>

          <p className=" text-gray-600 leading-relaxed text-sm md:text-[15px]">
            We ensure your parcels are handled with the utmost care and
            delivered securely to their destination. Our reliable process
            guarantees safe and damage-free delivery every time.
          </p>
        </div>
      </div>

      <div
        className="card card-side bg-gray-50  shadow-md p-6 rounded-xl 
                     flex flex-col md:flex-row items-center md:items-start gap-6"
      >
        {/* Image */}
        <img src={callCenter} alt={"image"} className="w-32 md:w-40" />

        <div className="hidden md:block border-l-2 border-dashed text-secondary h-40 ml-10"></div>

        {/* Text */}
        <div className="space-y-3 text-center md:text-left mt-9 ml-5">
          <h3 className="text-2xl font-semibold text-secondary">
            24/7 Call Center Support
          </h3>

          <p className=" text-gray-600 leading-relaxed text-sm md:text-[15px]">
            Our dedicated support team is available around the clock to assist
            you with any questions, updates, or delivery concerns—anytime you
            need us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
