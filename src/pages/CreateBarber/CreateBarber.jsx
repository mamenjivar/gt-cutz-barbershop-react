import React, { useState, useEffect } from 'react';
import { getDatabase, ref, set, push } from "firebase/database";
import { storage, app } from '../../firebaseConfig';
import { ref as fer, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { useNavigate } from 'react-router-dom';

// styling
import classes from './CreateBarber.module.scss';

// component
import BarberFormFields from '../../components/BarberFormFields/BarberFormFields';

/**
 * CreateBarber page to handle the backend
 * @returns 
 */
const CreateBarber = () => {

    // sends request to create a new barber
    const createBarber = (data) => {
        if(data.profilePicture == null) { // REFACTOR, move to function because will be repeated
            console.log('created barber!');
            const db = getDatabase(app);
            const newDocRef = push(ref(db, "barber"));
            set(newDocRef, {
                name: data.name,
                barberName: data.barberName,
                instagramHandle: data.instagramHandle,
                instagramURL: data.instagramURL,
                bookingURL: data.bookingURL,
                isBarberActive: data.isBarberActive
            }).then(() => {
                alert('new barber has been created! congratulations!');
    
                // TODO: make a modal which opens up, or a banner across top part of page to know that it has been successful
            }).catch((error) => {
                alert("error", error.message);
            });
        } else {
            // upload image to get URL
            const imageRef = fer(storage, `profilePictures/${data.profilePicture.name}`);
            uploadBytes(imageRef, data.profilePicture).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    // push data to DB
                    console.log('created barber!');
                    const db = getDatabase(app);
                    const newDocRef = push(ref(db, "barber"));
                    set(newDocRef, {
                        profilePicture: url,
                        name: data.name,
                        barberName: data.barberName,
                        instagramHandle: data.instagramHandle,
                        instagramURL: data.instagramURL,
                        bookingURL: data.bookingURL,
                        isBarberActive: data.isBarberActive
                    }).then(() => {
                        alert('new barber has been created! congratulations!');
            
                        // TODO: make a modal which opens up, or a banner across top part of page to know that it has been successful
                    }).catch((error) => {
                        alert("error", error.message);
                    });
                })
            });
        }
    }

    // push the data to firebase backend
    const pushData = () => {

    }

    // go back to main CreateBarber page
    // TODO: need to get this navigation link created. possibly the dashboard homepage
    const goBack = () => {
        console.log('go back clicked');
    }

    return (
        <section className={classes.createFormContent}>
            <h1 className={classes.header}>Add a new Barber</h1>

            <BarberFormFields onSubmitForm={createBarber} buttonSubmitText={'Submit'}/>
        </section>
    );
};

export default CreateBarber;