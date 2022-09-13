import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from 'react-icons/bs'
import MovieCard from '../../components/MovieCard'
import { Description, Info, MoviePage, Tagline } from './style';

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    })
  }

  useEffect(() => {
    const movieUrl = `${moviesUrl}${id}?${apiKey}`
    getMovie(movieUrl)
  }, [])

  return (
    <MoviePage>
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <Tagline>{movie.tagline}</Tagline>
          <Info>
            <h3>
              <BsWallet2 /> Orçamento:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </Info>
          <Info>
            <h3>
              <BsGraphUp /> Receita:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </Info>
          <Info>
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
          </Info>
          <Info>
            <h3>
              <BsWallet2 /> Descrição:
            </h3>
            <Description>{movie.overview}</Description>
          </Info>
        </>
      )}
    </MoviePage>
  );
}
