import React from 'react'

export default function ProductList( props ) {
    let { products, setProducts } = props
    console.log( products )
    let productsList = products.map( ( product, index ) => (

        <div className='col-sm-6 col-md-3' key={index}>
            <div className='alert alert-success'>
                <h1>{product.productName}</h1>

                <p>{product.desc}  <span class={`badge ${product.freeShipping ? 'bg-success' : 'bg-danger'} `}>

                    {product.freeShipping ? 'Free Shipping' : 'Delivery Cost : 2$'}
                </span></p>
                <button className='btn btn-dark'>Show More !</button>
            </div>

        </div>
    ) )
    return (
        <div className="alert alert-secondary">
            <h1 className='text-center mb-4'>Your Products</h1>
            <div className="row">
                {productsList}
            </div>
        </div>
    )
}
