import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Meta from '../components/Meta';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Card, Button, Image, ListGroup, Form, Container } from 'react-bootstrap';
import Rating from '../components/Rating';
import { listProductDetails, listProducts } from '../actions/productActions';
import RoomSearchWithBackground from '../components/RoomSearchWithBackground';
import Product from '../components/Product';



const ProductScreen = ({ history, match }) => {

    const [qty, setQty] = useState(1);



    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.productDetails);
    const productList = useSelector(state=> state.productList )
    const { products } = productList

    const { error, product, loading } = productDetails;

    useEffect(() => {

        dispatch(listProductDetails(match.params.id))
        dispatch(listProducts( ));

    }, [dispatch, match]);


    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    const handleSeach = () => { }

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
                        </div>
                        <div>
                            <div className="all-filter-container" >

                                {/* from date */}
                                <div className='date-container' style={{ border: "1px solid #d3dae3", marginBottom: "1rem" }} >
                                    <label className='each-filter-label' >Check In</label>
                                    <input type="date" className='date' />
                                </div>
                                {/* to date */}
                                <div className='date-container' style={{ border: "1px solid #d3dae3", marginBottom: "1rem" }} >
                                    <label className='each-filter-label' >Check Out</label>
                                    <input type="date" className='date' />
                                </div>

                                {/* rooms dropdown */}
                                <div className='date-container' style={{ border: "1px solid #d3dae3", marginBottom: "1rem" }} >
                                    <label className='each-filter-label' >Room</label>
                                    <input type="number" className='date' placeholder='1' />
                                </div>

                                {/* category */}
                                <div >
                                    <button className='banner-btn2' onClick={handleSeach} >Book Room</button>
                                </div>

                            </div>
                        </div>
                    </section>


                    {/* Trending Rooms Container */}
                    <section className='trending-rooms-container' >
                        <h1 className='home-page-title' >More Rooms</h1>
                        <p className='sub-heading-text' >A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of soul.</p>
                        {loading ? <Loader /> : error ? <Message>{error}</Message>
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