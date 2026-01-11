import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

import CustomCursor from "./components/CustomCursor";

const App = (params) => {
  // eslint-disable-next-line
  const [title, setTitle] = useState("Alex Qiang");
  // eslint-disable-next-line
  const [headerLinks, setHeaderLinks] = useState([
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ]);
  // eslint-disable-next-line
  const [home, setHome] = useState({
    title: "Hello, I'm Alex.",
    subTitle: "Full Stack Developer",
    text: "Check out my projects below.",
  });
  // eslint-disable-next-line
  const [about, setAbout] = useState({
    title: "About Me",
  });

  return (
    <BrowserRouter>
      <CustomCursor />
      {/* Editorial Grid Lines */}
      <div className="grid-lines">
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
      </div>

      {/* Main Container for the 'Paper' look */}
      <Container className="p-0" fluid={false} style={{ maxWidth: '1000px', minHeight: '100vh' }}>
        <Navbar className="py-4 mb-5" bg="transparent" expand="lg">
          <Navbar.Brand>
            <Link className="navbar-brand" to="/">Alex Qiang</Link>
          </Navbar.Brand>

          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route
          exact path="/"
          render={() => (
            <HomePage
              title={home.title}
              subTitle={home.subTitle}
              text={home.text}
            />
          )}
        />
        <Route path="/about" render={() => <AboutPage title={about.title} />} />

      </Container>  
      <Footer />
      
      {/* Removed ParticlesBg for Editorial Theme */}
    </BrowserRouter>
  );
};


export default App;
