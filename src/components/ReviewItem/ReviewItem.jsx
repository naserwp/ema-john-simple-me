import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css';
const ReviewItem = ({product}) => {

    const {id, img, price, name, quantity, shipping} = product;
    return (
        <div className='review-item'>
           <img src={img} alt="" /> 
           <div className="review-details">
                <h3>{name}</h3>
                <p>Price: <span className='orange-text'>${price}</span></p>
                <p>Quantity: <span>{quantity}</span></p>
                <p>Shipping: <span className='orange-text'>${shipping}</span></p>
           </div>
           <button className='btn-delete'><FontAwesomeIcon className='delete-icon' icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItem;