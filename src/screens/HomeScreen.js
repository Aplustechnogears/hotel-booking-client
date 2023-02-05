import React,{ useEffect} from 'react';
import { Col} from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Meta from '../components/Meta';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import EachHotelFacility from '../components/EachhotelFacility';
import { Container } from 'react-bootstrap';
import RoomSearchWithBackground from '../components/RoomSearchWithBackground';
import { useHistory } from 'react-router-dom';
import EachPackage from '../components/EachPackage';


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

    const HomeScreen =  ({ match }) =>{

        const dispatch = useDispatch()
        const history = useHistory();
        const keyword = match.params.keyword 
        const pageNumber = match.params.pageNumber || 1

        // const [products, setProducts]  = useState([]);

        const productList = useSelector(state=> state.productList )
        const { products, error, loading } = productList

        const handleBookNowClick = () =>{
            history.push('/rooms')
        }

        useEffect(()=>{
            dispatch(listProducts( keyword, pageNumber ));

        },[dispatch, keyword, pageNumber]);

        return <div className='container1' >
            <Meta  />
            {/* <img src='/images/hero.jpg' alt="" className='hero-image' /> */}
            <RoomSearchWithBackground />

            <Container>
           {/* Trending Rooms Container */}
           <section className='trending-rooms-container' >
                <h1 className='home-page-title' >Trending Rooms</h1>
                { loading? <Loader />: error ? <Message>{error}</Message>
                : <>
                <div className="flex-wrap" >
                    {products.slice(0,3).map( (product)=>{
                        return <Col key={product._id} >
                        <Product product={product} />
                        </Col>
                    } )}
                </div>
            </>}

            <div className="center-content" >
                <button className='more-room-btn' >
                    View All Rooms

                </button>

            </div>
            </section>
            {/* Trending Rooms Container */}

            {/* Hotel Facilities */}
            <section>
                <h1 className='home-page-title' >Hotel Facilities</h1>

                <div className='contain-facility' >
                    {HOTEL_FACILITIES.map((item,i)=>{
                        return <EachHotelFacility key={i} icon={ item.image } text={ item.text } />
                    }) }
                </div>
                
            </section>
            {/* Hotel Facilities */}


            
 
            </Container>
            {/* Book now section */}
            <section>
                <div className='center-content' >
                    <div className='contain-each-board' >
                        <h4 className='banner-title' > Choose from a wide range.</h4>
                        <button className='banner-btn' onClick={handleBookNowClick} >Book Now</button>
                    </div>
                </div>
            </section>
            {/* Book now section */}


            {/* Our Packages */}
            <Container>
                <section>
                    <h1 className='home-page-title' >Trending Packages</h1>

                    { loading? <Loader />: error ? <Message>{error}</Message>
                        : <>
                        <div className="flex-wrap" >
                            {products.slice(0,3).map( (product)=>{
                                return <Col key={product._id} >
                                <EachPackage product={product} />
                                </Col>
                            } )}
                        </div>
                    </>}

                    <div className="center-content" >
                        <button className='more-room-btn' >
                            View All packages

                        </button>
                    </div>
                </section>
            </Container>
            {/* Our Packages */}
        
            
        </div>
    }

    export default HomeScreen;