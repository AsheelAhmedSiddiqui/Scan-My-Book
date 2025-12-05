// BookCard.jsx
import React, { useState } from "react";

const BookCard = ({ data }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="max-w-7xl mx-auto my-10 h-[500px] bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
      <div className="lg:flex h-full">
        {/* Image Section */}
        <div className="relative lg:w-1/3 h-full flex justify-center items-center bg-gray-100 group overflow-hidden">
          {loading && (
            <div className="absolute flex justify-center items-center w-full h-full">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-emerald-400"></div>
            </div>
          )}
          {data.newCode && (
            <img
              src={`https://maktabatulmadinah.com/Images/${`${data.newCode}`}/01.webp`}
              alt={data.bookNameInEnglish}
              className={`w-full h-full object-cover transform transition-transform duration-500 ${
                loading ? "hidden" : "group-hover:scale-105"
              }`}
              onLoad={() => setLoading(false)}
              onError={() => setLoading(false)}
            />
          )}
        </div>

        {/* Details Section */}
        <div className="lg:w-2/3 p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl lg:text-5xl text-center font-extrabold text-gray-900 mb-2">
              {data.productNameEnglish.toUpperCase()}
            </h1>
            <h2 className="text-3xl lg:text-4xl text-gray-600 text-center pt-6">
              {data.productNameUrdu}
            </h2>
          </div>

          <div className="mt-6 flex items-center justify-center">
            <span className="text-3xl lg:text-9xl font-bold text-emerald-500 px-4 py-2 rounded-xl ">
              Rs. {data.retailAfterDiscount - data.retailAfterDiscount * 0.2} /-
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
