import React from "react";

export const Skeletons = () => {
  return (
    <>
      <SkeletonText />
      <div className="mt-6 grid grid-cols-4 gap-6">
        {Array.from({ length: 20 }).map((_, index) => (
          <Skeleton key={index} />
        ))}
      </div>
    </>
  );
};

export const SkeletonDetailPage = () => {
  return (
    <div className="flex flex-col justify-center gap-8 animate-pulse">
      <div className="w-[1200px] h-[60vh] bg-blue-950 rounded-3xl"></div>
      <div className="flex gap-10">
        <div className="w-96 h-[600px] bg-blue-950 rounded"></div>
        <div className="flex flex-col gap-4">
          <div className="w-72 py-2 bg-blue-950 rounded"></div>
          <div className="w-60 py-2 bg-blue-950 rounded"></div>
          <div className="w-52 py-2 bg-blue-950 rounded"></div>
        </div>
      </div>
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center rounded-lg w-72 h-[512px] bg-[#20283E] animate-pulse">
      <div className="w-64 h-[400px] bg-gray-900 p-6 rounded-lg">
        <div className="w-14 h-8 bg-gray-800 rounded-lg"></div>
      </div>
      <div className="flex flex-col gap-4 self-start ml-4">
        <div className="w-56 py-2 bg-gray-900 rounded"></div>
        <div className="w-60 py-2 bg-gray-900 rounded"></div>
      </div>
    </div>
  );
};
const SkeletonText = () => {
  return (
    <div className="flex flex-col gap-4 self-start my-6 animate-pulse">
      <div className="w-80 py-4 bg-gray-800 rounded"></div>
      <div className="w-60 py-3 bg-gray-800 rounded"></div>
      <div className="w-80 py-8 bg-gray-800 rounded"></div>
    </div>
  );
};
