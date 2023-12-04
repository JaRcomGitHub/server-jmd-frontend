import css from '../HomePage/HomePage.module.css';
import { NavLink } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <div className={css.page}>
        <NavLink className={css.logoLink} to="/ppk">
          <h1 className={css.h1}>Select PPK</h1>
        </NavLink>
      </div>
    </>
  );
}

export default HomePage;
