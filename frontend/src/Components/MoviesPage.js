import React from 'react'

function MoviesPage() {

    const [movies, setMovies] = React.useState([])
    const [yourMovies, setYourMovies] = React.useState([])

    React.useEffect(() =>{
      fetch("https://grandeza-films.onrender.com/movies")
      .then((r) => r.json())
      .then((movies) => setMovies(movies));
    }, []);
  return (
    <div>MoviesPage</div>
  )
}

export default MoviesPage