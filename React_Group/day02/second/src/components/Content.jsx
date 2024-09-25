import React from 'react'

export function Content( props ) {
    return (
        <div className={`${props.bgColor}  p-3`}>
            <h1>Welcome Content Component</h1>
            <p>{props.title}</p>
            {props.children}
        </div>
    )
}
