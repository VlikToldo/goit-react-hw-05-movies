import { Link } from 'react-router-dom';

import style from './home-page-item.module.css'

const PageItem = ({ title, id, location }) => {
  return (
    <li >
      <Link className={style.movieItem} to={`movie-search/${id}`} state={{from: location}}>{title}</Link>
    </li>
  );
};

export default PageItem;
