import React from "react";

function FeatureCard({ image, text }) {
  return (
    <div className="h-16 w-72 p-1 rounded-lg bg-gradient-to-r from-[#2F979B] to-[#393491]">
      <div className="flex h-full w-full flex-row gap-x-5 py-1 items-center bg-ubtisDarkBlue justify-center">
        <img src={image} alt={text} className="w-12" />
        <p>{text}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
