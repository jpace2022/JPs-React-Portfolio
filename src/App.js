import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  const [currentTab, handleTabChange] = useState("About");

  const renderTab = () => {
    if (currentTab === "About") {
      return <About />;
    }
    if (currentTab === "Portfolio") {
      return <Portfolio />;
    }
    if (currentTab === "Contact") {
      return <Contact />;
    }
    if (currentTab === "Resume") {
      return <Resume />;
    }
    return <About />;
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Header
        currentTab={currentTab}
        handleTabChange={handleTabChange}
      />
      <main className="flex-grow container mx-auto p-4">{renderTab()}</main>
      <Footer />
    </div>
  );
}

export default App;
