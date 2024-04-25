import './style.css';
import { Route, Routes } from 'react-router-dom';
import { RoutesName } from '../src/core/constants/Routes';
import LayoutMain from '../src/layout/LayoutMain';
import HomePage from '../src/pages/HomePage/HomePage';

function App() {

  return (
    <>
      <div id='app'>
        <Routes>
          <Route path={RoutesName.Root} element={<LayoutMain />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;