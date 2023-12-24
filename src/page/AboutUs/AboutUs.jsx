// AboutUs.js

import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>
        
        <p className="text-lg text-gray-700 mb-8 text-center">
          Welcome to <span className="text-blue-500">Our Task Management Platform</span> - Our Ultimate Task Management Solution!
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center mb-16">
          <div className="md:w-1/2 p-4">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700">
              <span className="font-bold">Empower. Collaborate. Achieve.</span> Our mission is to empower individuals and teams to achieve their full potential by offering a comprehensive and intuitive task management platform.
            </p>
          </div>

          <div className="md:w-1/2 p-4">
            <h3 className="text-2xl font-bold mb-4">What Sets Us Apart?</h3>
            <ul className="list-disc pl-4">
              <li className="text-gray-700">User-Friendly Interface</li>
              <li className="text-gray-700">Collaborative Features</li>
              <li className="text-gray-700">Customization Options</li>
            </ul>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default AboutUs;
