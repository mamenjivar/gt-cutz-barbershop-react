import React, { useState, useEffect } from 'react';
import {app} from "../../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";
// import { useNavigate } from 'react-router-dom';

// styling
import classes from './ViewBarbers.module.scss';

/**
 * View list of all barbers in DB
 * @returns 
 */
const ViewBarbers = () => {
    let [barberArray, setBarberArray] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const db = getDatabase(app);
            const dbRef = ref(db, "barber");
            const snapshot = await get(dbRef);
            if(snapshot.exists()) {
                setBarberArray(Object.values(snapshot.val()));
            } else {
                alert("error");
            }
        }

        fetchData();
    }, []);

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
                    </tr>
                </thead>
                <tbody>
                    {barberArray.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.barberName}</td>
                            <td>{item.instagramHandle}</td>
                            <td>{item.instagramURL}</td>
                            <td>{item.bookingURL}</td>
                            <td>{item.isBarberActive}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default ViewBarbers;