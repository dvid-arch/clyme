import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import Header from './components/Header';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import BlogPost from './pages/Blog/BlogPost';
import Donate from './pages/Donate/Donate';
import Projects from './pages/Projects/Projects';
import Footer from './components/Footer';
import ProjectPage from './pages/Projects/Project';
import Volunteer from './pages/Volunteer/Volunteer';
import Partner from './pages/Partner/Partner';
import Membership from './pages/Membership/Membership';
import MeetOurTeam from './pages/Team/Team';

function App() {
  return (
    <Router>
   
      <div className="flex flex-col min-h-screen">
      <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/BlogPost" element={<BlogPost />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Project" element={<ProjectPage />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Donate" element={<Donate />} />
            <Route path="/Volunteer" element={<Volunteer />} />
            <Route path="/Partner" element={<Partner />} />
            <Route path="/Membership" element={<Membership />} />
            <Route path="/Team" element={<MeetOurTeam />} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </main>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
