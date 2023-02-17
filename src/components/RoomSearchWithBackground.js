import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header'


const RoomSearchWithBackground = ({ image = "url('/images/bg1.jpeg')", title = "Book your vacation", showFilters = true, height }) => {


    const history = useHistory();

    const handleSeach = () => {

        history.push('/rooms');

    }

    return <section>
        <div className='center-content' >
            <div className='contain-each-board' style={{ backgroundImage: image , height: height }} >
                <Header />
                <div>
                    <h4 className='banner-title home-page-title' style={{ fontSize: "70px", fontWeight: '400' }} > {title}</h4>
                </div>
                <div>

                    {/* All Search Criteria  */}
                    {showFilters ? <div className="all-filter-container" >

                        {/* from date */}
                        <div className='date-container' >
                            <label className='each-filter-label' >Check In</label>
                            <input type="date" className='date' />
                        </div>
                        {/* to date */}
                        <div className='date-container' >
                            <label className='each-filter-label' >Check Out</label>
                            <input type="date" className='date' />
                        </div>

                        {/* rooms dropdown */}
                        <div className='date-container' >
                            <label className='each-filter-label' >Room</label>
                            <input type="number" className='date' placeholder='1' />
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