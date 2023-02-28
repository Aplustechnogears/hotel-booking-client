import React from 'react';
import { useHistory } from 'react-router-dom';

const EachPackage  = ({ product }) =>{
  
    const history = useHistory();

    const handleClick = () =>{
        history.push('/package/'+product._id);
    }

    return <div className='room-card-container' onClick={handleClick} >
        <div style={{position:'relative'}}  >  
            <div >
                <img src={ product.image } alt="" className='room-package-image' />
            </div>
            <div style={{ position:'absolute' , background:'black', padding:"1rem", bottom:10, left:10 , borderRadius:'10px', boxShadow:' 0 10px 45px rgb(10 10 10 / 7%)'}} >
                <label style={{color:'white', fontWeight:"bold"}} >2 night / 3 days</label>
            </div>
        </div>
        <div className='flex-center' >
            <label className='each-card-name'  ><strong>Deluxe Package</strong> </label>
        </div>
        <div className='flex-center' >
            {/* <label className='each-room-available'  ><strong>{product.countInStock} {product.name} daily available.</strong> </label> */}
        </div>


        <div className='flex-center' >
            <button className='book-room-btn' >View Details 
            <i className= "icon fa fa-long-arrow-right" ></i>

            </button>

        </div>

    </div>
}

export default EachPackage;