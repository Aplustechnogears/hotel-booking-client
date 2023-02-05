import React, { useEffect } from 'react';
import { Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import Product from '../components/Product';
import RoomSearchWithBackground from '../components/RoomSearchWithBackground';

const RoomsScreen = ({  match }) => {


    const keyword = match.params.keyword 
    const pageNumber = match.params.pageNumber || 1

    // const [products, setProducts]  = useState([]);

    const dispatch= useDispatch()
    const productList = useSelector(state=> state.productList )
    const { products, error, loading } = productList

    useEffect(()=>{
        dispatch(listProducts( keyword, pageNumber ));

    },[dispatch, keyword, pageNumber]);

    // const handleBookNowClick = () => {}

    return <>

        {/* Book now section */}
            <RoomSearchWithBackground image="url('/images/bg2.jpeg')" />
        {/* Book now section */}


        {/* Trending Rooms Container */}
        <Container>
            <section className='trending-rooms-container' >
                    <h1 className='home-page-title' >All Rooms</h1>
                    { loading? <Loader />: error ? <Message>{error}</Message>
                    : <>
                    <div className="flex-wrap" >
                        {products.map( (product)=>{
                            return <Col key={product._id} >
                            <Product product={product} />
                            </Col>
                        } )}
                    </div>
                </>}

            <div className="center-content" >
                <Paginate keyword={ keyword } page={ pageNumber } />
            </div>
            </section>
        </Container>
    
        
        {/* Trending Rooms Container */}

    </>
}

export default RoomsScreen;