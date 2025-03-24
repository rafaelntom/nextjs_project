"use client";
import React from "react";

const Error = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent ">
        Error
      </h1>
      <p className="text-center text-xl text-white ">
        Sorry, an error occurred while fetching the meal data.
      </p>
    </div>
  );
};

export default Error;
