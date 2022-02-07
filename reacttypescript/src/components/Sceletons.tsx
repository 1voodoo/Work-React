import { Skeleton } from '@mui/material';
import { FC } from 'react';
import style from './Sceleton.module.scss';

const Sceletons: FC = () => {
  return (
  <div>
      <div className={style.skeleton}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" width={100} height={20} />
        <Skeleton variant="rectangular" width={50} height={25} />
      </div>
      <div className={style.skeleton}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" width={100} height={20} />
        <Skeleton variant="rectangular" width={50} height={25} />
      </div>
      <div className={style.skeleton}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" width={100} height={20} />
        <Skeleton variant="rectangular" width={50} height={25} />
      </div>
      <div className={style.skeleton}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" width={100} height={20} />
        <Skeleton variant="rectangular" width={50} height={25} />
      </div>
      <div className={style.skeleton}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" width={100} height={20} />
        <Skeleton variant="rectangular" width={50} height={25} />
      </div>
      <div className={style.skeleton}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" width={100} height={20} />
        <Skeleton variant="rectangular" width={50} height={25} />
      </div>
      <div className={style.skeleton}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" width={100} height={20} />
        <Skeleton variant="rectangular" width={50} height={25} />
      </div>
      <div className={style.skeleton}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" width={100} height={20} />
        <Skeleton variant="rectangular" width={50} height={25} />
      </div>
      <div className={style.skeleton}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" width={100} height={20} />
        <Skeleton variant="rectangular" width={50} height={25} />
      </div>
      <div className={style.skeleton}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" width={100} height={20} />
        <Skeleton variant="rectangular" width={50} height={25} />
      </div>
  </div>
  );
};

export default Sceletons;