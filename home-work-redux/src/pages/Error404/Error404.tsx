import { FC } from "react";
import { useNavigate } from "react-router";
import style from './Error404.module.scss';


const Error404: FC = () => {

  const navigate = useNavigate();
  const handlOnClick = () => {
    navigate('/');
  };

  return (
    <div className={style.container}>
      <p className={style.p}>Error</p>
      <button onClick={handlOnClick}>HOME</button>
    </div>
  );
};

export default Error404;