import { Avatar, Button } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import style from './App.module.scss';
import getApi, { IApi } from './components/Api/getApi';
import Sceletons from './components/Sceletons';

const  App: FC = () => {
  const [users, setUsrers] = useState<IApi[] | null>(null);
  const navigate = useNavigate();
  
  const fetch = async() => {
    setUsrers(null);
    const answer = await getApi();
    setUsrers(answer);
  };

  useEffect(() => {
    fetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const handleClick = (id: number) => () => {
    navigate(`/user/${id}`);
  };
  
  return (
    <div className={style.conteiner}>
        {!users && <Sceletons/>}
        {users && (
            <div className={style.main}>{users?.map((info) => (
          <div className={style.cont} key={info.id}><Avatar alt="foto" src="http://s1.iconbird.com/ico/0612/practika/w256h2561339698323user.png"></Avatar>
            <p className={style.p}>{info.name}</p>
            <Button onClick={handleClick(Number(info.id))} variant="contained" size='small'>info</Button>
          </div>
        ))}
            </div>
        )}
    </div>
  );
};

export default App;


