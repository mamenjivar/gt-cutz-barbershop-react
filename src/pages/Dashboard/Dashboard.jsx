import React from 'react';

// styling
import classes from './Dashboard.module.scss';

/**
 * Dashboard page to handle the backend
 * @returns 
 */
const Dashboard = () => {
    // lassName={`${styles.backgroundImage} ${styles.backgroundText} ${styles.backgroundColumns}`}>
    // import classes from './MeetTheTeam.module.scss';

    // sends request to create a new barber
    const createBarber = () => {
        console.log('clicked!');
    }

    // go back to main dashboard page
    const goBack = () => {
        console.log('go back clicked');
    }

    return (
        <section >
            <h1 className={classes.header}>Add a new Barber</h1>

            <form>
                <fieldset>
                    <div>
                        <label htmlFor='name'>Name</label><br />
                        <input type='text' id='name' /><br />
                        <span>The name of the Barber. (This won't get displayed on website)</span>
                    </div>

                    <div>
                        <label htmlFor='barberName'>Barber Name</label><br />
                        <input type='text' id='barberName' /><br />
                        <span>Nickname of barber that will get displayed in the website.</span>
                    </div>

                    <div>
                        <label htmlFor='instagramHandle'>Instagram Handle</label><br />
                        <input type='text' id='instagramHandle' /><br />
                        <span>The username for this Barber that appears on Instagram. (optional)</span>
                    </div>

                    {/* This field can be constructed using the Instagram Handle above, may need to test */}
                    <div>
                        <label htmlFor='instagramURL'>Instagram URL</label><br />
                        <input type='text' id='instagramURL' /><br />
                        <span>Insert the URL for this Barber's Instagram page. (optional)</span>
                    </div>

                    <div>
                        <label htmlFor='bookingURL'>Booking URL</label><br />
                        <input type='text' id='bookingURL' /><br />
                        <span>Place the link where customers can schedule appointments with this Barber.</span>
                    </div>

                    <button type='button' onClick={createBarber}>Create</button>
                    <button type='button' onClick={goBack}>Go Back</button>
                </fieldset>
            </form>
        </section>
    );
};

export default Dashboard;