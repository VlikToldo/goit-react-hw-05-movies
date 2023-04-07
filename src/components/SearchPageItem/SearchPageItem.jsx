import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import style from './search-page-item.module.css'

const SearchPageItem = ({ title, id, location }) => {
  return (
    <li>
      <Link className={style.movieItemS} to={`${id}`} state={{from: location}}>{title}</Link>
    </li>
  );
};

export default SearchPageItem;

SearchPageItem.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.object,
  id: PropTypes.string.isRequired,
};