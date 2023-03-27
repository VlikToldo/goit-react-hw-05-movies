import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchReviews } from 'components/shared/services/movie-api';

const Reviews = () => {
  const [infoReviews, setInfoReviews] = useState({});

  const { movieId } = useParams();

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const data = await searchReviews(movieId);
        setInfoReviews(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchFilm();
  }, [movieId]);

  const element = infoReviews.results?.map(authors => {
    const { content, author, id } = authors;
    return (
      <li key={id}>
        <h2>{author}</h2>
        <p>{content}</p>
      </li>
    );
  });

  return (
    <>
      {((element === undefined || element.length < 1) && <p>NotFound</p>) || (
       <div><ul>{element}</ul></div> 
      )}
    </>
  );
};

export default Reviews;
