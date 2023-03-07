import React,{ useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import { Link} from 'react-router-dom';
import { Row, Col, ListGroup, Card, Image, Button, Container } from 'react-bootstrap';
import { addToCart, removeFromCart } from '../actions/cartActions';
import RoomSearchWithBackground from '../components/RoomSearchWithBackground';
import QueryString from 'qs';
import Loader from '../components/Loader';

const CartScreen = ({ match , location, history }) =>{

    const productId = match.params.id;
    const dispatch = useDispatch();

    const urlsParsed = QueryString.parse(location.search?.slice(1,));
    const qty = urlsParsed.qty || 1;
    const checkInDate = parseInt( urlsParsed.checkInDate )|| 0;
    const checkOutDate = parseInt( urlsParsed.checkOutDate )|| 0;
    const cart  = useSelector(state => state.cart);
    const { cartItems } = cart;

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        if(productId){
            (async()=>{
                setLoading(true);
                await dispatch(addToCart(productId, qty, checkInDate, checkOutDate));
                setLoading(false);

            })();
        }
    },[dispatch, productId, qty]);


    const removeFromCartHandler = (id) => {
        console.log(id);
        dispatch(removeFromCart(id));
    }

    const checkoutHandler = () =>{
        history.push('/login?redirect=shipping')
    }

    return <>

    <RoomSearchWithBackground 
        showFilters={false}
        title="Reservations"
        image="linear-gradient(0deg,rgba(0,0,0, 0.4), rgba(0,0,0,0.75)),url('/images/bg1.jpeg')" 
        height="50vh" 
    />
    {loading ? <Loader />:  <Container>

     <Row>
        <Col md={8} >
            <h1>Confirm Reservations</h1>
            { cartItems.length===0 ? <Message>cart is empty<Link to="/" > Go Back</Link></Message> : <ListGroup variant="flush" >
                { cartItems.map(item=> {
                    return <ListGroup.Item key={item.product} >
                        <Row>
                            <Col md={2} >
                                { item.image ? <Image src={item.image} alt={item.name} fluid rounded /> : null }
                            </Col>
                            <Col md={3} style={{alignSelf:'center'}} >
                                <Link to={`/product/${item.product}`} > {item.name} </Link>
                            </Col>
                            <Col md={2} style={{whiteSpace:"nowrap", alignSelf:'center'}} >
                            ₹{item.price}
                            </Col>
                            <Col md={2}  style={{alignSelf:'center', whiteSpace:"nowrap"}}>
                                <strong> {qty} Rooms/Packges</strong>
                            </Col>
                            <Col md={2} >
                                <Button type="button" variant ='light' onClick={()=> removeFromCartHandler(item.product) } >
                                    <i className="fa fa-trash" ></i>
                                </Button>
                            </Col>

                        </Row>
                    </ListGroup.Item>
                }) }
            </ListGroup> }
        </Col>
        <Col md={4} >
            <Card>
                <ListGroup variant="flush" >
                    <ListGroup.Item>
                        <h3>Sub Total ({ cartItems.reduce((acc, cur) => acc+  cur.qty, 0 ) }) items </h3>
                        ₹{ cartItems.reduce(( acc, item )=> acc + item.qty * item.price, 0).toFixed(2) }
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button type="button" className="btn-block" disabled={ !cartItems.length } onClick={checkoutHandler} > CheckOut</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
        
    </Row>
    </Container> }

    </>
}

export default CartScreen;