import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// styles
import classes from './BarberFormFields.module.scss';


/**
 * componenet to render the form fields
 * @returns
 */
const BarberFormFields = ({ onSubmitForm, data }) => {
    const navigate = useNavigate();

    let [name, setName] = useState('');
    let [barberName, setBarberName] = useState('');
    let [instagramHandle, setInstagramHandle] = useState('');
    let [instagramURL, setInstagramURL] = useState('');
    let [bookingURL, setBookingURL] = useState('');
    let [isBarberActive, setIsBarberActive] = useState('true');
    useLog('isBarberActive', isBarberActive); // testing purposes

    function useLog(name, property) {
        useEffect(() => console.log(name, property), [name, property]);
    }

    // useEffect(() => {
    //     const retrieveData = () => {
    //         if(data) {
    //             setName(data.name);
    //             setBarberName(data.barberName);
    //             setInstagramHandle(data.instagramHandle);
    //             setInstagramURL(data.instagramURL);
    //             setBookingURL(data.bookingURL);
    //             setIsBarberActive(data.isBarberActive);
    //         }
    //     }

    //     retrieveData();
    // }, []);

    // pull form data and push to parent component
    const onFormSubmit = (e) => {
        e.preventDefault();
        onSubmitForm({
            name: name,
            barberName: barberName,
            instagramHandle: instagramHandle,
            instagramURL: instagramURL,
            bookingURL: bookingURL,
            isBarberActive: isBarberActive
        });

        // clear the form when barber data is sent to parent
        setName('');
        setBarberName('');
        setInstagramHandle('');
        setInstagramURL('');
        setBookingURL('');
        setIsBarberActive('true');
    }

    const goBack = () => {
        navigate("/ViewBarbers")
    }
  return (
    <section>
        <div className={classes.createForm}>
            <form>
                <fieldset>
                    <div>
                        <label htmlFor='name'>Name</label><br />
                        <input type='text' id='name' value={name || data.name} onChange={(e) => setName(e.target.value)}/><br />
                        {/* <input type='text' id='name'/><br /> */}
                        <span className={classes.barberFieldDescription}>The name of the Barber. (This won't get displayed on website)</span>
                    </div>

                    <div>
                        <label htmlFor='barberName'>Barber Name</label><br />
                        <input type='text' id='barberName' value={barberName || data.barberName} onChange={(e) => setBarberName(e.target.value)}/><br />
                        {/* <input type='text' id='barberName'/><br /> */}
                        <span className={classes.barberFieldDescription}>Nickname of barber that will get displayed in the website.</span>
                    </div>

                    <div>
                        <label htmlFor='instagramHandle'>Instagram Handle</label><br />
                        <input type='text' id='instagramHandle' value={instagramHandle || data.instagramHandle} onChange={(e) => setInstagramHandle(e.target.value)}/><br />
                        {/* <input type='text' id='instagramHandle'/><br /> */}
                        <span className={classes.barberFieldDescription}>The username for this Barber that appears on Instagram. (optional)</span>
                    </div>

                    {/* This field can be constructed using the Instagram Handle above, may need to test */}
                    <div>
                        <label htmlFor='instagramURL'>Instagram URL</label><br />
                        <input type='text' id='instagramURL' value={instagramURL || data.instagramHandle} onChange={(e) => setInstagramURL(e.target.value)}/><br />
                        {/* <input type='text' id='instagramURL'/><br /> */}
                        <span className={classes.barberFieldDescription}>Insert the URL for this Barber's Instagram page. (optional)</span>
                    </div>

                    <div>
                        <label htmlFor='bookingURL'>Booking URL</label><br />
                        <input type='text' id='bookingURL' value={bookingURL || data.bookingURL} onChange={(e) => setBookingURL(e.target.value)}/><br />
                        {/* <input type='text' id='bookingURL'/><br /> */}
                        <span className={classes.barberFieldDescription}>Place the link where customers can schedule appointments with this Barber.</span>
                    </div>

                    <div>
                        <label>Is Barber Active?</label><br />
                        <input type="radio" id="yes" name="isActive" value="true" checked={isBarberActive === "true"} onChange={(e) => setIsBarberActive(e.target.value)}/>
                        {/* <input type="radio" id="yes" name="isActive"/> */}
                        <label htmlFor='yes'>Yes</label><br />

                        <input type="radio" id="no" name="isActive" value="false" checked={isBarberActive === "false"} onChange={(e) => setIsBarberActive(e.target.value)}/>
                        {/* <input type="radio" id="no" name="isActive"/> */}
                        <label htmlFor='no'>No</label><br />
                        <span className={classes.barberFieldDescription}>Yes will make the barber show live.</span>
                    </div>

                    <button type='button' onClick={onFormSubmit}>Create</button>
                    {/* <button type='button'>Create</button> */}
                    <button type='button' onClick={goBack}>Go Back</button>
                    {/* <button type='button'>Go Back</button> */}
                </fieldset>
            </form>
        </div>
    </section>
  );
};

export default BarberFormFields;