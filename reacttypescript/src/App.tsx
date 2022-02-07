import { Avatar, Button } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './App.module.scss';
import getApi, { IApi } from './components/Api/getApi';
import Sceletons from './components/Sceletons';

const  App: FC = () => {
  const [feth, setFeth] = useState<IApi[] | null>(null);
  const navigate = useNavigate();

  const fetc = async() => {
    const answer = await getApi();
    setFeth(answer);
  };

  useEffect(() => {
    fetc();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const handleClick = () => () => {
    navigate(`info/:id`);
  };
  

  return (
    <div className={style.conteiner}>
        {!feth && <Sceletons/>}
        {feth && (
            <div className={style.main}>{feth && feth.map((info) => (
                <div className={style.cont} key={info.id}><Avatar alt="foto" src="http://s1.iconbird.com/ico/0612/practika/w256h2561339698323user.png"></Avatar>
                    <p className={style.p}>{info.name}</p>
                    <Button onClick={handleClick()} variant="contained" size='small'>info</Button>
                </div>
            ))}
            </div>
        )}
    </div>
  );
};

export default App;


