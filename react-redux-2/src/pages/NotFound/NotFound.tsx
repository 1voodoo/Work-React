import { FC } from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import NotFoundImageSrc from './photo.jpeg'
import style from './NotFound.module.scss'
import CreateSafePlacePopup from "../../components/CreateSafePlacePopup/CreateSafePlacePopup";


const NotFound: FC = () => {
  return (
    <PageLayout>
      <div className={style.container}>
       <img src= {NotFoundImageSrc} alt='Not Found'/>
        <h1 className={style.title}>Not Found</h1>
      </div>
      <CreateSafePlacePopup/>
    </PageLayout>
  )
}

export default NotFound;