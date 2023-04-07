import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchCast } from '../../shared/services/movie-api';

import style from './cast.module.css'

const Cast = () => {
  const [infoMovie, setInfoMovie] = useState({});

  const { movieId } = useParams();

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const data = await searchCast(movieId);
        console.log(data);
        setInfoMovie(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchFilm();
  }, [movieId]);

  const element = infoMovie.cast?.map(actor => {
    const { name, character, profile_path, id } = actor;
    const defaultPhoto = 'https://cdn-icons-png.flaticon.com/512/4054/4054617.png';
    const linkPoster = 'https://image.tmdb.org/t/p/w400' + profile_path;
    return (
      <li key={id}>
        <img className={style.castImg} src={profile_path ? linkPoster : defaultPhoto} alt={name} />
        <p>{name}</p>
        <p>Character: {character}</p>
      </li>
    );
  });

  return <div><ul>{element}</ul></div> ;
};

export default Cast;
