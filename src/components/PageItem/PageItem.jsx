import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

import style from './home-page-item.module.css'

const PageItem = ({ title, id, location }) => {
  return (
    <li >
      <Link className={style.movieItem} to={`movie-search/${id}`} state={{from: location}}>{title}</Link>
    </li>
  );
};

export default PageItem;

PageItem.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.object,
  id: PropTypes.string.isRequired
}
