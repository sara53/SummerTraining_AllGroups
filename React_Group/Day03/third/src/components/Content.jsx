import React, { useEffect } from 'react'

export default function Content( props ) {
    let { setOpen, open } = props

    useEffect( () => {

        console.log( "Welcome" )

        // cleanup function
        return () => {
            console.log( "clean up function [willUnMount]" )
        }
    }, [] )
    return (
        <div className='alert alert-info'>
            <h1>Welcome Content Component</h1>
            <button onClick={() => setOpen( false )} className='btn btn-danger m-2'>Logout</button>
        </div>
    )
}
