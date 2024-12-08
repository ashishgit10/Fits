import React from "react";
import { useNavigate } from "react-router-dom";

const buttons = [
  { id: 1, name: "Pre Inspection", path: "/preform" },
  { id: 2, name: "Post Inspection", path: "/page2" },
  { id: 3, name: "Renew Noc", path: "/page3" },
];

const InspectionCard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center gap-6 mt-10">
      {buttons.map((button) => (
        <button
          key={button.id}
          className="w-96 h-[80px] py-3 bg-red-500 text-white text-lg font-semibold rounded-lg hover:bg-green-600 transition"
          onClick={() => navigate(button.path)}
        >
          {button.name}
        </button>
      ))}
    </div>
  );
};

export default InspectionCard;
