import React from "react";

export const Shape = () => {
  return <div className="bg-purple-900 w-64 h-40 rounded-full blur-3xl" />;
};

export const ShapeRandom = () => {
  return (
    <div
      className="bg-[#0C4265] w-64 h-40 rounded-tl-[25%] rounded-tr-[75%] rounded-br-[15%] rounded-bl-[58%] 
    rounded-t-[75%] rounded-r-[75%] rounded-b-[25%] rounded-l-[25%] blur-3xl"
    />
  );
};
