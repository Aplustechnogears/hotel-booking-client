import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Meta from '../components/Meta';
import { useDispatch, useSelector } from 'react-redux';
import { Col,Container } from 'react-bootstrap';
import { listProductDetails, listProducts } from '../actions/productActions';
import RoomSearchWithBackground from '../components/RoomSearchWithBackground';
import Product from '../components/Product';



const ProductScreen = ({ history, match }) => {

    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.productDetails);
    const productList = useSelector(state=> state.productList )
    const { products } = productList;
    const { error, product, loading } = productDetails;
    const [roomsCount, setRoomsCount] = useState(0);
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {

        dispatch(listProductDetails(match.params.id))
        dispatch(listProducts( ));

    }, [dispatch, match]);

    const HOTEL_AMENETIES = [
        { icon: 'fa fa-television', text:'TV' },
        { icon: 'fa fa-wifi', text:'Free Wifi' },
        { icon: 'fa fa-archive', text:'Safe' },
        { icon: 'fa fa-shower', text:'Air Conditioning' },
        { icon: 'fa fa-facebook', text:'Facebook' },
        { icon: 'fa fa-fire', text:'Heater' },
        { icon: 'fa fa-phone', text:'Unlimited Phone' },
        { icon: 'fa fa-deaf', text:'Dryer' },
    ]

    const handleBookRoom = () => {
        if( !(parseInt(roomsCount) >= 1) ){
            setErrMsg("Rooms Count must be greater than 0");
            return;
        }
        if( !checkInDate.length  ){
            setErrMsg("Check In date is required!");
            return;
        }
        if( !checkOutDate.length  ){
            setErrMsg("Check Out date is required!");
            return;
        }
        const checkInTimeStamp = new Date(checkInDate).getTime();
        const checkOutTimeStamp = new Date(checkOutDate).getTime();
        if( checkInTimeStamp>=checkOutTimeStamp ){
            setErrMsg("Check out date must be greater than Check in date.")
            return;
        }

        setErrMsg('');
        if( parseInt(roomsCount)>=1){
            history.push(`/cart/${match.params.id}?qty=${roomsCount}&checkInDate=${checkInTimeStamp}&checkOutDate=${checkOutTimeStamp}`)
        }
     }

     console.log('product',product);

    return <div>
        {loading ? <Loader /> : error ? <Message variant="danger" >{error}</Message>
            : <>
                <Meta title={product.name} />
                <RoomSearchWithBackground
                    height="75vh"
                    showFilters={false}
                    title="Deluxe Suite Room"
                    image="linear-gradient(0deg,rgba(0,0,0, 0.4), rgba(0,0,0,0.75)),url('/images/bg2.jpeg')" />

                <Container>
                    <Link className="btn btn-light my-3" to="/" >Go back</Link>

                    <section className="each-room-head" >
                        <div>
                            <img src={product.image} alt="" className='each-room-banner' />
                            <div className='each-room-price-container' >
                                <h2 className='each-room-name' >{product.name}</h2>
                                <p className='each-room-price' >From {product.price}$ Per night</p>
                            </div>
                            <div className='each-room-description-container' >
                                <h5>Description</h5>
                                <p className='each-room-description' >{product.description}</p>
                            </div>

                            {/* Hotel Amenities */}

                            <section style={{marginTop:"5rem"}} >
                            <h5 className='each-roomtitle' >Hotel Ameneties</h5>
                            <div className='each-room-amaneties'>
                                {HOTEL_AMENETIES.map((item, i)=>{
                                    return <div key={ i } className="each-amanity" >
                                        <i className={`${item.icon} icon`} ></i>
                                        <p className='each-room-description' style={{marginLeft:'2rem', fontWeight:'500'}} >{item.text}</p>
                                    </div>
                                }) }

                            </div>
                            </section>
                            {/* Hotel Amenities */}
                        </div>
                        <div>
                            <h5 className='each-roomtitle' style={{textAlign:"center"}} > Book Your Room</h5>
                            <div className="all-filter-container" >

                                {/* from date */}
                                <div className='date-container' style={{ border: "1px solid #d3dae3", marginBottom: "1rem" }} >
                                    <label className='each-filter-label' >Check In</label>
                                    <input type="date" className='date' min={new Date().toISOString().split('T')[0]} value={ checkInDate } onChange={e=> setCheckInDate(e.target.value)} />
                                </div>
                                {/* to date */}
                                <div className='date-container' style={{ border: "1px solid #d3dae3", marginBottom: "1rem" }} >
                                    <label className='each-filter-label' >Check Out</label>
                                    <input type="date" className='date' min={new Date().toISOString().split('T')[0]} value={ checkOutDate } onChange={e=> setCheckOutDate( e.target.value )} />
                                </div>

                                {/* rooms dropdown */}
                                <div className='date-container' style={{ border: "1px solid #d3dae3", marginBottom: "1rem" }} >
                                    <label className='each-filter-label' >Room</label>
                                    <input type="number" className='date' placeholder='1' value={roomsCount} onChange={e=> setRoomsCount(e.target.value)} />
                                </div>

                                {/* category */}
                                
                                {errMsg.length ? <div style={{padding:"0 1.6rem"}} >
                                <Message  variant="danger"   >{errMsg}</Message> </div> : null}
                                
                                
                                <div >
                                    <button className='banner-btn2' onClick={handleBookRoom} >Book Room</button>
                                </div>

                            </div>
                        </div>
                    </section> 


                    {/* Trending Rooms Container */}
                    <section className='trending-rooms-container' >
                        <h1 className='home-page-title' >More Rooms</h1>
                        <p className='sub-heading-text' >A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of soul.</p>
                        {loading ? <Loader /> : error ? <Message variant="danger"  >{error}</Message>
                            : <>
                                <div className="flex-wrap" >
                                    {products.slice(0, 3).map((product) => {
                                        return <Col key={product._id} >
                                            <Product product={product} />
                                        </Col>
                                    })}
                                </div>
                            </>}

                        <div className="center-content" >
                        </div>
                    </section>
                    {/* Trending Rooms Container */}
                </Container>

            </>}
    </div>
}

export default ProductScreen;