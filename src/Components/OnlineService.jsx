import React from 'react';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';

const services = [
  { title: 'Property Tax (PTR)', icon: '🏠' },
  { title: 'Registration of Birth & Death (RBD)', icon: '📄' },
  { title: 'Delhi Fire Department', icon: '👨‍🚒', href: "/fireDept" },
  { title: 'Health Trade Licenses', icon: '🩺' },
  { title: ' Architecture Department', icon: '🚖' },
  { title: 'Teh Bazari', icon: '🛒' },
  { title: 'Hawking License', icon: '📜' },
  { title: 'Cremation / Burial Ground', icon: '⚰️' },
  { title: 'Permission for Social Functions', icon: '🎉' },
  { title: 'Finance Department', icon: '🎉' },
];

const OnlineService = () => {
  return (
    <section className="container mx-auto my-6 px-4">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Online Services</h2>
      <div className="flex flex-wrap items-center gap-4">
      
        <div>

          <Link>
            <div className="bg-white shadow-md p-4 rounded-lg flex w-full space-x-4 hover:bg-blue-100">
              <div className="text-3xl">🏠</div>
              <h3 className="text-lg text-gray-700">Property Tax (PTR)</h3>
            </div>
          </Link>

          <Link>
            <div className="bg-white shadow-md p-4 rounded-lg flex w-full space-x-4 hover:bg-blue-100">
              <div className="text-3xl">🏠</div>
              <h3 className="text-lg text-gray-700">Registration of Birth & Death (RBD)</h3>
            </div>
          </Link>

          <Link>
            <div className="bg-white shadow-md p-4 rounded-lg flex w-full space-x-4 hover:bg-blue-100">
              <div className="text-3xl">🏠</div>
              <h3 className="text-lg text-gray-700">Delhi Fire Department</h3>
            </div>
          </Link>

          <Link>
            <div className="bg-white shadow-md p-4 rounded-lg flex w-full space-x-4 hover:bg-blue-100">
              <div className="text-3xl">🏠</div>
              <h3 className="text-lg text-gray-700">Health Trade Licenses</h3>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default OnlineService;
