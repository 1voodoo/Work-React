import { AppBar, Button, Container } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './PageLayout.module.scss'

const PageLayout: FC = ({children}) => {
  const navigat = useNavigate();
  
  const handleGoToHome = () => {
    navigat('/');
  }

  return (
    <div className={style.mainContainer}>
      <AppBar position='sticky' className={style.AppBar}>
        <Container className={style.container}>
          <div className={style.logo} onClick={handleGoToHome}>
            Ukraine
          </div>
          <Button variant='contained' color='secondary'>Add New Safe Place</Button>
        </Container>
      </AppBar>
      {children}
    </div>
  );
};

export default PageLayout;