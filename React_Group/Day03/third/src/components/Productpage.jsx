import React, { useState } from 'react'
import ProductForm from './ProductForm'
import ProductList from './ProductList'

export default function Productpage() {

    let [ products, setProducts ] = useState( [] )
    return (
        <div className='container'>
            <ProductForm products={products} setProducts={setProducts} />
            <ProductList products={products} setProducts={setProducts} />
        </div>
    )
}
