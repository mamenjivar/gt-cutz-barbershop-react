import React from 'react';

/**
 * Dashboard page to handle the backend
 * @returns 
 */
const Dashboard = () => {
    return (
        <section>
            <h1>Add a new Barber</h1>

            <form>
                <fieldset>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' />

                    <label htmlFor='barberName'>Barber Name</label>
                    <input type='text' id='barberName' />

                    <label htmlFor='instagram'>Instagram Handle</label>
                    <input type='text' id='instagram' />

                    <label htmlFor='instagramURL'>Instagram URL</label>
                    <input type='text' id='instagramURL' />

                    <label htmlFor='bookingURL'>Booking link</label>
                    <input type='text' id='bookingURL' />

                    <button type='button'>Create</button>
                    <button type='button'>Cancel</button>
                </fieldset>
            </form>
        </section>
    );
};

export default Dashboard;