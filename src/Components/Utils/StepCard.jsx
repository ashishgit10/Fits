import React from "react";

const StepCard = ({ step }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-center items-center w-12 h-12 bg-green-100 text-green-600 font-bold text-xl rounded-full mx-auto mb-4">
        {step.id}
      </div>
      <h3 className="text-lg font-semibold text-green-700 mb-2">{step.title}</h3>
      <p className="text-gray-600">{step.description}</p>
    </div>
  );
};

export default StepCard;
