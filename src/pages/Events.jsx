import React, { Fragment } from 'react';
import EventCards from '../components/EventCards/EventCards';

// components
import PageHeaders from '../components/PageHeaders/PageHeaders';

/**
 * The events page where all past and current events that happen at the shop
 * @returns 
 */
const Events = () => {
    return (
        <Fragment>
            <PageHeaders  />
            <h1>Past Events</h1>
            <EventCards  />
        </Fragment>
    );
};

export default Events;