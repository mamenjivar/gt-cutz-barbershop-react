import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// styles
import classes from './BarberFormFields.module.scss';

/**
 * componenet to render the form fields
 * @returns
 */
const BarberFormFields = ({ onSubmitForm, data, buttonSubmitText }) => {
    const navigate = useNavigate();

    let [profilePicture, setProfilePicture] = useState(null);
    let [profilePicturePreview, setProfilePicturePreview] = useState(null);
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

    useEffect(() => {
        setProfilePicture(data ? data.profilePicture : '');
        setName(data ? data.name : '');
        setBarberName(data ? data.barberName : '');
        setInstagramHandle(data ? data.instagramHandle : '');
        setInstagramURL(data ? data.instagramURL : '');
        setBookingURL(data ? data.bookingURL : '');
        setIsBarberActive(data ? data.isBarberActive : 'true');
    }, [data])

    // pull form data and push to parent component
    const onFormSubmit = (e) => {
        e.preventDefault();
        onSubmitForm({
            profilePicture: profilePicture,
            name: name,
            barberName: barberName,
            instagramHandle: instagramHandle,
            instagramURL: instagramURL,
            bookingURL: bookingURL,
            isBarberActive: isBarberActive
        });

        // clear the form when barber data is sent to parent
        setProfilePicture(null);
        setName('');
        setBarberName('');
        setInstagramHandle('');
        setInstagramURL('');
        setBookingURL('');
        setIsBarberActive('true');
    }

    // When user is uploading a file
    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if(file) {
            setProfilePicture(file);

            // create preview URL
            const reader = new FileReader();
            reader.onload = () => {
                setProfilePicturePreview(reader.result); // sets image preview
            };
            reader.readAsDataURL(file);
        }
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
                        <label htmlFor='profilePicture'>Profile Picture</label><br />
                        <img src={profilePicture} alt='The barber'/> {/* This has to work both ways; when first uploading picture and then when editing picture too */}
                        {console.log('profile picture link: ' + profilePicture)}
                        <input type="file" accept='image/*' id="profilePicture" onChange={handleFileChange}  /><br />
                        <span className={classes.barberFieldDescription}>This photo will appear on the public barber profile.</span>
                    </div>

                    <div>
                        <label htmlFor='name'>Name</label><br />
                        <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)}/><br />
                        <span className={classes.barberFieldDescription}>The name of the Barber. (This won't get displayed on website)</span>
                    </div>

                    <div>
                        <label htmlFor='barberName'>Barber Name</label><br />
                        <input type='text' id='barberName' value={barberName} onChange={(e) => setBarberName(e.target.value)}/><br />
                        <span className={classes.barberFieldDescription}>Enter the name that would be displayed in the barber profile.</span>
                    </div>

                    <div>
                        <label htmlFor='instagramHandle'>Instagram Handle</label><br />
                        <input type='text' id='instagramHandle' value={instagramHandle} onChange={(e) => setInstagramHandle(e.target.value)}/><br />
                        <span className={classes.barberFieldDescription}>Include the Instagram username to showcase their work.</span>
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
                        <span className={classes.barberFieldDescription}>Enter the link where customers can schedule appointments with this barber.</span>
                    </div>

                    <div>
                        <label>Is Barber Active?</label><br />
                        <input type="radio" id="yes" name="isActive" value="true" checked={isBarberActive === "true"} onChange={(e) => setIsBarberActive(e.target.value)}/>
                        <label htmlFor='yes'>Yes</label><br />

                        <input type="radio" id="no" name="isActive" value="false" checked={isBarberActive === "false"} onChange={(e) => setIsBarberActive(e.target.value)}/>
                        <label htmlFor='no'>No</label><br />
                        <span className={classes.barberFieldDescription}>Yes will make the barber show live.</span>
                    </div>

                    <button type='button' onClick={onFormSubmit}>{buttonSubmitText}</button>
                    <button type='button' onClick={goBack}>Go Back</button>
                </fieldset>
            </form>
        </div>
    </section>
  );
};

export default BarberFormFields;