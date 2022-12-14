import React, { useState } from "react";
import Header from "../src/components/Header";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Portfolio from "../src/components/Portfolio";
import Resume from "../src/components/Resume";
import Footer from "../src/components/Footer";
import Nav from "../src/components/Nav";
import { Helmet } from "react-helmet";
import './App.css';

function App() {
  const [currentTab, handleTabChange] = useState('about');

  const renderTab = () => {

  if (currentTab === "About") {
    return <About/>;
  }
  if (currentTab === "Portfolio") {
    return <Portfolio/>;
  }
  if (currentTab === "Contact") {
    return <Contact/>;
  }
  if (currentTab === "Resume") {
    return <Resume/>;
  }
  return <About/>
};

  return (
    <>
      <Helmet>
        <title> James Pace's Portfolio Page!</title>
        </Helmet>;
        <Header
        currentTab = {currentTab}
        handleTabChange = {handleTabChange}
        ></Header>
        <main>{renderTab()}</main>
        <Footer></Footer>
    </>
  );
  
}

export default App;
