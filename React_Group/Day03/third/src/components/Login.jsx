import React from 'react'

export default function Login( props ) {

    let { inputData, setInputData } = props
    let getInputChange = ( e ) => {
        setInputData( e.target.value )

    }



    return (
        <div className='bg-dark p-4 text-light'>
            <div className="container">
                <h1 className='text-warning'>Login Component</h1>
                <input onChange={getInputChange} className='form-control mt-4' type="text" placeholder='Enter Your Data' name='studentName' />
                <p className='lead mt-3'>Your Data is :<strong className='text-danger'>{inputData}</strong> </p>
            </div>
        </div>
    )
}
