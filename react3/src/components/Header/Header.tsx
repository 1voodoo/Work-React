import { FC } from 'react';
// import style from './Header.module.scss';
import { Button } from '@mui/material';

interface IHeaderProps {
  buttonText?: string;
  onClick?: () => void;
};

const Header: FC<IHeaderProps> = ({ children, buttonText, onClick}) => {
   return (
     <h1>
       {children}
       <Button variant='outlined' onClick={onClick}>{buttonText}</Button>
     </h1>
   );
};

export default Header;
