import React from "react";

const EachHotelFacility = ({ icon , text }) => {

    return <div className="each-facility" >
        <div className="flex-justify-center" >
            <i className={ `each-facility-image ${icon}` } ></i>
        </div>
        <p className="each-facility-name" >{text}</p>
    </div>

}

export default EachHotelFacility