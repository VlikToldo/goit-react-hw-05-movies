import { useEffect, useState, useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { searchDetails } from '../../shared/services/movie-api';

import style from './movie-details-page.module.css';

const MovieDetailsPage = () => {
  const [infoMovie, setInfoMovie] = useState({});

  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');


  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const data = await searchDetails(movieId);
        setInfoMovie({ ...data });
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchFilm();
  }, [movieId]);

  const { genres, overview, original_title, vote_average, poster_path } =
    infoMovie;
  const linkPoster = 'https://image.tmdb.org/t/p/w400' + poster_path;

  const findGenres = genresArr => {
    if (Boolean(genresArr)) {
      const genre = genresArr.map(genre => genre.name).join(', ');
      return genre;
    }
  };

  return (
    <>
      <Link to={backLink.current}>
        <button className={style.backButton}>Back</button>
      </Link>
      <div className={style.detailsBox}>
        <div>
          <img
            className={style.imgDetails}
            src={linkPoster}
            alt="Poster path"
          />
        </div>
        <div className={style.details}>
          <h1 className={style.title}>{original_title}</h1>
          <p>Vote average: {vote_average}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{findGenres(genres)}</p>
        </div>
      </div>
      <div className={style.detailsBoxAdd}>
        <h2>Additional information</h2>
        <ul className={style.addList}> 
          <li>
            <Link className={style.addItem} to="cast">Cast</Link>
          </li>
          <li>
            <Link className={style.addItem} to="reviews">Reviews</Link>
          </li>
        </ul>

          <Suspense fallback={<div>...Loading</div>}>
            <Outlet />
          </Suspense>

      </div>
    </>
  );
};

export default MovieDetailsPage;
