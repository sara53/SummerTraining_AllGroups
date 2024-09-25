import React, { Component } from 'react'

export class Login extends Component {
    state = {
        title: "Login Component",
        count: 0
    }
    constructor() {
        super();
        console.log( "1-ctor" )
    }

    clickHandler = () => {
        this.setState( {
            title: "Register Component"
        } )

    }

    increase = () => {
        this.setState( {
            count: this.state.count + 1
        } )
    }
    decrease = () => {
        this.setState( {
            count: this.state.count - 1
        } )
    }
    render() {
        console.log( "2-render" )
        return (
            <div className="container">
                <div className='alert alert-dark mt-5'>
                    <h1>{this.state.title}</h1>
                    <h2>Counter : {this.state.count}</h2>
                    <button onClick={this.increase} className='btn btn-success mx-3 mt-2'>+</button>
                    <button onClick={this.decrease} className='btn btn-danger mx-3 mt-2'>-</button>
                    <button onClick={this.clickHandler} className='btn btn-primary mt-3'>Show More</button>
                </div>
            </div>
        )
    }
}
