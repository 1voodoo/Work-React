import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@mui/material';

const CountryHolidays: FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const handlOnClick = () => {
    navigate(`/countries/${params.countryCode}`);
  };
  return (
    <div>
      Country Holidays: {params.countryCode}

     <Button onClick={handlOnClick}> Go to Country Info</Button>
    </div>
  );
};

export default CountryHolidays;