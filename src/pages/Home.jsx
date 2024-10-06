import React from 'react';
import { Fragment } from 'react';

// components
// import NavigationBar from '../components/NavigationBar/NavigationBar.tsx';
import Banner from '../components/Banner/Banner';
import MeetTheTeam from '../components/MeetTheTeam/MeetTheTeam';
import SidebySideLR from '../components/SidebySideContent/SidebySideContentLR/SideBySideLR';
import SideBySideRL from '../components/SidebySideContent/SidebySideContentRL/SideBySideRL';

import { Element } from 'react-scroll';

/**
 * Home page for barber shop
 * @returns
 */
const Home = () => {
  return (
    <Fragment>
      {/* <NavigationBar /> */}
      <Banner />
      <Element id="hours-destination" name="hours-destination">
        <SidebySideLR />
      </Element>
      <Element id="location-destination" name="location-destination">
        <SideBySideRL />
      </Element>
      <Element id="team-destination" name="team-destination">
        <MeetTheTeam />
      </Element>
    </Fragment>
  );
};

export default Home;
