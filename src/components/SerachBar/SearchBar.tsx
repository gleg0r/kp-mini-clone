import { FC, useEffect, useState } from 'react';
import s from './style.module.scss';
import useDebounce from '../../core/hooks/useDebounce';
import { useGetMultiSearchItemsQuery } from '../../store/api/searchApi';
import SearchItem from '../Searchitem/SearchItem';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { setMovieData } from '../../store/slices/movieSlice';

const SearchBar: FC = () => {'';
  const [value, setValue] = useState<string>('');
  const debouncedSearchQuery = useDebounce(value, 500);
  const { data, isLoading } = useGetMultiSearchItemsQuery(debouncedSearchQuery);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(data);
  }, [data]);

  function handleChange(str: string) {
    setValue(str);
  }

  function handleClick(id: number) {
    dispatch(setMovieData(id));
  }

  return (
    <div className={s.search}>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
        placeholder="Search..."
        className={s.search__input}
      />
      <ul>
        {
          !isLoading && data && data?.results.length > 0 ? <div className={s.search__results}>
            {
              data.results.map((item) => {
                return <li key={item.id} onClick={() => handleClick(item.id)}>
                  <Link to={item.media_type === 'tv' ? 'serial' : 'movie'}>
                    <SearchItem
                      release_date={item.release_date ? item.release_date : item.first_air_date}
                      title={item.title ? item.title! : item.name!}
                      vote_average={item.vote_average}
                      poster_path={item.poster_path}
                    />;
                  </Link>;
                </li>;
              })
            }
          </div> : ''
        }
      </ul>
    </div>
  );
};

export default SearchBar;