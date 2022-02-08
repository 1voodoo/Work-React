import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import style from './App.module.scss';
import getAllCountries, { IBaseAllCountry } from './components/api/getAllCountries';

const App: FC = () => {
  const [feth, setFeth] = useState<IBaseAllCountry[] | null>(null);
 
  const getFetc = async() => {
    const answer = await getAllCountries();
    setFeth(answer);
  };

  useEffect(() => {
    getFetc();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const handleChange = () => {
    setFeth(feth);
  };
  console.log(feth?.map(info => info.name));
  return (
    <div className={style.conteiner}>
  <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={feth}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
{/* <div>{feth!.map((info) => (<p>{info.name}</p>
  ))} </div> */}
  </div>
  );
}

export default App;
