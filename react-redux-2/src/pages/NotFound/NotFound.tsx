import { FC } from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import NotFoundImageSrc from './photo.jpeg'
import style from './NotFound.module.scss'



const NotFound: FC = () => {
  return (
    <PageLayout>
      <div className={style.container}>
       <img src= {NotFoundImageSrc} alt='Not Found'/>
        <h1 className={style.title}>Not Found</h1>
      </div>
    </PageLayout>
  );
};

export default NotFound;