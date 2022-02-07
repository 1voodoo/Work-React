import { Button } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getApi, { IApi } from "./Api/getApi";
import style from './info.module.scss';


const Info: FC = () => {
  
  const [feth, setFeth] = useState<IApi[] | null>(null);
  const navigate = useNavigate();

  const handleClick = () => () => {
    navigate('/');
  };

  async function fetc() {
    const answer = await getApi();
    setFeth(answer);
  };

  useEffect(() => {
    fetc();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className={style.continer1} >
     <Button className={style.button} onClick={handleClick()} variant="contained">Back Home</Button>
       <div className={style.continer2} >{feth && feth.map((info) => (
          <div key={info.name}>
            <div className={style.continer} >
              <div className={style.con}>
              <img src="https://img.icons8.com/doodle/48/000000/ringer-volume--v1.png" alt="foto"/>
                <p>{info.phone}</p>
              </div>
              <div className={style.con}>
                  <img src="https://img.icons8.com/external-photo3ideastudio-lineal-color-photo3ideastudio/64/000000/external-city-hostel-photo3ideastudio-lineal-color-photo3ideastudio.png" alt="foto"/>
                  <p>{info.address.city}</p>
              </div>
              <div className={style.con}>
              <img src="https://img.icons8.com/external-detailed-filled-line-rakhmat-setiawan/61/000000/external-location-location-filled-line-detailed-filled-line-rakhmat-setiawan-21.png"  alt="foto"/>
                <p>{info.address.street}</p>
              </div>
              <div className={style.con}>
                  <img src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-website-job-amp-resume-xnimrodx-lineal-color-xnimrodx-2.png" alt="foto"/>
                  <p>{info.website}</p>
              </div>
            </div>
        </div>
      ))}</div>

    </div>
  );
};

export default Info;


