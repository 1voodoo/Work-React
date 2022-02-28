import { Button, CircularProgress, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';
import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import getHolidays, { IHoliday } from '../api/getHolidays';
import style from './CountryHolidays.module.scss';

const CountryHolidays: FC = () => {
  const { countryCode } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const serchParams = new URLSearchParams(location.search);
  const dateAssString = serchParams.get('date');

  const [holidays, setHolidays] = useState<IHoliday[] | null>(null);
  const [year, setYear] = useState(0);
 
  
  const fetchHolidays = async () => {
    setYear(year)
    const date = dateAssString
    ? new Date(dateAssString)
    : new Date ();
    const newHolidays = await getHolidays(countryCode!, date.getFullYear() - year);
    setHolidays(newHolidays);
  };
  const handleOnClick2 = () => {
    navigate('/')
  };

  const handleChange = (event:any) => {
    setYear(event.target.value);
  };

  useEffect(() => {
    fetchHolidays();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.conteiner}>
     {!holidays && <CircularProgress color="secondary" />}
     {holidays && holidays.map((info) => (
       <div className={style.conteinerText} key={`${info.name}${info.date}`}>
         {info.localName}({info.name}) - {info.date}
       </div>   
     ))}
     <div className={style.box}>
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year}
          label="year"
          onChange={handleChange}
        >
          <MenuItem value={0}>2022</MenuItem>
          <MenuItem value={1}>2021</MenuItem>
          <MenuItem value={2}>2020</MenuItem>
          <MenuItem value={3}>2019</MenuItem>
          <MenuItem value={4}>2018</MenuItem>
          <MenuItem value={5}>2017</MenuItem>
          <MenuItem value={6}>2016</MenuItem>
          <MenuItem value={7}>2015</MenuItem>
          <MenuItem value={8}>2014</MenuItem>
          <MenuItem value={9}>2013</MenuItem>
          <MenuItem value={10}>2012</MenuItem>
          <MenuItem value={11}>2011</MenuItem>
          <MenuItem value={12}>2010</MenuItem>
          <MenuItem value={13}>2009</MenuItem>
          <MenuItem value={14}>2008</MenuItem>
          <MenuItem value={15}>2007</MenuItem>
          <MenuItem value={16}>2006</MenuItem>
          <MenuItem value={17}>2005</MenuItem>
          <MenuItem value={18}>2004</MenuItem>
          <MenuItem value={19}>2003</MenuItem>
          <MenuItem value={20}>2002</MenuItem>
          <MenuItem value={21}>2001</MenuItem>
          <MenuItem value={22}>2000</MenuItem>
        </Select>
        <Button onClick={fetchHolidays} variant="contained">Select Year</Button>
      </FormControl>
    </Box>
    <Button  onClick={handleOnClick2} variant="contained">HOME</Button>
    </div>
    </div>
  );
};

export default CountryHolidays;