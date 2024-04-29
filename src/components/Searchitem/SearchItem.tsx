import { FC } from 'react';
import s from './style.module.scss';
import dateConverter from '../../core/features/dateConverter';
import { SearchItemProps } from '../../core/mocks/appTypes';

const SearchItem: FC<SearchItemProps> = ({ release_date, title, vote_average, poster_path }) => {
  return (
    <div className={s.item}>
      <img className={s.item__img} src={`https://image.tmdb.org/t/p/w185${poster_path}`} alt="poster" />
      <h4 className={s.item__rating}>{Math.round(vote_average * 10) / 10}</h4>
      <p className={s.item__title}>{title}</p>
      <p className={s.item__date}>{dateConverter(release_date!)}</p>
    </div>
  );
};

export default SearchItem;