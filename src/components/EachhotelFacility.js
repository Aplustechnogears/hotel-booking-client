import React from "react";

const EachHotelFacility = ({ icon , text, link }) => {

    const handleNavigate = ( ) => {
        const anchor = document.createElement('a');
        anchor.target="_blank";
        anchor.href = link
        anchor.click();
    }

    return <div className="each-facility" onClick={ handleNavigate }  >
        <div className="flex-justify-center" >
            <i className={ `each-facility-image ${icon}` } ></i>
        </div>
        <p className="each-facility-name" >{text}</p>
    </div>

}

export default EachHotelFacility