import React, { useState, useEffect } from 'react';
import {app} from "../../firebaseConfig";
import { getDatabase, ref, set, get } from "firebase/database";
import { useParams, useNavigate } from 'react-router-dom';

// styling
import classes from './UpdateBarber.module.scss';

// component
import BarberFormFields from '../../components/BarberFormFields/BarberFormFields';

/**
 * UpdateBarber page to handle the backend
 * @returns 
 */
const UpdateBarber = () => {
    let [barberData, setBarberData] = useState({})
    const { firebaseId } = useParams();
    const navigate = useNavigate();

    // let [name, setName] = useState('');
    // let [barberName, setBarberName] = useState('');
    // let [instagramHandle, setInstagramHandle] = useState('');
    // let [instagramURL, setInstagramURL] = useState('');
    // let [bookingURL, setBookingURL] = useState('');
    // let [isBarberActive, setIsBarberActive] = useState('true');
    // useLog('isBarberActive', isBarberActive); // testing purposes

    // go back to main UpdateBarber page
    const goBack = () => {
        navigate("/ViewBarbers")
    }

    // function useLog(name, property) {
    //     useEffect(() => console.log(name, property), [name, property]);
    // }

    useEffect(() => {
        const fetchData = async () => {
            const db = getDatabase(app);
            const dbRef = ref(db, "barber/" + firebaseId);
            const snapshot = await get(dbRef);
            if(snapshot.exists()) {
                const targetObject = snapshot.val();
                setBarberData({
                    name: targetObject.name,
                    barberName: targetObject.barberName,
                    instagramHandle: targetObject.instagramHandle,
                    instagramURL: targetObject.instagramURL,
                    bookingURL: targetObject.bookingURL,
                    isBarberActive: targetObject.isBarberActive
                });
                // setName(targetObject.name);
                // setBarberName(targetObject.barberName);
                // setInstagramHandle(targetObject.instagramHandle);
                // setInstagramURL(targetObject.instagramURL);
                // setBookingURL(targetObject.bookingURL);
                // setIsBarberActive(targetObject.isBarberActive);
            } else {
                alert('error');
            }
        }
        fetchData();
    }, [firebaseId])

    const overwriteData = async (data) => {
        const db = getDatabase(app);
        const newDocRef = ref(db, "barber/" + firebaseId);
        set(newDocRef, {
            name: data.name,
            barberName: data.barberName,
            instagramHandle: data.instagramHandle,
            instagramURL: data.instagramURL,
            bookingURL: data.bookingURL,
            isBarberActive: data.isBarberActive
        }).then(() => {
            alert("data saved successfully");
        }).catch((error) => {
            alert("error: ", error.message);
        })
    }

    return (
        <section>
            <h1 className={classes.header}>Update Barber</h1>

            {/* <div className={classes.createForm}>
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

                        <button type='button' onClick={overwriteData}>Update</button>
                        <button type='button' onClick={goBack}>Go Back</button>
                    </fieldset>
                </form>
            </div> */}
            <BarberFormFields onSubmitForm={overwriteData} data={barberData}/>
        </section>
    );
};

export default UpdateBarber;