import React, { useState, useEffect } from 'react';
import {app} from "../../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";
// import { useNavigate } from 'react-router-dom';

// styling
import classes from './CreateBarber.module.scss';

/**
 * CreateBarber page to handle the backend
 * @returns 
 */
const CreateBarber = () => {
    let [name, setName] = useState('');
    let [barberName, setBarberName] = useState('');
    let [instagramHandle, setInstagramHandle] = useState('');
    let [instagramURL, setInstagramURL] = useState('');
    let [bookingURL, setBookingURL] = useState('');
    let [isBarberActive, setIsBarberActive] = useState('true');
    useLog('isBarberActive', isBarberActive); // testing purposes

    // sends request to create a new barber
    const createBarber = () => {
        console.log('created barber!');
        const db = getDatabase(app);
        const newDocRef = push(ref(db, "barber"));
        set(newDocRef, {
            name: name,
            barberName: barberName,
            instagramHandle: instagramHandle,
            instagramURL: instagramURL,
            bookingURL: bookingURL,
            isBarberActive: isBarberActive
        }).then(() => {
            alert('new barber has been created! congratulations!');

            // clear the form when new barber is created
            setName('');
            setBarberName('');
            setInstagramHandle('');
            setInstagramURL('');
            setBookingURL('');
            setIsBarberActive('true');

            // TODO: make a modal which opens up, or a banner across top part of page to know that it has been successful
        }).catch((error) => {
            alert("error", error.message);
        })
    }

    // go back to main CreateBarber page
    const goBack = () => {
        console.log('go back clicked');
    }

    function useLog(name, property) {
        useEffect(() => console.log(name, property), [name, property]);
      }

    return (
        <section >
            <h1 className={classes.header}>Add a new Barber</h1>

            <div className={classes.createForm}>
                <form>
                    <fieldset>
                        <div>
                            <label htmlFor='name'>Name</label><br />
                            <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)}/><br />
                            <span className={classes.barberFieldDescription}>The name of the Barber. (This won't get displayed on website)</span>
                        </div>

                        <div>
                            <label htmlFor='barberName'>Barber Name</label><br />
                            <input type='text' id='barberName' value={barberName} onChange={(e) => setBarberName(e.target.value)}/><br />
                            <span className={classes.barberFieldDescription}>Nickname of barber that will get displayed in the website.</span>
                        </div>

                        <div>
                            <label htmlFor='instagramHandle'>Instagram Handle</label><br />
                            <input type='text' id='instagramHandle' value={instagramHandle} onChange={(e) => setInstagramHandle(e.target.value)}/><br />
                            <span className={classes.barberFieldDescription}>The username for this Barber that appears on Instagram. (optional)</span>
                        </div>

                        {/* This field can be constructed using the Instagram Handle above, may need to test */}
                        <div>
                            <label htmlFor='instagramURL'>Instagram URL</label><br />
                            <input type='text' id='instagramURL' value={instagramURL} onChange={(e) => setInstagramURL(e.target.value)}/><br />
                            <span className={classes.barberFieldDescription}>Insert the URL for this Barber's Instagram page. (optional)</span>
                        </div>

                        <div>
                            <label htmlFor='bookingURL'>Booking URL</label><br />
                            <input type='text' id='bookingURL' value={bookingURL} onChange={(e) => setBookingURL(e.target.value)}/><br />
                            <span className={classes.barberFieldDescription}>Place the link where customers can schedule appointments with this Barber.</span>
                        </div>

                        <div>
                            <label>Is Barber Active?</label><br />
                            <input type="radio" id="yes" name="isActive" value="true" checked={isBarberActive === "true"} onChange={(e) => setIsBarberActive(e.target.value)}/>
                            <label htmlFor='yes'>Yes</label><br />

                            <input type="radio" id="no" name="isActive" value="false" checked={isBarberActive === "false"} onChange={(e) => setIsBarberActive(e.target.value)}/>
                            <label htmlFor='no'>No</label><br />
                            <span className={classes.barberFieldDescription}>Yes will make the barber show live.</span>
                        </div>

                        <button type='button' onClick={createBarber}>Create</button>
                        <button type='button' onClick={goBack}>Go Back</button>
                    </fieldset>
                </form>
            </div>
        </section>
    );
};

export default CreateBarber;