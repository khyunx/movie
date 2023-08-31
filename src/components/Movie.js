import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./../styles.css";

const Movie = ({ id, mediumCoverImage, title, summary, genres }) => {
  return (
    <div>
      <div className="movieBox">
        <img src={mediumCoverImage} alt={title} />
        <div>
          <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
          <p>
            {summary.length > 500 ? `${summary.slice(0, 500)}...` : summary}
          </p>
          <span>
            {`Genres: `}
            {genres.map((genre) => (
              <span key={genre}>{`${genre} `}</span>
            ))}
          </span>
        </div>
      </div>
      <hr />
    </div>
  );
};

Movie.propTypes = {
  id: propTypes.number.isRequired,
  mediumCoverImage: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string.isRequired),
};

export default Movie;
