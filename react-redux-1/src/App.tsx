import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { deleteCurrentDate, getCurrentDate } from './store/home';

const App:FC = () => {
  const dispatch = useDispatch();
  const { currentDate } = useSelector((state: RootState) => state.home);
  const handleOnCLick = () => {
    dispatch(deleteCurrentDate());
  }
  
  useEffect(() => {
    dispatch(getCurrentDate());
  },[]);

  return (
    <div>
      {!currentDate && <h1>Loading</h1>}
      {currentDate && currentDate.toISOString()}
      <button onClick={handleOnCLick}>Delet</button>
    </div>
  );
};
    

export default App;
