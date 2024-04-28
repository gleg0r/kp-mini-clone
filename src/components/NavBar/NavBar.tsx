import { FC } from 'react';
import s from './style.module.scss';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NavBar: FC = () => {
  const { pathname } = useLocation();

  return( 
    <>
      <nav className={s.nav}>
        {
        pathname === '/' 
          ? <Link to='/serials' className={s.nav__link}>Сериалы</Link>
          : <Link to='/' className={s.nav__link}>Фильмы</Link>
        } 
      </nav>
    </>
  );
};

export default NavBar;