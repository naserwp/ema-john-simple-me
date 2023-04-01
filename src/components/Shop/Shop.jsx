import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import '../Shop/Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect( () => {
        console.log('products', products)
        const storedCart = getShoppingCart();
        //Step 1 to get ID

        for(const id in storedCart){
            //step 2 get product by id 
            const addedProduct = products.find(product => product.id === id);
            //step 3 get quantity products
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            console.log('saveProduct', addedProduct)
        }

    } , [])


    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
        addToDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {/* <h2>Products coming: {products.length}</h2> */}
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    
                </Cart>
            </div>
        </div>
    );
};

export default Shop;