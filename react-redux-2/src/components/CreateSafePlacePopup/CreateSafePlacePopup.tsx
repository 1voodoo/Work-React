import { Input, MenuItem, Select } from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeSafePlacePopup } from '../../store/PopupManagement/ActionCreators';
import PopupLayout from '../PopupLayuot/PopupLayout';
import MarkdownEditor from '@uiw/react-md-editor';
import { PlaceType } from '../../api/Places';
import PlaceTypeIcon from '../PlaceTypeIcon/PlaceTypeIcon';
import style from './CreateSafePlacePopup.module.scss'


const CreateSafePlacePopup: FC = () => {
  const dispatch = useDispatch();
  const [adress, setAdress] = useState('');
  const [description, setDescription] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [type, setType] = useState(PlaceType.Basement);
  const [capacity, setCapacity] = useState(18);

  const handleOnAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAdress(event.target.value)
  };

  const handleOnClose = () => {
    dispatch(closeSafePlacePopup());
  };

  return (
    <PopupLayout title="Create Safe Place" onClose={handleOnClose}>
      <div className={style.container}>
        <Input placeholder='Address' value={adress} onChange={handleOnAddressChange}/>
        <MarkdownEditor value={description} onChange={(value => setDescription(value || '') )} />
        <Input placeholder="Image Src" value={imageSrc} onChange={(event) => setImageSrc(event.target.value)} />
          <Select value={type} onChange={(event) => setType(event.target.value as PlaceType)}>
            {Object.values(PlaceType).map((currentPlaceType) => (
              <MenuItem value={currentPlaceType}>
                <PlaceTypeIcon type={currentPlaceType} />
                {currentPlaceType}
              </MenuItem>
            ))}
          </Select>
        <Input placeholder="Capacity" type="number" value={capacity} onChange={(event) => setCapacity(Number(event.target.value))} />
      </div>  
    </PopupLayout>
  );
};

export default CreateSafePlacePopup;