import React, { useState } from "react";
import Header from "../src/components/Header";
import About from "../src/components/About";
import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";
import Portfolio from "../src/components/Portfolio";
import Resume from "../src/components/Resume";
import Contact from "../src/components/Contact";
import { Helmet } from "react-helmet";
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentTab, handleTabChange] = useState('about');

  const renderTab = () => {

  if (currentTab === "About") {
    return <About/>;
  }
  if (currentTab === "Portfolio") {
    return <About/>;
  }
  if (currentTab === "Contact") {
    return <About/>;
  }
  if (currentTab === "Resume") {
    return <About/>;
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
