import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="detail">
          <img src={movie.medium_cover_image} />
          <div>
            <h2>{movie.title}</h2>
            <span>Rating: {movie.rating}</span>
          </div>
          <br />
          <span>Uploaded Date: {movie.date_uploaded.substring(0, 10)}</span>
          <br />
          <span>Description: {movie.description_full}</span>
          <ul>
            <h3>Genres</h3>
            {movie.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Detail;
