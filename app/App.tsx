import './style.css';
import { Route, Routes } from 'react-router-dom';
import { RoutesName } from '../src/core/constants/Routes';
import LayoutMain from '../src/layout/LayoutMain';
import HomePage from '../src/pages/HomePage/HomePage';
import NotFoundPage from '../src/pages/NotFoundPage/404';
import MoviePage from '../src/pages/MoviePage/MoviePage';
import SerialsPage from '../src/pages/SerialPage/SerialsPage';

function App() {

  return (
    <>
      <div id='app'>
        <Routes>
          <Route path={RoutesName.Root} element={<LayoutMain />}>
            <Route index element={<HomePage />} />
            <Route path='/movie' element={<MoviePage />} />
            <Route path='/serials' element={<SerialsPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;