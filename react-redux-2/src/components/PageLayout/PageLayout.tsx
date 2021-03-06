import { Alert, AppBar, Button, Container, Snackbar } from '@mui/material';
import { FC, useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IPlace } from '../../api/Places';
import { ThemeContext } from '../../providers/ThemeProvider';
import { RootState, useAppDispatch } from '../../store';
import { createPlace, getPlaces } from '../../store/Place/ActionCreators';
import { closeSafePlacePopup, openSafePlacePopup } from '../../store/PopupManagement/ActionCreators';
import CreateSafePlacePopup from '../CreateSafePlacePopup/CreateSafePlacePopup';
import { ICraeteSafePlaceFormData } from '../CreateSafePlacePopup/validateCraeteSafePlaceForm';
import styles from './PageLayout.module.scss';

const PageLayout: FC = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isCreateSafePlacePopupOpen } = useSelector((state: RootState) => state.popupManagement);
  const [isSuccessToasterShow, setIsSuccessToasterShow] = useState(false);
  const [isErrorToasterShow, setIsisErrorToasterShowToasterShow] = useState(false);
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);


  const handleGoToHome = () => {
    navigate('/');
  };

  const handleAddNewSavePlace = () => {
    dispatch(openSafePlacePopup());
  };

  const handleOnSave = async (data: ICraeteSafePlaceFormData) => {
    try{
      const newPlace:IPlace = await dispatch(createPlace(data)).unwrap();
      setIsSuccessToasterShow(true);
      dispatch(closeSafePlacePopup());
      dispatch(getPlaces());
      
      navigate(`/place/${newPlace.id}`)
    } catch (error) {
      setIsisErrorToasterShowToasterShow(true);
    }
  };

  const handleSuccesTosterClose = () => {
    setIsSuccessToasterShow(false);
  }
  const handleErrorTosterClose = () => {
    setIsSuccessToasterShow(false);
  }
   const handleChangeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={styles.mainContainer}>
      <AppBar position="sticky" className={styles.appBar} color={isDarkTheme ? 'primary': 'secondary'}>
        <Container className={styles.container}>
          <div className={styles.logo} onClick={handleGoToHome}>Ukraine</div>
          <Button variant="contained" color="secondary" onClick={handleChangeTheme}>Change Theme</Button>
          <Button variant="contained" color="secondary" onClick={handleAddNewSavePlace}>Add New Safe Place</Button>
        </Container>
      </AppBar>
      {children}
      {isCreateSafePlacePopupOpen && <CreateSafePlacePopup onSave={handleOnSave} />}
      <Snackbar open={isSuccessToasterShow} autoHideDuration={2000} onClose={handleSuccesTosterClose}>
        <Alert>
          New Safe Place has been created!
        </Alert>
      </Snackbar>
      <Snackbar open={isErrorToasterShow} autoHideDuration={2000} onClose={handleErrorTosterClose}>
        <Alert severity='error'>
          Oooooops sonthing went wrong!!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default PageLayout;