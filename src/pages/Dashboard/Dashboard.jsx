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
    return (
        <section >
            <h1 className={classes.header}>Add a new Barber</h1>
            

            <form>
                <fieldset>
                    <div>
                        <input placeholder='Name' type='text' id='name' /><br />
                        <span>The name of the Barber. (This won't get displayed on website)</span>
                    </div>

                    <div>
                        <input placeholder='Barber Name' type='text' id='barberName' /><br />
                        <span>Nickname of barber that will get displayed in the website.</span>
                    </div>

                    <div>
                        <input placeholder='Instagram handle' type='text' id='instagram' /><br />
                        <span>The username for this Barber that appears on Instagram. (optional)</span>
                    </div>

                    {/* This field can be constructed using the Instagram Handle above, may need to test */}
                    <div>
                        <input placeholder="Instagram user's URL" type='text' id='instagramURL' /><br />
                        <span>Insert the URL for this Barber's Instagram page. (optional)</span>
                    </div>

                    <div>
                        <input placeholder='Booking URL' type='text' id='bookingURL' /><br />
                        <span>Place the link where customers can schedule appointments with this Barber.</span>
                    </div>

                    <button type='button'>Create</button>
                    <button type='button'>Go Back</button>
                </fieldset>
            </form>
        </section>
    );
};

export default Dashboard;