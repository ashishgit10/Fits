import React from "react";

const StepCard = ({ step }) => {
  return (
    <div className="bg-white flex items-center justify-center flex-col w-52 border-green-400 border-1 rounded-lg p-6">
      <div className="flex justify-center px-3 py-2 items-center bg-green-100 text-green-600 font-bold text-xl rounded-full mb-4">
        {step.id}
      </div>
      <h3 className="text-lg  font-semibold text-green-700 mb-2">{step.title}</h3>
      <p className="text-gray-600">{step.description}</p>
    </div>                                                                           
  );
};

export default StepCard;
