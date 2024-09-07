import React, { useState, useEffect } from 'react';
import {app} from "../../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";
// import { useNavigate } from 'react-router-dom';

// styling
import classes from './ViewBarbers.module.scss';

/**
 * View list of all barbers in DB
 * @returns 
 */
const ViewBarbers = () => {


    return (
        <section>
            <h1>View All Barbers</h1>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Barber Name</th>
                    <th>Instagram handle</th>
                    <th>Instagram URL</th>
                    <th>Booking URL</th>
                    <th>Is Barber Active?</th>
                </tr>
            </table>
        </section>
    );
};

export default ViewBarbers;