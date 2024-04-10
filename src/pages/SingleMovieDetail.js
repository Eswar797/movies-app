import React, { useState, useEffect } from "react";
import axios from "axios";

const SingleMovieDetail = ({ match }) => {
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = "e4bb266ee57dc9d5bd0e104092ef0dd8";
        const movieId = match.params.id;
        const movieResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
        );
        setMovie(movieResponse.data);

        const castResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
        );
        setCast(castResponse.data.cast);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [match.params.id]);

  return (
    <div>
      {movie && (
        <div className="movie-details">
          <h2>{movie.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <p>{movie.overview}</p>
        </div>
      )}
      <h3>Cast</h3>
      <div className="cast-list">
        {cast.map((actor) => (
          <div key={actor.id} className="actor">
            <img
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p>{actor.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleMovieDetail;
