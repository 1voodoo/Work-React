import clsx from 'clsx';
import { useState } from 'react';
import styles from './CurrentDate.module.scss';

const CurrentDate = ({prefix}) => {
  const [isBold, setIsBold] = useState(false)
  const now = new Date();
  const handleOnClcick = () => {
    setIsBold(!isBold);
  };
  return (
    <div className={clsx(styles.red, isBold && styles.bold)}
    onClick={ handleOnClcick}
    >
      {prefix} = {now.getSeconds()}
    </div>
  );
};



export default CurrentDate;