import React from 'react';
import { useHistory } from 'react-router-dom';

const Product  = ({ product }) =>{
  
    const history = useHistory();

    const handleClick = () =>{
        history.push('/product/'+product._id);
    }

    return <div className='room-card-container' onClick={handleClick} >
        <div style={{position:'relative'}}  >  
            <div >
                <img src={ product.image } alt="" className='room-card-image' />
            </div>
            <div style={{ position:'absolute' , background:'black', padding:"1rem", top:10, right:10 , borderRadius:'10px', boxShadow:' 0 10px 45px rgb(10 10 10 / 7%)'}} >
                <label style={{color:'white', fontWeight:"bold"}} >{product.price}$ / night</label>
            </div>
        </div>
        <div className='flex-center' >
            <label className='each-card-name'  ><strong>{product.name}</strong> </label>
        </div>
        <div className='flex-center' >
            <label className='each-room-available'  ><strong>{product.countInStock} {product.name} daily available.</strong> </label>
        </div>


        <div className='flex-center' >
            <button className='book-room-btn' >View Details 
            <i className= "icon fa fa-long-arrow-right" ></i>

            </button>

        </div>

    </div>
}

export default Product;