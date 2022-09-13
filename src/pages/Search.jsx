import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../components/MovieCard'
import { Container, MoviesContainer, QueryText, Title } from './style';

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Search() {
  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState([]);
  const query = searchParams.get('q')

  const getSearchedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setMovies(data.results)
  };

  useEffect(() => {
    const searchWithQueryUrl = `${searchUrl}?${apiKey}&query=${query}`

    getSearchedMovies(searchWithQueryUrl)
  }, [query])

  return (
    <Container>
      <Title>
        Resultados para: <QueryText>{query}</QueryText>
      </Title>
      <MoviesContainer>
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 0 && movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </MoviesContainer>
    </Container>
  )
}
