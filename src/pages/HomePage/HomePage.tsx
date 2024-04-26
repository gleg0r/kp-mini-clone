import { FC, useEffect, useState } from 'react';
import s from './style.module.scss';
import { moviesApi } from '../../store/api/moviesApi';
import { ITopMovies, ITopMoviesResult } from '../../core/mocks/apiTypes';
import { LoadingOutlined } from '@ant-design/icons';
import { Pagination } from 'antd';

const HomePage: FC = () => {
  const { data, isLoading } = moviesApi.useGetTopMoviesQuery(1);
  const dataTyped: ITopMovies = data!;
  const [totalPages, setTotalPages] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if(dataTyped) {
      setTotalPages(dataTyped.total_pages);
    }
    console.log(page);
  }, [dataTyped, page]);

  return (
    <>
      <main className={s.home}>
        <h1>Лучшие фильмы</h1>
        {!isLoading ? (
          <Pagination showSizeChanger={false} onChange={setPage} defaultCurrent={1} total={totalPages} />
          //dataTyped.results.map((item: ITopMoviesResult) => {return `${JSON.stringify(item)}`;})
        ) : <LoadingOutlined />}
      </main>
    </>
  );
};

export default HomePage;