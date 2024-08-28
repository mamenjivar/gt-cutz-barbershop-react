import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Fragment } from 'react';
import ReactGA from 'react-ga4';

// components
import Footer from './components/Footer/Footer';
import NavigationBar from './components/NavigationBar/NavigationBar.tsx';

// pages
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard';

// Vercel analytics
//import { Analytics } from '@vercel/analytics/react';
function App() {
  const TRACKING_ID = 'G-S8WEFRJ4E1';
  ReactGA.initialize(TRACKING_ID)
  ReactGA.send({ hitType: 'pageView', page: '/'});

  return (
    <Fragment>
      <NavigationBar />
      <Router>
        <Routes>
          <Route index path="/home" element={ <Home />} />
          <Route index path="*" element={ <Navigate to="/home" replace />} />
          <Route path="/dashboard" element={ <Dashboard />} />
        </Routes>
      </Router>
      {/* <NavigationBar />
      <Home /> */}
      <Footer />
    </Fragment>
  );
}

export default App;