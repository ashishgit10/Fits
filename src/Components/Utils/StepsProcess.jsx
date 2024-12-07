import React from "react";
import StepCard from "./StepCard";

const steps = [
  {
    id: 1,
    title: "Apply",
    description: "Apply at Single Window System",
  },
  {
    id: 2,
    title: "Scrutiny",
    description: "Case scrutinized by the AE(B)",
  },
  {
    id: 3,
    title: "Process",
    description: "After receiving NOCs, cases are processed for approval. Deemed NOC on 16th day.",
  },
  {
    id: 4,
    title: "Approval",
    description: "After approval and payment, permits are released online.",
  },
  {
    id: 5,
    title: "Deemed",
    description: "If no response, you get deemed sanction on the 31st day.",
  },
];

const StepsProcess = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
      {steps.map((step) => (
        <StepCard key={step.id} step={step} />
      ))}
    </div>
  );
};

export default StepsProcess;