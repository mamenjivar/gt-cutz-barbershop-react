import React, { useState, useEffect } from 'react';
import {app} from "../../firebaseConfig";
import { getDatabase, ref, get, remove } from "firebase/database";
// import { useNavigate } from 'react-router-dom';

// styling
import classes from './ViewBarbers.module.scss';

/**
 * View list of all barbers in DB
 * @returns 
 */
const ViewBarbers = () => {
    let [barberArray, setBarberArray] = useState([]);

    const NO_BARBER_FOUND_MESSAGE = <tr><td colSpan="7">No barbers found</td></tr>;

    // load barber data on page load
    useEffect(() => {

        fetchData();
    }, []);

    const fetchData = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "barber");
        const snapshot = await get(dbRef);
        if(snapshot.exists()) {
            const myData = snapshot.val();
            const temporaryArray = Object.keys(myData).map(myFireId => {
                return {
                    ...myData[myFireId],
                    barberId: myFireId
                }
            });
            setBarberArray(Object.values(temporaryArray));
        } else {
            console.log("couldn't find entries, please add some more");
        }
    }

    // delete a barber; might convert to archiving instead
    const deleteBarber = async (barberId) => {
        const db = getDatabase(app);
        const dbRef = ref(db, "barber/" + barberId);
        await remove(dbRef);
        // fetchData();
    }

    return (
        <section>
            <h1>View All Barbers</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Barber Name</th>
                        <th>Instagram handle</th>
                        <th>Instagram URL</th>
                        <th>Booking URL</th>
                        <th>Is Barber Active?</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {(barberArray.length > 0) ? barberArray.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.barberName}</td>
                            <td>{item.instagramHandle}</td>
                            <td>{item.instagramURL}</td>
                            <td>{item.bookingURL}</td>
                            <td>{item.isBarberActive}</td>
                            <td>
                                <button className={classes.editBarberButton}>Edit</button>
                                <button className={classes.deleteBarberButton} onClick={ () => deleteBarber(item.barberId)}>Delete</button>
                            </td>
                        </tr>
                    )) : NO_BARBER_FOUND_MESSAGE }
                </tbody>
            </table>
        </section>
    );
};

export default ViewBarbers;