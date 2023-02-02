    import React,{ useEffect} from 'react';
    import { Col} from 'react-bootstrap';
    import Product from '../components/Product';
    import Loader from '../components/Loader';
    import Message from '../components/Message';
    import Meta from '../components/Meta';
    import { useDispatch, useSelector } from 'react-redux';
    import { listProducts } from '../actions/productActions';
    import DarkVariantCarousel from '../components/Carousel';
    import EachHotelFacility from '../components/EachhotelFacility';


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
        const keyword = match.params.keyword 
        const pageNumber = match.params.pageNumber || 1

        // const [products, setProducts]  = useState([]);

        const productList = useSelector(state=> state.productList )
        const { products, error, loading } = productList

        useEffect(()=>{
            dispatch(listProducts( keyword, pageNumber ));

        },[dispatch, keyword, pageNumber]);

        return <div className='container1' >
            <Meta  />
            {/* <img src='/images/hero.jpg' alt="" className='hero-image' /> */}
            <DarkVariantCarousel />

            {/* Trending Rooms Container */}
            <section className='trending-rooms-container' >
                <h1 className='home-page-title' >Trending Rooms</h1>
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
        
            
        </div>
    }

    export default HomeScreen;