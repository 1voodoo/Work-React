import style from './Button.module.scss';

const ButtonLink = ({children, onClick}) => {
  return (
    <div className={style.buttonLink} onClick={onClick} >
      {children}
    </div>
  );
};
export default ButtonLink;