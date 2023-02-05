import React from 'react';
import { useHistory } from 'react-router-dom';


const RoomSearchWithBackground = ({ image="url('/images/bg1.jpeg')" }) => {


    const history= useHistory();

    const handleSeach = () => {

        history.push('/rooms');

    }

    return <section>
    <div className='center-content' >
        <div className='contain-each-board' style={{ backgroundImage: image }} >
            <h4 className='banner-title home-page-title' style={{ fontSize:"6rem" }} > Search.</h4>

            {/* All Search Criteria  */}
            <div className="all-filter-container" >

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
            </div>
                <div className='center-content' >
                    <button className='banner-btn' onClick={ handleSeach } >Search Room</button>
                </div>

            {/* <button className='banner-btn' onClick={handleBookNowClick} >Book Now</button> */}
        </div>
    </div>
</section>
}

export default RoomSearchWithBackground;