import { FC, useEffect, useState } from 'react';
import s from './style.module.scss';
import { moviesApi } from '../../store/api/moviesApi';
import { ITopMovies, ITopMoviesResult } from '../../core/mocks/apiTypes';
import { LoadingOutlined } from '@ant-design/icons';
import { Pagination } from 'antd';
import MainMovieCard from '../../components/MainMovieCard/MainMovieCard';

const HomePage: FC = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading } = moviesApi.useGetTopMoviesQuery(page);
  const dataTyped: ITopMovies = data!;
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    if(dataTyped) {
      setTotalPages(dataTyped.total_pages);
    }
    console.log(data);
  }, [dataTyped, page]);

  return (
    <>
      <main className={s.home}>
        <h2 className={s.home__title}>Лучшие фильмы</h2>
        {!isLoading ? (
          <Pagination showSizeChanger={false} onChange={(page) => setPage(page)} defaultCurrent={1} total={totalPages} />
        ) : <LoadingOutlined />}
        {!isLoading ? (
          <ul className={s.home__list}>
          {
            dataTyped.results.map((item: ITopMoviesResult) => {
              return (
                <li key={item.id} className={s.home__item}>
                  <MainMovieCard
                    rating={Math.round(item.vote_average * 10) / 10}
                    title={item.title}
                    imgLink={item.poster_path}
                    date={item.release_date}
                  />
                </li>
              );
            })
          }
          </ul>
        ) : ''}
      </main>
    </>
  );
};

export default HomePage;