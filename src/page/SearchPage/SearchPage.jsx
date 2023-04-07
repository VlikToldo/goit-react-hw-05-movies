import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import SearchPageItem from '../../components/SearchPageItem/SearchPageItem';
import { searchFilm } from '../../shared/services/movie-api';

import style from './search-page.module.css';

const SearchPage = () => {
  const [itemsFilms, setItemsFilms] = useState([]);
  const [nameFilm, setNameFilm] = useState('')
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

  const formSubmit = (e) =>{
    e.preventDefault();
    nameFilm === ''
    ? setSearchParams({})
    : setSearchParams({movieName: nameFilm})
  }

  const updateNameString = e => {
    setNameFilm(e.target.value);
  };

  const elements = itemsFilms.map(item => <SearchPageItem key={item.id} {...item} location={location} />);

  return (
    <div>
      <form className={style.SearchForm} onSubmit={formSubmit}>
        <button className={style.searchButton} type="submit">Пошук</button>
        <input
          className={style.SearchFormInput}
          value={nameFilm}
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
