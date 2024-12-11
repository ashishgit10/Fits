import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const services = [
  { title: 'Architecture Department', icon: '🏗️' },
  { title: 'Finance Department', icon: '💹' },
  { title: 'Delhi Fire Department', icon: '👨‍🚒', href: '/fireDept' },
  { title: 'Engineering Department', icon: '⚙️' },
  { title: 'Teh Bazari', icon: '🛒' },
  { title: 'Veterinary Department', icon: '🐾' },
  { title: 'Property Tax (PTR)', icon: '📃' },
  { title: 'Electrical & Mechanical Department', icon: '🧑‍🔧' },
  { title: 'Horticulture Department', icon: '🎉' },
  { title: 'Department of Environment Management', icon: '🌏' },
  { title: 'Public Health Department', icon: '🧑‍⚕️' },
  { title: 'Community Services', icon: '🤝' },
];

const OnlineService = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section className="container mx-auto my-6 px-4">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Loading Services...</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-200 shadow-md rounded-lg p-4 w-64 h-40 animate-pulse"
            ></div>
          ))}
        </div>
      </section>
    );
  }

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
    </section>
  );
};

export default OnlineService;