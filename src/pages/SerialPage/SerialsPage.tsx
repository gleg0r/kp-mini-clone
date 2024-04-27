import { FC, useEffect, useState } from 'react';
import s from './style.module.scss';
import { useGetTopSerialsQuery } from '../../store/api/serialsApi';
import { ITopSerials, ITopSerialsResult } from '../../core/mocks/apiTypes';
import { LoadingOutlined } from '@ant-design/icons';
import { Pagination, PaginationProps as antdPaginationProps } from 'antd';
import MainMovieCard from '../../components/MainMovieCard/MainMovieCard';
import { useNavigate, Link } from 'react-router-dom';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { useAppDispatch } from '../../store/hooks';
import { setMovieData } from '../../store/slices/movieSlice';

const SerialsPage: FC = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isError, isLoading } = useGetTopSerialsQuery(page);
  const dataTyped: ITopSerials = data!;
  const [totalPages, setTotalPages] = useState<number>(0);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const itemRender: antdPaginationProps['itemRender'] = (_, type, originalElement) => {
    if(type === 'next') return <a className={s.home__page}>Next</a>;
    if(type === 'prev') return <a className={s.home__page}>Prev</a>;
    if(type === 'jump-next') return  <a className={s.home__jump}><RightOutlined style={{color: '#ffffff'}} /></a>;
    if(type === 'jump-prev') return <a className={s.home__jump}><LeftOutlined style={{color: '#ffffff'}} /></a>; 

    return originalElement;
  };

  function setData(id: number) {
    dispatch(setMovieData(id));
  }

  useEffect(() => {
    if(dataTyped) {
      setTotalPages(dataTyped.total_pages);
    }
    if(isError) {
      navigate('/404');
    }
    console.log(data);
  }, [dataTyped, page, data, isError, navigate]);

  return (
    <>
      <main className={s.home}>
        <h2 className={s.home__title}>Лучшие сериалы</h2>
        {!isLoading ? (
          <Pagination
            showSizeChanger={false}
            onChange={(page) => setPage(page)}
            defaultCurrent={1}
            total={totalPages}
            itemRender={itemRender}
          />
        ) : <LoadingOutlined />}
        {!isLoading && !isError ? (
          <ul className={s.home__list}>
          {
            dataTyped.results.map((item: ITopSerialsResult) => {
              return (
                <li key={item.id} className={s.home__item} onClick={() => setData(item.id)}>
                  <Link to='/movie'>
                    <MainMovieCard
                      rating={Math.round(item.vote_average * 10) / 10}
                      title={item.name}
                      imgLink={item.poster_path}
                      date={item.first_air_date}
                    />
                  </Link>
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

export default SerialsPage;