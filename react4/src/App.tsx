import style from './App.module.scss';
import { FC, useEffect, useState } from "react";
import Api, { IgetApi} from "./components/Api";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Charts from './components/Charts';
import CircularProgress from '@mui/material/CircularProgress';

const  App: FC = () => {
  const [covid, setCovid] = useState<IgetApi | null>(null);
  const [total, SetTotal] = useState();
  const date = covid?.Countries[0].Date.slice(0, 10);

  const handleChange = (event:any):void => {
      SetTotal(event.target.value);
  };
  
  
  const getApi = async () => {
    const answerApi = await Api();
    setCovid(answerApi); 
  }
  
  useEffect (() => {
    getApi();
  },[]);
   
  return (
    <div className={style.body}>
      <div className={style.conteiner}>
        {!covid && <CircularProgress />}
        {covid && (
          <><p className={style.date}><span className={style.dateP}>НА</span>{date}</p><Box sx={{ minWidth: 250 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Выберите страну</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={total}
                label="Выберите страну"
                onChange={handleChange}>

                {covid?.Countries.map((item) => (
                  <MenuItem
                    key={item.ID}
                    value={item.TotalConfirmed}>
                    <img className={style.img}
                      loading="lazy"
                      width="20"
                      src={`https://flagcdn.com/w20/${item.CountryCode.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w40/${item.CountryCode.toLowerCase()}.png 2x`}
                      alt={`Flag of ${item.Country}`} />
                    {item.Country}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box><h1 className={style.h1}>Всего подтверждено заболевших<span className={style.spa}>
            {total ? total : '0'}</span>человек</h1></>
            )}
      </div>
        <Charts/>
    </div>
  );
};

export default App;