import { FC } from 'react';
import { Route, Routes } from 'react-router';
import Error404 from './pages/Error404/Error404';
import Home from './pages/Home/Home';
import MenuDiscription from './pages/MenuDiscription/MenuDiscription';

const App: FC = () => {
  return (
    <Routes>
      <Route path= '/' element={<Home />} />
      <Route path= '/menu/:id' element={<MenuDiscription />} />
      <Route path= '*' element={<Error404 />} />
    </Routes>
  );
};

export default App;
