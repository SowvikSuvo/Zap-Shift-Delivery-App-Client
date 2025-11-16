import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const ReviewCard = ({ review }) => {
  const { userName, user_photoURL, review: testimonial, ratings } = review;
  return (
    <div className="max-w-sm bg-base-100 shadow-lg  rounded-xl p-6 border border-gray-200">
      {/* Quote icon */}
      <FaQuoteLeft className="text-primary text-2xl mb-4 " />

      {/* review text */}
      <p className=" mb-4">{testimonial}</p>

      {/* Divider */}
      <div className="border-t border-dashed border-gray-300 my-4"></div>

      {/* profile */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-primary">
          <img className="rounded-full" src={user_photoURL} alt="" />
        </div>

        <div>
          <h3 className="font-semibold text-lg">{userName}</h3>
          <div className="flex items-center gap-2">
            <div className="flex">
              <FaStar className="text-yellow-400 text-lg rounded-full" />
            </div>
            <span className="text-sm font-semibold text-gray-600">
              {ratings.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
