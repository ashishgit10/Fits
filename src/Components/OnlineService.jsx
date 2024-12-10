import React from 'react';
import { Link } from 'react-router-dom';
import Fileupload from './Utils/Fileupload';

const services = [
  { title: 'Property Tax (PTR)', icon: '🏠' },
  { title: 'Registration of Birth & Death (RBD)', icon: '📄' },
  { title: 'Delhi Fire Department', icon: '👨‍🚒', href: '/fireDept' },
  { title: 'Health Trade Licenses', icon: '🩺' },
  { title: 'Architecture Department', icon: '🚖' },
  { title: 'Teh Bazari', icon: '🛒' },
  { title: 'Veterinary Department', icon: '📜' },
  { title: 'Cremation / Burial Ground', icon: '⚰️' },
  { title: 'Permission for Social Functions', icon: '🎉' },
  { title: 'Finance Department', icon: '🎉' },
  { title: 'Department of Environment Management Services', icon: '🎉' },
  { title: 'Hawking License', icon: '🎉' },
];

const OnlineService = () => {
  return (
    <section className="container mx-auto my-6 px-4">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Online Services</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <Link
            key={index}
            to={service.href || '#'}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center w-64 h-40 hover:bg-blue-100 transition"
          >
            <div className="text-4xl mb-2">{service.icon}</div>
            <h3 className="text-lg font-semibold text-gray-700 text-center">{service.title}</h3>
          </Link>
        ))}
      </div>
      <Fileupload/>
    </section>
  );
};

export default OnlineService;
