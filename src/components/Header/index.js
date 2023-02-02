import React from 'react'
import Nav from '../Nav'

function Header(props) {

  const { currentTab, handleTabChange } = props

  return (
    <div>
      <section>
        <header className='flex-row px-1'>
          <div>
            <h1>James Pace's Portfolio</h1>
          </div>
          <div>
            <Nav
            currentTab={currentTab}
            handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
      <section className="hero">
        <div className="hero-cta">
          <h2>Welcome to James Pace's Portfolio page built using React. Please take a look at a small sample of the projects he has worked on during the program. </h2>
        </div>
      </section>
    </div>
  );
}

export default Header;
