import css from './PPKs.module.css';
import { NavLink } from 'react-router-dom';

export const PPKsItem = ({ ppk }) => {
  return (
    <li className={css.ppksItem}>
      <NavLink className={css.ppkLink} to={ppk}>
        <h3 className={css.ppksTitleList}>{ppk}</h3>
        {/* <p className={css.ppksDescription}>{description}</p>
      <div className={css.ppksDateAndLink}>
        <p className={css.ppksDate}>{date}</p>
        <a
          href={url}
          className={css.ppksLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          Read more
        </a>
      </div> */}
      </NavLink>
    </li>
  );
};

export default PPKsItem;
