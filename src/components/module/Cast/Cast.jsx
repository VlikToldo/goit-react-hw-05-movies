import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchCast } from 'components/shared/services/movie-api';

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
    const linkPoster = 'https://image.tmdb.org/t/p/w400' + profile_path;
    return (
      <li key={id}>
        <img src={linkPoster} alt={name} />
        <p>{name}</p>
        <p>Character: {character}</p>
      </li>
    );
  });

  return <div><ul>{element}</ul></div> ;
};

export default Cast;
