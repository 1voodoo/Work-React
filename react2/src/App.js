import { useEffect, useState } from "react";
import ButtonLink from "./components/ButtonLink/ButtonLink";
import Profile from "./components/Profile/Profile";
import ProfileForm from "./components/ProfileForm/ProfileForm";
import {Hearts} from 'react-loader-spinner';
import getProfile from "./api/getProfile.js/api/getProfile";
import updeitProfile from "./api/getProfile.js/updeitProfile";

const UserProfileContainerStyles = {
  display: 'flex',
  'justify-content': 'space-around',
}
const App = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState(null);
 

  const handleEdit = () => {
    setIsEdit(true);
  }

  
  const handleSave = async(newPrifileData) => {
    const updateData = await updeitProfile(newPrifileData);
    setData(updateData);
    setIsEdit(false);
  };

  const fethProfileData = async() => {
    const newData = await getProfile();
    setData(newData);
  };

  useEffect(() => {
    fethProfileData();
  }, []);

  return (
    <div style={UserProfileContainerStyles}>
      <div>User Profile{' '}</div>
      {!isEdit && data && (
        <ButtonLink onClick={handleEdit}>
        Edit
        </ButtonLink>
      )}
     <div/>
     {!data && <Hearts/>}
     {!isEdit && data && <Profile user={data}/>}
     {isEdit && data && <ProfileForm user={data} onSave={handleSave}/>}
    </div>
  );
};

export default App;
