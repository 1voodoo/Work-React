import { Avatar, CircularProgress } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import getCountryInfo, { ICountryInfo } from '../api/getCountryInfo';

 const CountryInfo: FC = () => {
  const[countryInfo, setCountryInfo] = useState<ICountryInfo | null>(null);
  const { countryCode } = useParams();
  const navigate = useNavigate();
  const handleOnClick = (countryCode: string) => () => {
    navigate(`/countries/${countryCode}`)
  };

  const fethCountryInfo = async () => {
    setCountryInfo(null);
  const newCountryInfo = await getCountryInfo(countryCode!);
    setCountryInfo(newCountryInfo);

   }

   useEffect (() => {
    fethCountryInfo();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [countryCode]);

   return (
     <div>
       {!countryInfo && <CircularProgress color="secondary" />}
       {countryInfo && (
         <div>
           <div>{countryInfo.commonName}({countryInfo.officialName})-{countryInfo.region}</div>
           <div>{countryInfo.countryCode}</div>
           <div>
             {countryInfo.borders.map(({countryCode}) => (
             <Avatar onClick={handleOnClick(countryCode)}>{countryCode}</Avatar>
           ))}
           </div>
         </div>
       )}
     </div>
      
   );
 };

 export default CountryInfo;