// BookCard.jsx
import React, { useState } from "react";

const BookCard = ({ data }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="max-w-7xl md:w-6xl  mx-auto my-10 h-[500px] bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
      <div className="lg:flex h-full">
        {/* Image Section */}
        <div className="relative lg:w-1/3 h-full flex justify-center items-center bg-gray-100 group overflow-hidden">
          {/* {loading && (
            <div className="absolute flex justify-center items-center w-full h-full">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-emerald-400"></div>
            </div>
          )} */}
          {data.newCode ? (
            <img
              src={`https://maktabatulmadinah.com/Images/${`${data.newCode}`}/01.webp`}
              alt={data.bookNameInEnglish}
              className={`w-full h-full object-cover transform transition-transform duration-500 ${
                loading ? "hidden" : "group-hover:scale-105"
              }`}
              onLoad={() => setLoading(false)}
            />
          ) : (
            <img
              src={`https://maktabatulmadinah.com/Images/${`${data.newCode}`}/01.webp`}
              alt={data.bookNameInEnglish}
              className={`w-full h-full object-cover transform transition-transform duration-500 ${
                loading ? "hidden" : "group-hover:scale-105"
              }`}
              onLoad={() => setLoading(false)}
            />
          )}
        </div>

        {/* Details Section */}
        <div className="lg:w-2/3 py-8 px-0 flex flex-col justify-evenly">
          <div>
            <h1 className="text-5xl lg:text-5xl leading-16 text-center font-extrabold text-gray-900 mb-2">
              {data.bookName}
            </h1>
          </div>

          <div className="mt-6 flex items-center justify-center">
            <span
              style={{ fontFamily: "Digital-7" }}
              className="text-3xl lg:text-9xl font-bold text-black px-4 py-2 rounded-xl"
            >
              Rs.{" "}
              {data.policyDiscount === "ON"
                ? Math.round(data.netAmount - data.netAmount * 0.2)
                : Math.round(data.netAmount)}{" "}
              /-
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
