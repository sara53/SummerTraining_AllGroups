import React, { useState } from 'react'
import Movie from './Movie'

export default function Movies() {
    let [ movies, setMovies ] = useState( [
        {
            id: 1,
            name: "The Moon",
            desc: "Lorem ipsum dolor sit amet consectetur",
            rate: 3.6
        },
        {
            id: 2,
            name: "The Journey",
            rate: 4.1,
            desc: "Lorem ipsum dolor sit amet consectetur"
        },
        {
            id: 3,
            name: "The Ghost",
            rate: 2.1,
            desc: "Lorem ipsum dolor sit amet consectetur"
        },
        {
            id: 4,
            name: "The black List",
            rate: 4.9,
            desc: "Lorem ipsum dolor sit amet consectetur"
        },
        {
            id: 5,
            name: "The Earth",
            rate: 4.9,
            desc: "Lorem ipsum dolor sit amet consectetur"
        }
    ]
    )


    let moviesList = movies.map( movie => (
        <Movie key={movie.id} movie={movie} setMovies={setMovies} movies={movies} />
    ) )
    return (
        <div className='container  mt-5'>
            <h1 className='text-muted text-center mb-4'>Movies List</h1>
            <div className="row">
                {moviesList}
            </div>
        </div>
    )
}
