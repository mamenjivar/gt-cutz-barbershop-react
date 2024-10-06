import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Fragment } from 'react';
import ReactGA from 'react-ga4';

// components
import Footer from './components/Footer/Footer';
import NavigationBar from './components/NavigationBar/NavigationBar.tsx';

// pages
import Home from './pages/Home.jsx';
import CreateBarber from './pages/CreateBarber/CreateBarber';
import ViewBarbers from './pages/ViewBarbers/ViewBarbers';
import UpdateBarber from './pages/UpdateBarber/UpdateBarber';

// import classes from './Footer.module.scss';
import classes from './App.module.scss';

// Vercel analytics
//import { Analytics } from '@vercel/analytics/react';
function App() {
  const TRACKING_ID = 'G-S8WEFRJ4E1';
  ReactGA.initialize(TRACKING_ID)
  ReactGA.send({ hitType: 'pageView', page: '/'});

  return (
    <Fragment>
      <NavigationBar />
      <div className={classes.container}>
        <Router>
          <Routes>
            <Route index path="/home" element={ <Home />} />
            <Route index path="*" element={ <Navigate to="/home" replace />} />
            <Route path="/createbarber" element={ <CreateBarber />} />
            <Route path="/viewbarbers" element={ <ViewBarbers />} />
            <Route path="/updatebarber/:firebaseId" element={ <UpdateBarber />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;