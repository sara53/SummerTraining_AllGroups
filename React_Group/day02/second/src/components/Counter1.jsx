import React from 'react'
import { Content } from './Content'

export function Counter1( props ) {

    console.log( props )

    let { title, description, bgColor, color } = props

    return (
        <div className={`${bgColor} p-4`}>
            <h1>{title || "Default Title"}</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas optio possimus voluptatum necessitatibus consectetur nihil, nam magni praesentium eveniet fugiat delectus autem voluptatibus odio, sed consequuntur doloribus debitis dignissimos perferendis?</p>
            <Content title={title} />
        </div>
    )
}
