import { Avatar, Button, CircularProgress } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import getCountryInfo, { ICountryInfo } from '../api/getCountryInfo';
import style from './CountryInfo.module.scss';


 const CountryInfo: FC = () => {
  const[countryInfo, setCountryInfo] = useState<ICountryInfo | null>(null);
  const { countryCode } = useParams();
  const navigate = useNavigate();

  const handleOnClick = (countryCode: string) => () => {
    navigate(`/countries/${countryCode}`)
  };
  
  const handleOnClick1 = (countryCode: string) => () => {
    navigate(`/countries/${countryCode}/holidays`)
  };

  const handleOnClick2 = () => {
    navigate('/')
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
     <div className={style.conteiner}>
       {!countryInfo && <CircularProgress color="secondary" />}
       {countryInfo && (
         <div>
           <div><h1>{countryInfo.commonName}({countryInfo.officialName})-{countryInfo.region}</h1></div>
           <div><span>CountryCode:</span>{countryInfo.countryCode}</div>
           <div className={style.conteinerAvatar}>
             {countryInfo.borders.map(({countryCode}) => (
               <div  className={style.avatar} key={countryCode}>
                 <Avatar 
                 src={`https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`}
                 variant="rounded"
                 sx={{ width: 40, height: 30 }} 
                 alt={countryCode}
                 onClick={handleOnClick(countryCode)}
                 >{countryCode}</Avatar>
               </div>
           ))}
           </div>
           <div className={style.conteinerBtn}>
           <Button  onClick={handleOnClick2} variant="contained">HOME</Button>
           <Button  onClick={handleOnClick1(countryInfo?.countryCode)} variant="contained">Holidays</Button>
           
           </div>
         </div>
       )}
     </div>
      
   );
 };

 export default CountryInfo;