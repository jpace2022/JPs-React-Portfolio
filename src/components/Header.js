import React from 'react';
import Nav from './Nav';

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-cyan-400">
          James Pace
        </h1>
        <Nav
          currentTab={currentTab}
          handleTabChange={handleTabChange}
        />
      </div>
      <section className="text-center py-20 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Welcome to my Portfolio</h2>
          <p className="text-lg text-gray-400">
            A showcase of my journey and projects in web development.
          </p>
        </div>
      </section>
    </header>
  );
}

export default Header;
