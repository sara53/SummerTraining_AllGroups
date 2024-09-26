import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export default function ProductForm( props ) {
    let { products, setProducts } = props
    let [ productForm, setProductForm ] = useState( {
        productName: '',
        desc: '',
        freeShipping: false
    } )

    let getInputValue = ( e ) => {
        console.log( e.target.name, e.target.checked )
        if ( e.target.name == 'freeShipping' ) {
            setProductForm( {
                ...productForm,
                [ e.target.name ]: e.target.checked
            } )
        } else {
            setProductForm( {
                ...productForm,
                [ e.target.name ]: e.target.value
            } )
        }

    }


    let productHandler = ( e ) => {
        e.preventDefault();
        setProducts( [ ...products, productForm ] )
        setProductForm( {
            productName: '',
            desc: ''
        } )
    }
    return (
        <div className='alert  mt-5'>
            <h1 className='text-center'>Product Data</h1>
            <Form onSubmit={productHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control onChange={getInputValue} value={productForm.productName} type="text" placeholder="Enter Product Name" name="productName" />
                    <Form.Text className="text-danger">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control onChange={getInputValue} value={productForm.desc} type="text" placeholder="Enter Product Description" name="desc" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onChange={getInputValue} type="checkbox" label="Free Shipping" name='freeShipping' checked={productForm.freeShipping} />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Add New Product
                </Button>
            </Form>


        </div>
    )
}





