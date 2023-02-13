import React from 'react';
import { Col} from 'react-bootstrap';
import Meta from '../components/Meta';
import EachHotelFacility from '../components/EachhotelFacility';
import { Container } from 'react-bootstrap';
import EachFounder from '../components/EachFounder';
import { useHistory } from 'react-router-dom';
import RoomSearchWithBackground from '../components/RoomSearchWithBackground';


    const HOTEL_FACILITIES = [
        { image: "fa fa-wifi", text:"Parking" },
        { image: "fa fa-floppy-o", text:"Safe" },
        { image: "fa fa-simplybuilt", text:"Swimming Pool" },
        { image: "fa fa-cutlery", text:"Spa" },
        { image: "fa fa-tencent-weibo", text:"Gym" },
        { image: "fa fa-cutlery", text:"Breakfast" },
        { image: "fa fa-building", text:"Workspace" },
        { image: "fa fa-bath", text:"Bath" },
    ]

    const FOUNDERS = [
        { image:"/images/avatar.jpeg",name:'Anurag Dixit', role:'Director', text:"Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved." },
        { image:"/images/avatar.jpeg",name:'Anurag Dixit', role:'Director', text:"Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved." },
        { image:"/images/avatar.jpeg",name:'Anurag Dixit', role:'Director', text:"Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved." },
    ]

    const AboutScreen =  ({ match }) =>{

        const history = useHistory();

        const handleBookNowClick = () =>{
            history.push('/rooms')
        }

        return <div className='container1' >
            <Meta  />
            {/* <img src='/images/bg1.jpeg' alt="" className='carousel-image' /> */}
            <RoomSearchWithBackground  image="url('/images/bg1.jpeg')" />
            
            {/* <DarkVariantCarousel /> */}

            <Container>
           {/* Founders  Container */}
           <section className='trending-rooms-container' >
                <h1 className='home-page-title' >Founders</h1>
                { <>
                <div className="flex-wrap" >
                    {FOUNDERS.map( (founder, i)=>{
                        return <Col key={i} >
                        <EachFounder founder={founder} />
                        </Col>
                    } )}
                </div>
            </>}

            </section>
            {/* Founders Container */}
            </Container>

            {/* Book now section */}
            <section>
                <div className='center-content' >
                    <div className='contain-each-board' >
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
                    {HOTEL_FACILITIES.map((item,i)=>{
                        return <EachHotelFacility key={i} icon={ item.image } text={ item.text } />
                    }) }
                </div>
                
            </section>
            {/* Hotel Facilities */}
 
            </Container>
                    
            
        </div>
    }

    export default AboutScreen;