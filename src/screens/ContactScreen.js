import React, { useState } from 'react';
import Meta from '../components/Meta';
import EachHotelFacility from '../components/EachhotelFacility';
import { Container } from 'react-bootstrap';
import {  Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { emailValidation } from '../utils/helpers';
import Message from '../components/Message';
import Loader from '../components/Loader';
import RoomSearchWithBackground from '../components/RoomSearchWithBackground';

const HOTEL_FACILITIES = [
    { image: "fa fa-facebook", text: "Facebook", link:"https://www.facebook.com/profile.php?id=100095253761630" },
    { image: "fa fa-twitter", text: "Twitter", link:"https://twitter.com/GangaRadisson?t=skaPnzvkznnhD4XIQ_Evzw&s=08" },
    { image: "fa fa-instagram", text: "Instagram", link:"https://instagram.com/ganga_radisson?igshid=MzRlODBiNWFlZA==" },
    { image: "fa fa-youtube", text: "Youtube", link:"https://youtube.com/@GangaRadisson" },
]

const ContactScreen = () => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(''); 

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const isEmailValid = emailValidation(email);
        if( name.length && isEmailValid.isValid && message.length ){
            setError('');
            setLoading(true)
            try {

                const config = {
                    headers:{
                        'Content-Type':'application/json'
                    }
                }
        
               const  response = await axios.post('https://cyan-tough-raven.cyclic.app/api/users/contact', { email, name, message, city }, config);        
                console.log('response',response.data.message);
                setSuccess(response.data.message)
                setError('');

            } catch (error) {
                console.log('error',error);
             setError(error?.message);   
            } finally{
                setLoading(false);
            }
    
        }else{
            setError("Inpur Fields are not valid");
            setSuccess('');    
        }
    }

    return <div className='container1' >
        <Meta />
        <RoomSearchWithBackground 
        showFilters={false}
        title="Contact Us"
        image="linear-gradient(0deg,rgba(0,0,0, 0.4), rgba(0,0,0,0.75)),url('/images/bg1.jpeg')" />

        {/* <img src='/images/bg1.jpeg' alt="" className='carousel-image' /> */}
        {/* <DarkVariantCarousel /> */}

        <Container>


            {/* Make Contact Form  */}
            <section className='form-container' >

                <h1 className='home-page-title' >Contact US</h1>

                    { error.length ? <Message variant="danger" > {error} </Message> : null }
                    { success.length ? <Message variant="success" > {success} </Message> : null }
                    <Form onSubmit={handleFormSubmit} >
                        <Form.Group controlId="email" >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text" value={name}
                                placeholder="Name" onChange={e => setName(e.target.value)} >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="email" >
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email" value={email}
                                placeholder="Email" onChange={e => setEmail(e.target.value)} >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="password" >
                            <Form.Label>city</Form.Label>
                            <Form.Control
                                type="text" value={city}
                                placeholder="City" onChange={e => setCity(e.target.value)} >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="password" >
                            <Form.Label>Message</Form.Label>
                            <div>
                                <textarea value={message} onChange={e => setMessage(e.target.value)} rows={10} placeholder="Message" className="textarea" ></textarea>
                            </div>
                        </Form.Group>

                        { loading ? <Loader /> : <Button type="submit" variant="primary" > Submit</Button> }
                        
                    </Form>
            </section>
            {/* Make Contact Form  */}

        </Container>

        {/* Book now section */}
        {/* <section>
            <div className='center-content' >
                <div className='contain-each-board' >
                    <h4 className='banner-title' > Get Directions.</h4>
                    <button className='banner-btn' onClick={handleBookNowClick} >Book Now</button>
                </div>
            </div>
        </section> */}
        {/* Book now section */}

        {/* Hotel Facilities */}

        {/* Map */}
        <section className='map-container' >
            <iframe title="map" className="map-iframe"  src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6911.402960944886!2d78.183088!3d29.988008000000004!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDU5JzE2LjgiTiA3OMKwMTAnNTkuMSJF!5e0!3m2!1sen!2sus!4v1690541176786!5m2!1sen!2sus"  ></iframe>    
        </section>
        {/* Map */}


        <Container>
        <section>
            <h1 className='home-page-title' >Our Socials</h1>

            <div className='contain-facility' >
                {HOTEL_FACILITIES.map((item,i)=>{
                    return <EachHotelFacility key={i} icon={ item.image } text={ item.text } link={ item.link } />
                }) }
            </div>
            
        </section>
        {/* Hotel Facilities */}

        </Container>


    </div>
}

export default ContactScreen;