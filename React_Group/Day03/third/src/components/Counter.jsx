import React, { useEffect, useState } from 'react'
import Content from './Content';

export default function Counter() {

    let [ count, setCount ] = useState( 0 );

    let [ title, setTitle ] = useState( 'Counter Component' );
    let [ open, setOpen ] = useState( false );

    let increase = () => { setCount( count + 1 ) }

    let decrease = () => { setCount( count - 1 ) }

    let changeTitle = () => { setTitle( 'Title Changed' ) }

    // ComponentDidMount -- componentDidUpdate
    /**
     * -- componentDidMount
     * no second params no array -->componentDidMount 
     * [] ==> componentDidMount
     * [state] ==> componentDidMount --> componentDidUpdate after state update
     * [state1,state2] componentDidMount --> componentDidUpdate after state1 update,state2 update
     */
    // useEffect( () => {
    //     console.log( "Connection to  api" )

    // }, [] );

    // useEffect( () => {
    //     console.log( "ComponentDidUpdate" )
    // }, [ count ] );
    return (
        <div className='alert alert-secondary p-5'>
            {/* {console.log( "Render" )}
            {!open && <button onClick={() => setOpen( true )} className='btn btn-dark mb-4'>Login</button>}
            {open && <Content setOpen={setOpen} open={open} />} */}
            <h1>{title}</h1>
            <p className='lead'>Count : {count}</p>
            <button onClick={increase} className='btn btn-primary mx-1'>+</button>
            <button onClick={decrease} className='btn btn-danger mx-1'>-</button>
            <button onClick={changeTitle} className='btn btn-dark mx-1'>Change Title</button>
        </div>
    )
}


