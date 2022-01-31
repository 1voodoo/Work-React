import Loader from 'react-js-loader';
import { useEffect, useState } from 'react';
import style from './App.module.scss';
import Api from './components/Api';
import Profile from './components/Profile/Profile';
import ApiRandom from './components/ApiRandom';

const App = () => {
  const [data, setData] = useState(null);
  const [data1, setData1] = useState(null);

  const feth = async () => {
    const newData = await Api();
    setData(newData);
  };
  const feth1 = async () => {
    const newData = await ApiRandom();
    setData1(newData);
  };

  useEffect(() => {
    feth();
    feth1();
  }, []);
  return (
    <div className={style.app}>
      {!data && <Loader type="box-up" bgColor={'#0000FF'} color={'#0000FF'} size={100} />}
      {data && <Profile user={data} user1={data1}/>}
    </div>
  );
};

export default App;
