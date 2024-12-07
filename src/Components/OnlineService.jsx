import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
  { title: 'Property Tax (PTR)', icon: '🏠' },
  { title: 'Registration of Birth & Death (RBD)', icon: '📄' },
  { title: 'Delhi Fire Department', icon: '👨‍🚒', href:"/fireDept" },
  { title: 'Health Trade Licenses', icon: '🩺' },
  { title: 'Hackney Carriage', icon: '🚖' },
  { title: 'Teh Bazari', icon: '🛒' },
  { title: 'Hawking License', icon: '📜' },
  { title: 'Cremation / Burial Ground', icon: '⚰️' },
  { title: 'Permission for Social Functions', icon: '🎉' },
];

const OnlineService = () => {
  return (
    <section className="container mx-auto my-6 px-4">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Online Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} href={service.href} icon={service.icon} />
        ))}
      </div>
    </section>
  );
};

export default OnlineService;
