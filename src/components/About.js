import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">About Our Todo App</h1>
        <p className="text-lg mb-12 text-center">
          Welcome to our todo app! We believe in helping you stay organized and productive, whether it's managing your daily tasks or tracking long-term goals.
        </p>
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <ul className="list-disc pl-6">
            <li className="mb-2">Simple and intuitive interface</li>
            <li className="mb-2">Create and delete tasks with ease</li>
            <li className="mb-2">Mark tasks as complete to track your progress</li>
            <li>Responsive design for seamless use on any device</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
