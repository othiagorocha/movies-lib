import { Link } from "react-router-dom"
import { FaStar } from 'react-icons/fa'
import { Card, Image } from "./style";

const imageUrl = import.meta.env.VITE_IMG;

export default function MovieCard({movie, showLink = true}) {
  return (
    <Card>
      <Image src={imageUrl + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </Card>
  )
}