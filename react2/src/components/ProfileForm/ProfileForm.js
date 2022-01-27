import { useState } from "react";
import style from './ProfileForm.module.scss';
import iniqId from 'uniqid';

const ProfileForm = ({user, onSave}) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoSrc, setPhotoSrc] = useState(user.photoSrc);
  const [hobbies, setHobbies] = useState(user.hobbies);
  const [isLoading, setIsloading] = useState(false)
const handleOnClick = () => {
  setHobbies([
    ...hobbies,
    {id: iniqId(), name: ''},
  ])
};
const handleOnHobbieDelit = (hobbyToDelete) => {
  return () => {
    const filteredHobbies = hobbies.filter((hobby) => hobby.id !== hobbyToDelete.id);
    setHobbies(filteredHobbies)
  };
};

  const handleOnLastNameChange = (event) =>{
    setLastName(event.target.value)
  }

  const handleOnPhotoSrcChange = (event) =>{
    setPhotoSrc(event.target.value)
  }

  const handleOnFirstNameChange = (event) =>{
    setFirstName(event.target.value)
  }

  const handleOnHobbyChange = (editableHobby) => (event) =>{
    const newHobbies = hobbies.map((hobby) => ({...hobby}));
    const hobbyToUpdate = newHobbies.find((hobby) => hobby.id === editableHobby.id);
    hobbyToUpdate.name = event.target.value;
    setHobbies(newHobbies);
  };

  const handleProfileSave = async() => {
    setIsloading(true);
    await onSave ( {
      firstName,
      lastName,
      photoSrc,
      hobbies,

    })
    setIsloading(false);
  };

  return (
    <div className={style.profile}>
      <label>
        Photo URL:
        <input value={photoSrc} onChange={handleOnPhotoSrcChange}/>
      </label>
      <label>
        First Name:
        <input value={firstName} onChange={handleOnFirstNameChange}/>
      </label>
      <label>
        First Name:
        <input value={lastName} onChange={handleOnLastNameChange}/>
      </label>
      <div>
        <strong>Hobbies</strong>
        {hobbies.map((hobby) => (
          <div key={hobby.id}>
            <input value={hobby.name} onChange={handleOnHobbyChange(hobby)}/>
            <button onClick={handleOnHobbieDelit(hobby)}>x</button>
          </div>
        ))}
        <button onClick={handleOnClick}>Add</button>
      </div>
      <button onClick={handleProfileSave} disabled={isLoading}>{isLoading ? 'Loading': 'Save'}</button>
    </div>
  );
};
export default ProfileForm;