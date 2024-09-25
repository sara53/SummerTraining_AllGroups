import React, { useState } from 'react'
import ErrorComponent from './ErrorComponent';

export default function Register() {

    let [ count, setCount ] = useState( 0 );
    let [ title, setTitle ] = useState( 'Initial Title' );
    let [ open, setOpen ] = useState( false )
    let increase = () => {
        setCount( count + 1 )
    }
    let decrease = () => {
        setCount( count - 1 )
    }
    let changeTitle = () => {
        setTitle( "Register Title" );
    }
    let toggle = () => {
        setOpen( !open )
    }
    return (
        <div className='container mt-3 '>
            {console.log( "reRender" )}
            <div className='alert alert-secondary'>
                <h1>{title}</h1>
                <p className='lead fs-3'>Count : {count}</p>
                <button onClick={increase} className='btn btn-success mx-2 mt-2'>+</button>
                <button onClick={decrease} className='btn btn-danger mx-2 mt-2'>-</button>
                <button onClick={changeTitle} className='btn btn-dark mt-2'>Change Title</button>

                {!open && <button onClick={toggle} className='btn btn-warning mt-2 mx-3'> Login</button>}
                {open && <ErrorComponent toggle={toggle} />}
            </div>

        </div>
    )
}

