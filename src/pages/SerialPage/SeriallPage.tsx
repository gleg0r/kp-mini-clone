import { FC, useState, useEffect } from 'react';
import s from './style.module.scss';
import { useAppSelector } from '../../store/hooks';
import { ISerialInfo } from '../../core/mocks/apiTypes';
import dateConverter from '../../core/features/dateConverter'; 
import timeConverter from '../../core/features/timeConverter';
import { useGetSerialInformationQuery } from '../../store/api/serialsApi';

const SerialPage: FC = () => {
  const { movieId } = useAppSelector((state) => state.movieData);
  const {data, isLoading} = useGetSerialInformationQuery(movieId);
  const [serialData, setSerialData] = useState<ISerialInfo>();

  useEffect(() => {
    setSerialData(data);
    console.log(data);
  }, [data]);

  return(
    <main className={s.movie}>
      {
        !isLoading && serialData ? (
          <>
            <div className={s.movie__container}>
              <h2 className={s.movie__title}>{serialData.name}</h2>
              <h3 className={s.movie__rating}>{Math.round(serialData.vote_average * 10) / 10}</h3>
              <div className={s.movie__text}>
                <p className={s.movie__desc}>{serialData.overview}</p>
                <ul className={s.movie__list}>
                  <li className={s.movie__item}>Дата первой серии: <span>{dateConverter(serialData.first_air_date)}</span></li>
                  <li className={s.movie__item}>Сезонов: <span>{serialData.number_of_seasons}</span></li>
                  <li className={s.movie__item}>Серий: <span>{serialData.number_of_episodes}</span></li>
                  <li className={s.movie__item}>Страна: <span>{serialData.origin_country}</span></li>
                  <li className={s.movie__item}>Продолжительность серии: <span>{serialData.episode_run_time.length > 0 ? timeConverter(serialData.episode_run_time[0]) : '-'}</span></li>
                  <li className={s.movie__item}>Жанры: <span>{serialData.genres.map((item) => item.name).join(', ')}</span></li>
                </ul>
              </div>
            </div>
            <img className={s.movie__img} src={`https://image.tmdb.org/t/p/w500${serialData.poster_path}`} alt='Movie`s poster' />
          </>
        ) : ''
      }
    </main>
  );
};

export default SerialPage;