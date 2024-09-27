import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ProductDetails( { products, setProducts } ) {
    let { id } = useParams();

    let [ product, setProduct ] = useState( {} );
    useEffect( () => {
        setProduct( products.find( product => product.id == id ) )
    }, [] )
    return (
        <div className='bg-dark p-5 text-light'>
            <div className="container">
                <h1 className='text-center text-warning mb-4'>Product Details</h1>
                <h3>Product Code : {id}</h3>
                <p className='lead mt-3'>Product Name : {product?.name}</p>
                <p className='lead mt-3'>Product Price :{product?.price}</p>
                <p className='lead mt-3'>Product Quantity : {product?.quantity}</p>
                <p className='lead mt-3'>
                    <i className="text-warning mx-1 bi bi-star-fill"></i>
                    <i className="text-warning mx-1 bi bi-star-fill"></i>
                    <i className="text-warning mx-1 bi bi-star-fill"></i>
                    <i className="text-warning mx-1 bi bi-star-fill"></i>
                    <i className="text-warning mx-1 bi bi-star-fill"></i>
                </p>
                <Link to='/products' className='btn btn-secondary'>Back To Products</Link>
            </div>

        </div>
    )
}
