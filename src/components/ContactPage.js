import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-6">
        Have questions, suggestions, or feedback? We'd love to hear from you! Please fill out the form below, and we'll get back to you as soon as possible.
      </p>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold mb-1">Your Name</label>
          <input type="text" id="name" name="name" className="w-full border-2 border-black rounded-lg px-4 py-2 " placeholder="Enter your name" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold mb-1">Your Email</label>
          <input type="email" id="email" name="email" className="w-full border-2 border-black rounded-lg px-4 py-2" placeholder="Enter your email" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-semibold mb-1">Message</label>
          <textarea id="message" name="message" rows="5" className="w-full border-2 border-black rounded-lg px-4 py-2" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
