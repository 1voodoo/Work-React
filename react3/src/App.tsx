import { Button, CircularProgress, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './App.module.scss';
import getAllCountries, { IBaseAllCountry } from './components/api/getAllCountries';

const App: FC = () => {
  const [allCountry, setAllCountry] = useState<IBaseAllCountry[] | null>(null);
  
  const getFetch = async() => {
    const answer = await getAllCountries();
    setAllCountry(answer);
  };

  const navigate = useNavigate();

  useEffect(() => {
    getFetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const [code, setCode] = useState('')
  const handleChange = (event:any):void => {
    setCode(event.target.value);
  }

  const handleOnClick = (code: string)=> () => {
    if (code){
      navigate(`/countries/${code}`);
    }else {
      alert('поле не может быть пустым');
    }
    
  }
 console.log(code);
 
  return (
    <div className={style.conteiner}>
      {!allCountry && <CircularProgress color="secondary" />}
      {allCountry && (
        <Box sx={{ minWidth: 300}}>
          <FormControl className={style.form}>
              <InputLabel id="demo-simple-select-label">Choose you Country</InputLabel>
                  <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={code}
                      label="Choose you Country"
                      onChange={handleChange}
                      
                     
                  >
              {allCountry.map((country) => (
                  <MenuItem
                    key={`${country.name}${country.countryCode}`}
                    value={country.countryCode}>
                       <img className={style.img}
                          loading="lazy"
                          width="20"
                          src={`https://flagcdn.com/w20/${country.countryCode.toLowerCase()}.png`}
                          srcSet={`https://flagcdn.com/w40/${country.countryCode.toLowerCase()}.png 2x`}
                          alt={`Flag of ${country.name}`}
                        />
                      {country.name}
                  </MenuItem>
               ))}
          
                  </Select>
                  <Button className={style.btn} onClick={handleOnClick(code)} variant="contained">Show Country</Button>
       </FormControl> 
          </Box> 
    )}
  </div>
  );
}

export default App;
