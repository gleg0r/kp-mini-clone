import { FC } from 'react';
import s from './style.module.scss';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';

const Header: FC = () => {

  return (
    <header className={s.header}>
      <Link to='/'><h1 className={s.header__logo}>кино<span>ночь</span></h1></Link>
      <NavBar />
    </header>
  );
};

export default Header;