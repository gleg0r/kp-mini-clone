import { FC } from 'react';
import s from './style.module.scss';
import { Link } from 'react-router-dom';


const NavBar: FC = () => {

  return(
    <>
      <nav className={s.nav}>
        <Link to='/serials' className={s.nav__link}>Сериалы</Link>
        <Link to='/persons' className={s.nav__link}>Люди</Link>
      </nav>
    </>
  );
};

export default NavBar;