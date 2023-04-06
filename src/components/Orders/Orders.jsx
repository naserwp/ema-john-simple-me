import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const cart = useLoaderData();
    console.log(cart)
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem 
                    key={Product.id}
                    product={product}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;