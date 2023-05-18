import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PageItem from '../../components/PageItem/PageItem';
import { searchMovie } from '../../shared/services/movie-api';

const HomePage = () => {
  const [items, setItems] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const data = await searchMovie();
        setItems([...data.results]);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchFilm();
  }, []);

  const elements = items.map(item => (
    <PageItem key={item.id} {...item} location={location} />
  ));

  return (
    <div>
      <ul>{elements}</ul>
    </div>
  );
};

export default HomePage;
