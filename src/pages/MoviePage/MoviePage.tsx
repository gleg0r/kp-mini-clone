import { FC, useState, useEffect } from 'react';
import s from './style.module.scss';
import { useAppSelector } from '../../store/hooks';
import { useGetMovieInformationQuery } from '../../store/api/moviesApi';
import { IMovieInfo } from '../../core/mocks/apiTypes';
import dateConverter from '../../core/features/dateConverter'; 
import timeConverter from '../../core/features/timeConverter';

const MoviePage: FC = () => {
  const { movieId } = useAppSelector((state) => state.movieData);
  const {data, isLoading} = useGetMovieInformationQuery(movieId);
  const [movieData, setMovieData] = useState<IMovieInfo>();

  useEffect(() => {
    setMovieData(data);
    console.log(data);
  }, [data]);

  return(
    <main className={s.movie}>
      {
        !isLoading && movieData ? (
          <>
            <div className={s.movie__container}>
              <h2 className={s.movie__title}>{movieData.title}</h2>
              <h3 className={s.movie__rating}>{Math.round(movieData.vote_average * 10) / 10}</h3>
              <div className={s.movie__text}>
                <p className={s.movie__desc}>{movieData.overview}</p>
                <ul className={s.movie__list}>
                  <li className={s.movie__item}>Бюджет: <span>{movieData.budget} $</span></li>
                  <li className={s.movie__item}>Страна: <span>{movieData.origin_country}</span></li>
                  <li className={s.movie__item}>Продолжительность: <span>{timeConverter(movieData.runtime)}</span></li>
                  <li className={s.movie__item}>Дата выхода: <span>{dateConverter(movieData.release_date)}</span></li>
                  <li className={s.movie__item}>Жанры: <span>{movieData.genres.map((item) => item.name).join(', ')}</span></li>
                </ul>
              </div>
            </div>
            <img className={s.movie__img} src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt='Movie`s poster' />
          </>
        ) : ''
      }
    </main>
  );
};

export default MoviePage;