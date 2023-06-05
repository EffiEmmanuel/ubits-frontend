import React from "react";

function HeadingAndSubtitle({ heading, subtitle }) {
  return (
    <div className="flex flex-col text-center">
      <h2 className="text-2xl lg:text-4xl font-bold">{heading}</h2>
      <p className="mt-3">{subtitle}</p>
    </div>
  );
}

export default HeadingAndSubtitle;
