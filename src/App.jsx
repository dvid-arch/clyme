import React, { useState } from 'react';
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
import Cms from './pages/cms/Cms';
import Login from './pages/Auth/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/authContext';
import Tcms from './pages/Tcms/Tcms';
import Blogg from './pages/Tcms/Blogg';
import BlogList from './pages/Tcms/components/BlogList';
import Cblog from './pages/Blog/Cblog';
import NotFound from './pages/NotFound';


function App() {



  return (
    <Router>

      <div className="flex flex-col  min-h-screen">
        <Header />
        <main className="flex-grow">
          <AuthProvider>
            <Routes>
              <Route path="/About" element={<About />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="/Bloglist" element={<BlogList />} />
              <Route path="/Tcms" element={<Tcms />} />
              <Route
                path="/cms"
                element={
                  <ProtectedRoute>
                    <Cms />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
             
              <Route path="/blog/:id" element={<BlogPost />} />
              
              <Route path="/gallery" element={<Projects />} />
              <Route path="/Project" element={<ProjectPage />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Donate" element={<Donate />} />
              <Route path="/Volunteer" element={<Membership />} />
              <Route path="/Partner" element={<Partner />} />
              
              <Route path="/Team" element={<MeetOurTeam />} />

              <Route path="/" element={<LandingPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </main>
        <Footer />
      </div>
    </Router >
  );
}

export default App;
