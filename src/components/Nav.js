import React from 'react';

function Nav(props) {
  const { currentTab, handleTabChange } = props;
  const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav>
      <ul className="flex space-x-4">
        {tabs.map(tab => (
          <li key={tab}>
            <a
              href={`#${tab.toLowerCase()}`}
              onClick={() => handleTabChange(tab)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                currentTab === tab
                  ? 'bg-cyan-500 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
