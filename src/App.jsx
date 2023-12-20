import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  Navbar,
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Feedbacks,
  Contact,
  StarsCanvas,
} from './components';
import { downloadPdf } from './assets';
const App = () => {
  const onDownloadPdf = () => {
    fetch('Resume_Ashish_Kumar_V2.pdf').then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Resume_Ashish_Kumar.pdf';
        alink.click();
      });
    });
  };
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <button
        onClick={onDownloadPdf}
        title="Download PDF"
        className="fixed z-90 bottom-10 right-8 bg-blue-600 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300"
      >
        <img
          src={downloadPdf}
          alt="PDF Download"
          className="w-10 h-10 object-contain"
        />
      </button>
    </BrowserRouter>
  );
};

export default App;
