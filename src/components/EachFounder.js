import React from 'react';
import { useHistory } from 'react-router-dom';

const EachFounder  = ({ founder }) =>{
  
    const product = founder;
    const history = useHistory();

    const handleClick = () =>{
        history.push('/product/'+product._id);
    }

    return <div className='room-card-container' onClick={handleClick} >
        <div style={{position:'relative'}}  >  
            <div >
                <img src={ product.image } alt="" className='founder-card-image' />
            </div>
        </div>
        <div className='flex-center' >
            <label className='each-card-name'  ><strong>{product.name}</strong> </label>
        </div>
        <div className='flex-center' >
            <label className='each-room-available'  ><strong>{product.countInStock} {product.role}</strong> </label>
        </div>


        <div className='flex-center' >
            <p className='founder-text' >{product.text}

            </p>

        </div>

    </div>
}

export default EachFounder;