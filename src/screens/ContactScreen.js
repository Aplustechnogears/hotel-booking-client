import React, { useState } from 'react';
import Meta from '../components/Meta';
import EachHotelFacility from '../components/EachhotelFacility';
import { Container } from 'react-bootstrap';
import {  Form, Button } from 'react-bootstrap';

const HOTEL_FACILITIES = [
    { image: "fa fa-facebook", text: "Facebook" },
    { image: "fa fa-twitter", text: "Twitter" },
    { image: "fa fa-instagram", text: "Instagram" },
    { image: "fa fa-youtube", text: "Youtube" },
]

const ContactScreen = () => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [message, setMessage] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    return <div className='container1' >
        <Meta />
        <img src='/images/bg1.jpeg' alt="" className='carousel-image' />
        {/* <DarkVariantCarousel /> */}

        <Container>


            {/* Make Contact Form  */}
            <section className='form-container' >

                <h1 className='home-page-title' >Contact US</h1>

                    <Form onSubmit={handleFormSubmit} >
                        <Form.Group controlId="email" >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="email" value={name}
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


                        <Button type="submit" variant="primary" > Submit</Button>
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
            <iframe title="map" className="map-iframe"  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d19905.696399556287!2d-0.3007084089960577!3d51.417531259591925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s2334+Peterson+Street+Kingston+UK+London+H14D!5e0!3m2!1sen!2s!4v1546697086219" ></iframe>
        </section>
        {/* Map */}


        <Container>
        <section>
            <h1 className='home-page-title' >Our Socials</h1>

            <div className='contain-facility' >
                {HOTEL_FACILITIES.map((item,i)=>{
                    return <EachHotelFacility key={i} icon={ item.image } text={ item.text } />
                }) }
            </div>
            
        </section>
        {/* Hotel Facilities */}

        </Container>


    </div>
}

export default ContactScreen;