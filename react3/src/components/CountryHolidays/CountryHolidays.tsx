import { CircularProgress } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import getHolidays, { IHoliday } from '../api/getHolidays';

const CountryHolidays: FC = () => {
  const { countryCode } = useParams();
  const location = useLocation();

  const serchParams = new URLSearchParams(location.search);
  const dateAssString = serchParams.get('date');

  const [holidays, setHolidays] = useState<IHoliday[] | null>(null);
  
  const fetchHolidays = async () => {
    const date = dateAssString
    ? new Date(dateAssString)
    : new Date ();
    const newHolidays = await getHolidays(countryCode!, date.getFullYear());
    setHolidays(newHolidays);
  };

  useEffect(() => {
    fetchHolidays();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
     {!holidays && <CircularProgress color="secondary" />}
     {holidays && holidays.map((info) => (
       <div key={`${info.name}${info.date}`}>
         {info.localName}({info.name}) - {info.date}
       </div>
     ))}

    </div>
  );
};

export default CountryHolidays;