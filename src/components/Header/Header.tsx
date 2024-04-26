import { FC } from 'react';
import s from './style.module.scss';
import NavBar from '../UI/NavBar/NavBar';

const Header: FC = () => {

  return (
    <header className={s.header}>
      <h1 className={s.header__logo}>кино<span>ночь</span></h1>
      <NavBar />
    </header>
  );
};

export default Header;