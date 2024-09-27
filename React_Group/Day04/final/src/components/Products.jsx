import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { productsList } from '../models/productsList'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Products( props ) {

    // let [ users, setUsers ] = useState();
    // useEffect( () => {
    //     axios.get( 'https://jsonplaceholder.typicode.com/users' ).then( response => {
    //         setUsers( response.data )
    //     } ).catch( error => console.log( error ) )
    // }, [] )


    // let usersList = users.map( user => (

    //     <tr key={user.id}>
    //         <td>{user.id}</td>
    //         <td>{user.name}</td>
    //         <td>{user.email}</td>
    //         <td>{user.phone}</td>
    //         <td>
    //             <Link to={`/products/${user.id}`}>
    //                 <i className="mx-2 fs-3 text-warning bi bi-eye-fill"></i>
    //             </Link>
    //             <Link to={`/products/${user.id}/edit`}>

    //                 <i className="mx-2 fs-3 text-info bi bi-pencil-square"></i>

    //             </Link>
    //             <i className="mx-2 fs-3 text-danger bi bi-trash-fill"></i>

    //         </td>
    //     </tr>
    // ) )
    let { products, setProducts } = props

    let deleteProduct = ( id ) => {
        let newList = products.filter( product => product.id != id )
        setProducts( newList )
    }


    let renderedProductList = products && products.map( product => ( <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.quantity}</td>
        <td>
            <Link to={`/products/${product.id}`}>
                <i className="mx-2 fs-3 text-warning bi bi-eye-fill"></i>
            </Link>
            <Link to={`/products/${product.id}/edit`}>

                <i className="mx-2 fs-3 text-info bi bi-pencil-square"></i>

            </Link>
            <i onClick={() => deleteProduct( product.id )} className="mx-2 fs-3 text-danger bi bi-trash-fill"></i>

        </td>
    </tr>
    ) )
    return (
        <div className='mt-5'>
            <div className="container">
                <h1 className='text-muted text-center mb-5'>Our Products</h1>
                <Link to="/products/0/edit" className='btn btn-outline-primary mb-3'>Add New Product</Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {usersList} */}
                        {renderedProductList}
                    </tbody>
                </Table>
            </div>

        </div>
    )
}
