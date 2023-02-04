import React from 'react';

const RoomSearchWithBackground = ({ image="url('/images/bg1.jpeg')" }) => {
    return <section>
    <div className='center-content' >
        <div className='contain-each-board' style={{ backgroundImage: image }} >
            <h4 className='banner-title home-page-title' style={{ fontSize:"6rem" }} > Search.</h4>
            {/* <button className='banner-btn' onClick={handleBookNowClick} >Book Now</button> */}
        </div>
    </div>
</section>
}

export default RoomSearchWithBackground;