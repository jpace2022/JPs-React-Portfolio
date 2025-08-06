// This is a test comment to check Git change detection.
import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet"; 
import './App.css';

function App() {
  const [currentTab, handleTabChange] = useState("About");

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
        </Helmet>
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
