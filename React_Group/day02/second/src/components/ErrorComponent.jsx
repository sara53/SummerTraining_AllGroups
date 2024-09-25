import React from 'react'

export default function ErrorComponent( props ) {

    let { toggle } = props
    return (
        <div className='alert alert-danger mt-4'>
            <h1>Menu Opened</h1>
            <button className='btn btn-dark mt-3' onClick={toggle}>logout</button>
        </div>
    )
}
