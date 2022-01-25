import { useState } from "react";
import ButtonLink from "./components/ButtonLink/ButtonLink";
import Profile from "./components/Profile/Profile";
import ProfileForm from "./components/ProfileForm/ProfileForm";


const TEST_DATA = {
  firstName: 'Ighar',
  lastName: 'Belozor',
  photoSrc: 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg',
  hobbies: [{id: '1', name: 'quitar'},{id: '3', name: 'lalalal'},{id: '2', name: 'lolololo'}]
};
const UserProfileContainerStyles = {
  display: 'flex',
}
const App = () => {
  const handleEdit = () => {
    setIsEdit(true);
  }

  const [isEdit, setIsEdit] = useState(false);
  
  const handleSave = () => {
    setIsEdit(false);
  }

  return (
    <div style={UserProfileContainerStyles} className="App">
      <div>User Profile{' '}</div>
      <ButtonLink onClick={isEdit ? handleSave : handleEdit}>
        {isEdit ? 'Save' : 'Edit'}
      </ButtonLink>
     
     {!isEdit && <Profile user={TEST_DATA}/>}
     {!isEdit && <ProfileForm user={TEST_DATA}/>}
    </div>
  );
};

export default App;
