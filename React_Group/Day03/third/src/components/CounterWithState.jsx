import React, { useState } from 'react'

export default function Counter() {
    let [ state, setState ] = useState( {
        count: 0,
        title: 'Counter Component'
    } )

    let increase = () => {
        setState( {
            ...state,
            count: state.count + 1
        } )
    }
    let decrease = () => {
        setState( {
            ...state,
            count: state.count - 1
        } )
    }
    let changeTitle = () => {
        setState( {
            ...state,
            title: 'Title Changed'
        } )
    }
    return (
        <div className='alert alert-secondary'>
            <h1>{state.title}</h1>
            <p className='lead'>Count : {state.count}</p>
            <button onClick={increase} className='btn btn-primary mx-1'>+</button>
            <button onClick={decrease} className='btn btn-danger mx-1'>-</button>
            <button onClick={changeTitle} className='btn btn-dark mx-1'>Change Title</button>
        </div>
    )
}


