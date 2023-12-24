// ContactUs.js

import React from 'react';

const ContactUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center mb-16">
          <div className="md:w-1/2 p-4">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="text-gray-700">
              We're here to assist you. Whether you have questions, feedback, or just want to say hello, feel free to reach out to us using the contact details below.
            </p>
          </div>

          <div className="md:w-1/2 p-4">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="text-gray-700">
              <span className="font-bold">Email:</span>tmp@gmail.com<br />
              <span className="font-bold">Phone:</span>0155131415<br />
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-700 mb-4">Have a question or need support? Send us a message by social media!</p>
          {/* Add a contact form component here */}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
