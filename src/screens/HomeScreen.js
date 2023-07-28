import React,{ useEffect} from 'react';
import { Col} from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Meta from '../components/Meta';
import { useDispatch, useSelector } from 'react-redux';
import { listPackages, listProducts } from '../actions/productActions';
import EachHotelFacility from '../components/EachhotelFacility';
import { Container } from 'react-bootstrap';
import RoomSearchWithBackground from '../components/RoomSearchWithBackground';
import { useHistory } from 'react-router-dom';
import EachPackage from '../components/EachPackage';


    const HOTEL_FACILITIES = [
        { image: "fa fa-car", text:"Parking" },
        { image: "fa fa-floppy-o", text:"Safe" },
        // { image: "fa fa-simplybuilt", text:"Swimming Pool" },
        // { image: "fa fa-cutlery", text:"Spa" },
        // { image: "fa fa-tencent-weibo", text:"Gym" },
        { image: "fa fa-cutlery", text:"Food" },
        { image: "fa fa-building", text:"Workspace" },
        // { image: "fa fa-bath", text:"Bath" },
    ]

    const HomeScreen =  ({ match }) =>{

        const dispatch = useDispatch()
        const history = useHistory();
        const keyword = match.params.keyword 
        const pageNumber = match.params.pageNumber || 1

        // const [products, setProducts]  = useState([]);

        const productList = useSelector(state=> state.productList )
        const { products, error, loading } = productList

        const packageList = useSelector(state=> state.packageList )
        
        const handleBookNowClick = () =>{
            history.push('/rooms')
        }

        useEffect(()=>{
            dispatch(listProducts( keyword, pageNumber ));
            dispatch( listPackages('',pageNumber) )


        },[dispatch, keyword, pageNumber]);

        return <div className='container1' >
            <Meta  />
            <RoomSearchWithBackground 
                image="linear-gradient(0deg,rgba(0,0,0, 0.4), rgba(0,0,0,0.75)),url('/images/bg3.jpeg')" 
                heroPara='Explore new experience with GangaRadisson'
            />

            <Container>
            {/* rooms section 1 */}
            <section className="divide-into-2" >
                <div className='margin1rem' >
                    <div className='flex margin1rem' >
                        {/* <div className='flex' >
                            <h1 className='star-number' >5</h1>
                            <h5 className='star-small-number' >Stars</h5>
                        </div>
                        <div className='flex' >
                            <h1 className='star-number' >25</h1>
                            <h5 className='star-small-number' >Rooms</h5>
                        </div> */}

                    </div>

                    <div>
                        <p className='large-text' >Our hotel is located in the city of Hari ki nagri(Haridwar). A five stars lifestyle surrounded by the forest.</p>
                    </div>
                </div>
                <div className="center-content" >
                    <img src="/images/hotel1.jpeg" className="half-radius-image" alt="" />
                </div>
            </section>
            {/* rooms section 1 */}

           {/* Trending Rooms Container */}
           <section className='trending-rooms-container' >
                <h1 className='home-page-title' >Trending Rooms</h1>
                <p className='sub-heading-text' >A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of soul.</p>
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
                <button className='more-room-btn' onClick={()=> history.push('/rooms') } >
                    View All Rooms

                </button>

            </div>
            </section>
            {/* Trending Rooms Container */}

            {/* Hotel Facilities */}
            <section>
                <h1 className='home-page-title' >Hotel Facilities</h1>
                <p className='sub-heading-text' >A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of soul.</p>

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
                    <div className='contain-each-board1' >
                        <h4 className='banner-title' > Choose from a wide range.</h4>
                        <button className='banner-btn' onClick={handleBookNowClick} >Book Now</button>
                    </div>
                </div>
            </section>
            {/* Book now section */}




            <Container>
                {/* Visit our facilities section */}
                {/* <section>
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



                </section> */}
                {/* Visit our facilities section */}


                {/* Our Packages */}
                <section>
                    <h1 className='home-page-title' >Trending Packages</h1>

                    { loading? <Loader />: error ? <Message>{error}</Message>
                        : <>
                        <div className="flex-wrap" >
                            {(packageList?.products || []).slice(0,3).map( (product)=>{
                                return <Col key={product._id} >
                                <EachPackage product={product} />
                                </Col>
                            } )}
                        </div>
                    </>}

                    <div className="center-content" >
                        <button className='more-room-btn' onClick={()=> history.push('/packages') }>
                            View All packages

                        </button>
                    </div>
                </section>
            </Container>
            {/* Our Packages */}
        
            
        </div>
    }

    export default HomeScreen;