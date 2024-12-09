import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, icon, href }) => {
  return (<>
    <Link to={href}>
      <div className="bg-white shadow-md p-4 rounded-lg flex w-full space-x-4 hover:bg-blue-100">
        <div className="text-3xl">{icon}</div>
        <h3 className="text-lg text-gray-700">{title}</h3>
      </div>
    </Link>
  </>
  );
};

export default ServiceCard;
