import React from "react";
import { FaClipboardCheck, FaFileAlt, FaCheckCircle, FaSyncAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const InspectionCard = () => {
  const cards = [
    {
      id: "1",
      title: "Checklist",
      description: "Complete all required items before proceeding with the application process",
      icon: FaClipboardCheck,
      bgColor: "bg-blue-50",
      hoverBg: "hover:bg-blue-100",
      iconColor: "text-blue-500",
      path: "/checklist"
    },
    {
      id: "2",
      title: "Pre NOC",
      description: "Initial documentation and verification steps for NOC processing",
      icon: FaFileAlt,
      bgColor: "bg-green-50",
      hoverBg: "hover:bg-green-100",
      iconColor: "text-green-500",
      path: "/preform"
    },
    {
      id: "3",
      title: "Post NOC",
      description: "Follow-up procedures and compliance checks after NOC approval",
      icon: FaCheckCircle,
      bgColor: "bg-purple-50",
      hoverBg: "hover:bg-purple-100",
      iconColor: "text-purple-500",
      path: "/"
    },
    {
      id: "4",
      title: "Renewal",
      description: "Process for extending and updating existing NOC documentation",
      icon: FaSyncAlt,
      bgColor: "bg-orange-50",
      hoverBg: "hover:bg-orange-100",
      iconColor: "text-orange-500",
      path: "/"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <Link to={card.path}>
            <div
              key={card.id}
              className={`${card.bgColor} ${card.hoverBg} rounded-xl p-6 shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer`}
              role="button"
              aria-label={`${card.title} card`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <card.icon className={`w-12 h-12 ${card.iconColor}`} />
                <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InspectionCard;