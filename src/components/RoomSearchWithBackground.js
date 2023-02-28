import QueryString from 'qs';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import Header from './Header'


const RoomSearchWithBackground = ({ image = "url('/images/bg1.jpeg')", title = "Book your vacation", showFilters = true, height, heroPara="" }) => {


    const queryObj= QueryString.parse(window.location.hash?.split("?")?.[1]);
    const roomCount = queryObj.rooms || 1;
    const initialCheckInDate = ( queryObj.checkInDate )|| "";
    const initialCheckOutDate = ( queryObj.checkOutDate )|| "";

    const history = useHistory();
    const [checkInDate, setCheckInDate] = useState(initialCheckInDate || '');
    const [checkOutDate, setCheckOutDate] = useState(initialCheckOutDate || '');
    const [roomsCount, setRoomsCount] = useState(parseInt(roomCount) || 0);

    const handleSeach = () => {
        // dispatch(listProducts(  ));
        history.push(`/rooms?rooms=${roomsCount}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`);
    }

    return <section>
        <div className='center-content' >
            <div className='contain-each-board' style={{ backgroundImage: image , height: height }} >
                <Header />
                <div>
                    <h4 className='banner-title home-page-title' style={{ fontSize: "100px", fontWeight: '400' }} > {title}</h4>
                    <p className='home-page-para' >{heroPara}</p>
                </div>
                <div>

                    {/* All Search Criteria  */}
                    {showFilters ? <div className="all-filter-container" >

                        {/* from date */}
                        <div className='date-container' >
                            <label className='each-filter-label' >Check In</label>
                            <input type="date" min={new Date().toISOString().split('T')[0]} className='date' value={checkInDate} onChange={e=> setCheckInDate(e.target.value)} />
                        </div>
                        {/* to date */}
                        <div className='date-container' >
                            <label className='each-filter-label' >Check Out</label>
                            <input type="date" min={new Date().toISOString().split('T')[0]}  className='date' value={checkOutDate} onChange={e=> setCheckOutDate(e.target.value)} />
                        </div>

                        {/* rooms dropdown */}
                        <div className='date-container' >
                            <label className='each-filter-label' >Room</label>
                            <input type="number" className='date' placeholder='1' value={ roomsCount } onChange={e=> setRoomsCount(e.target.value )} />
                        </div>

                        {/* category */}
                        <div >
                            <button className='banner-btn1' onClick={handleSeach} >Search Room</button>
                        </div>

                    </div> : <></>}




                    {/* <button className='banner-btn' onClick={handleBookNowClick} >Book Now</button> */}
                </div>

            </div>
        </div>
    </section>
}

export default RoomSearchWithBackground;