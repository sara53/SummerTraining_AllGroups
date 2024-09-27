import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

export default function ProductForm( { products, setProducts } ) {

    let navigate = useNavigate();

    let [ productForm, setProductForm ] = useState( {
        name: '',
        price: '',
        quantity: ''
    } )

    let getInputValue = ( e ) => {
        setProductForm( {
            ...productForm,
            [ e.target.name ]: e.target.value
        } )
    }

    useEffect( () => {
        if ( id != 0 ) {
            setProductForm( products.find( product => product.id == id ) )
        }
    }, [] )

    let { id } = useParams();

    let productHandler = ( e ) => {
        e.preventDefault();
        if ( id == 0 ) {
            let productId = products.length + 1;
            setProducts( [ ...products, { id: productId, ...productForm } ] )
            navigate( '/products' )
        } else {
            // edit

            let productIndex = products.findIndex( product => product.id == id );
            products[ productIndex ] = productForm;
            setProducts( products )
            navigate( '/products' )
        }



    }
    return (
        <div className='mt-5'>

            <div className="container">
                <h1 className='text-center text-muted'>{id == 0 ? 'Add New Product ' : 'Edit Product'}</h1>
                <Form onSubmit={productHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control onChange={getInputValue} value={productForm.name} type="text" placeholder="Enter Product Name" name='name' />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control value={productForm.price} onChange={getInputValue} type="number" placeholder="Enter Product Price" name='price' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Product Quantity</Form.Label>
                        <Form.Control value={productForm.quantity} onChange={getInputValue} type="number" placeholder="Enter Product Quantity" name='quantity' />
                    </Form.Group>

                    <Button variant="success" type="submit">
                        {id == 0 ? 'Add New Product ' : 'Edit Product'}
                    </Button>
                </Form>
            </div>
        </div>
    )
}
