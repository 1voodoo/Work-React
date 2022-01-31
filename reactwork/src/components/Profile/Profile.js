import { useState } from 'react';
import style from './Profile.module.scss';

const Profile = ({ user, user1 }) => {
  const [aset, setAset] = useState(true);
  function name() {
    setAset(false);
  }

  return (
    <div className={style.container1}>
      {user.map((person, id) => <div className={style.container}key={id}>
        <img alt='foto' className={style.img} src={user1}/>
        <p><span>Name:</span> {person.name}</p>
        <p><span>User Name: </span>{person.username}</p>
        <p><span>Email: </span>{person.email}</p>
        <p><span>Phone: </span>{person.phone}</p>
        <p><span>Website: </span>{person.website}</p>
        </div>)}
     <button className={style.button} onClick={name}>{aset ? 'lol' : 'lol1111'}</button>
    </div>
  );
};

export default Profile;
