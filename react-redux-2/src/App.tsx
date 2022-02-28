import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import PlaceDetails from './pages/PlaceDetailss/PlaceDetails';

const  App:FC = () => {
  return (
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/places/:id' element={<PlaceDetails />}/>
  </Routes>
  );
}

export default App;
