import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import SearchPageItem from '../../module/SearchPageItem/SearchPageItem';
import { searchFilm } from 'components/shared/services/movie-api';

import style from './search-page.module.css';

const SearchPage = () => {
  const [itemsFilms, setItemsFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName') ?? '';
  const location = useLocation();

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const data = await searchFilm(movieName);
        setItemsFilms([...data.results]);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchFilm();
  }, [movieName]);

  const updateNameString = e => {
    e.target.value === ''
      ? setSearchParams({})
      : setSearchParams({ movieName: e.target.value });
  };

  const elements = itemsFilms.map(item => <SearchPageItem key={item.id} {...item} location={location} />);

  return (
    <div>
      <form className={style.SearchForm}>

        <input
          className={style.SearchFormInput}
          value={movieName}
          onChange={updateNameString}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
      </form>
      {itemsFilms.length > 0 && <ul>{elements}</ul>}
    </div>
  );
};

export default SearchPage;
