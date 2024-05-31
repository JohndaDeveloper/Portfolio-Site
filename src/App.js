import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import resume from "./assets/John-Nelson-2024.pdf";
import "./styling/App.css";
import "./styling/Header.css";

function App() {
  const [showResume, setShowResume] = useState(false);

  const handleShowResume = (e) => {
    e.preventDefault();
    setShowResume(true);
  };
  const handleHideResume = () => {
    setShowResume(false);
  };

  return (
    <div>
      <Header onShowResume={handleShowResume} />
      <main>
        {!showResume ? (
          <>
            <AboutMe />
            <Projects />
          </>
        ) : (
          <div className="resume-container">
            <button onClick={handleHideResume} className="close-button">
              Close
            </button>
            <iframe
              src={resume}
              title="John Nelson's Resume"
              className="resume"
            ></iframe>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
