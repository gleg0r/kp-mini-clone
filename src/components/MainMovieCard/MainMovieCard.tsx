import { FC } from 'react';
import s from './style.module.scss';
import { CardProps } from '../../core/mocks/appTypes';
import dateConverter from '../../core/features/dateConverter';

const MainMovieCard: FC<CardProps> = ({ rating, imgLink, date, title }) => {
  return (
    <div className={s.card}>
      <img className={s.card__img} src={`https://image.tmdb.org/t/p/w300${imgLink}`} alt='poster' />
      <div className={s.card__block}>
        <h3 className={s.card__rating}>{rating}</h3>
        <div className={s.card__text}>
          <p className={s.card__desc}>{title}</p>
          <p className={s.card__desc}>{dateConverter(date)}</p>
        </div>
      </div>
    </div>
  );
};

export default MainMovieCard;