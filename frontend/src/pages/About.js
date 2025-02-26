import Footer from "../components/Footer";
import React from 'react';
import Header from "../components/Header";

function About() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="container py-5 flex-grow-1">
        <h1 className="display-4 text-center mb-4">About Me</h1>
        <p className="lead text-center">
          Follow my socials for more information
          every link available on my website
        </p>
        <p className="text-center">
          <a href="https://iyabahsaid.com.tr/" className="btn btn-outline-primary">
            Visit My Website
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;