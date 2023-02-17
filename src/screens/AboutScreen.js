import React from 'react';
import { Col } from 'react-bootstrap';
import Meta from '../components/Meta';
import EachHotelFacility from '../components/EachhotelFacility';
import { Container } from 'react-bootstrap';
import EachFounder from '../components/EachFounder';
import { useHistory } from 'react-router-dom';
import RoomSearchWithBackground from '../components/RoomSearchWithBackground';


const HOTEL_FACILITIES = [
    { image: "fa fa-wifi", text: "Parking" },
    { image: "fa fa-floppy-o", text: "Safe" },
    { image: "fa fa-simplybuilt", text: "Swimming Pool" },
    { image: "fa fa-cutlery", text: "Spa" },
    { image: "fa fa-tencent-weibo", text: "Gym" },
    { image: "fa fa-cutlery", text: "Breakfast" },
    { image: "fa fa-building", text: "Workspace" },
    { image: "fa fa-bath", text: "Bath" },
]

const FOUNDERS = [
    { image: "/images/avatar.jpeg", name: 'Anurag Dixit', role: 'Director', text: "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved." },
    { image: "/images/avatar.jpeg", name: 'Anurag Dixit', role: 'Director', text: "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved." },
    { image: "/images/avatar.jpeg", name: 'Anurag Dixit', role: 'Director', text: "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved." },
]

const AboutScreen = ({ match }) => {

    const history = useHistory();

    const handleBookNowClick = () => {
        history.push('/rooms')
    }

    return <div className='container1' >
        <Meta />
        {/* <img src='/images/bg1.jpeg' alt="" className='carousel-image' /> */}
        <RoomSearchWithBackground
            showFilters={false}
            title='About Us' image="linear-gradient(0deg,rgba(0,0,0, 0.4), rgba(0,0,0,0.75)),url('/images/bg2.jpeg')" />

        {/* <DarkVariantCarousel /> */}

        <Container>

            {/* Visit our facilities section */}
            <section>
                <h1 className='home-page-title' >Visit our facilities</h1>
                <p className='sub-heading-text' >A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of soul.</p>

                <div className="home-facilities-section" >
                    <div className='flex-justify-center' >
                        <img src="/images/chef.jpeg" className='home-facility-image' alt="" />
                    </div>
                    <div className='home-facility-texts-container' >
                        <h4 className='home-facility-text-header' >3 Michelin Stars Restaurant, Vézère</h4>
                        <p className='home-facility-text-para' > A brasserie inspired by French cuisine, a fresh and modern place to visit and enjoy dishes always handmade of the best ingredients of the season.</p>
                    </div>
                </div>


                <div className="home-facilities-section"  >
                    <div className='home-facility-texts-container' >
                        <h4 className='home-facility-text-header' >The Penthouse Bar, An iconic american bar</h4>
                        <p className='home-facility-text-para' > A brasserie inspired by French cuisine, a fresh and modern place to visit and enjoy dishes always handmade of the best ingredients of the season.</p>
                    </div>
                    <div className='flex-justify-center' >
                        <img src="/images/hero.jpg" className='home-facility-image' alt="" />
                    </div>

                </div>

                <div className="home-facilities-section" >
                    <div className='flex-justify-center' >
                        <img src="/images/bg4.jpeg" className='home-facility-image' alt="" />
                    </div>
                    <div className='home-facility-texts-container' >
                        <h4 className='home-facility-text-header' >The Spa. Refresh Yourself</h4>
                        <p className='home-facility-text-para' > A brasserie inspired by French cuisine, a fresh and modern place to visit and enjoy dishes always handmade of the best ingredients of the season.</p>
                    </div>
                </div>



            </section>
            {/* Visit our facilities section */}

            {/* Founders  Container */}
            <section className='trending-rooms-container' >
                <h1 className='home-page-title' >Founders</h1>
                {<>
                    <div className="flex-wrap" >
                        {FOUNDERS.map((founder, i) => {
                            return <Col key={i} >
                                <EachFounder founder={founder} />
                            </Col>
                        })}
                    </div>
                </>}

            </section>
            {/* Founders Container */}
        </Container>

        {/* Book now section */}
        <section>
                <div className='center-content1' >
                    <div className='contain-each-board-small' >
                        <h4 className='banner-title' > luxury rooms.</h4>
                        <button className='banner-btn' onClick={handleBookNowClick} >Book Now</button>
                    </div>
                </div>
            </section>
        {/* Book now section */}

        {/* Hotel Facilities */}


        <Container>
            <section>
                <h1 className='home-page-title' >Our Achievements</h1>

                <div className='contain-facility' >
                    {HOTEL_FACILITIES.map((item, i) => {
                        return <EachHotelFacility key={i} icon={item.image} text={item.text} />
                    })}
                </div>

            </section>
            {/* Hotel Facilities */}

        </Container>


    </div>
}

export default AboutScreen;