import { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard';
import { Container, MoviesContainer, Title } from './style';

const moviesUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

export default function Home() {
  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setTopMovies(data.results)
  };

  useEffect(() => {
    const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`

    getTopRatedMovies(topRatedUrl)
  }, [])

  return (
    <Container>
      <Title>Melhores filmes:</Title>
      <MoviesContainer>
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && topMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </MoviesContainer>
    </Container>
  )
}
