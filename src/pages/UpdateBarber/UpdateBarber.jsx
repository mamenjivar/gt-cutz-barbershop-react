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
    let [barberData, setBarberData] = useState({
        profilePicture: '',
        name: '',
        barberName: '',
        instagramHandle: '',
        instagramURL: '',
        bookingURL: '',
        isBarberActive: ''
    })
    const { firebaseId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const db = getDatabase(app);
            const dbRef = ref(db, "barber/" + firebaseId);
            const snapshot = await get(dbRef);
            if(snapshot.exists()) {
                const targetObject = snapshot.val();
                setBarberData({
                    profilePicture: targetObject.profilePicture,
                    name: targetObject.name,
                    barberName: targetObject.barberName,
                    instagramHandle: targetObject.instagramHandle,
                    instagramURL: targetObject.instagramURL,
                    bookingURL: targetObject.bookingURL,
                    isBarberActive: targetObject.isBarberActive
                });

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
            profilePicture: data.profilePicture, // needs refactoring?? also needs to send call to storage
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
        <section className={classes.updateBarberContainer}>
            <h1 className={classes.header}>Update Barber</h1>
            <BarberFormFields onSubmitForm={overwriteData} data={barberData} buttonSubmitText={'Update'}/>
        </section>
    );
};

export default UpdateBarber;