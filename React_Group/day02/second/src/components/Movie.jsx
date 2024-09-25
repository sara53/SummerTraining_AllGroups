

export default function Movie( props ) {
    let { movie, setMovies, movies } = props

    let removeMovie = ( id ) => {
        let newList = movies.filter( movie => movie.id != id )
        setMovies( newList )
    }

    return (
        <div className="col-sm-6" >
            <div className='alert alert-secondary'>
                <h1>{movie.id}.{movie.name}</h1>
                <p className="lead">{movie.desc}</p>
                <p className="lead">Rate: {movie.rate}</p>
                <button onClick={() => { removeMovie( movie.id ) }} className="btn btn-danger">Remove Movie</button>
            </div>
        </div>
    )
}
