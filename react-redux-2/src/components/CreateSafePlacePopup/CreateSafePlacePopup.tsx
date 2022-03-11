import { Button, MenuItem, Select, TextField } from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { PlaceType } from '../../api/Places';
import PlaceTypeIcon from '../PlaceTypeIcon/PlaceTypeIcon';
import styles from './CreateSafePlacePopup.module.scss';
import PopupLayout from '../PopupLayuot/PopupLayout';
import validateCreateSafePlaceForm, { ICraeteSafePlaceFormData, IValidateCreateSafePlaceFormResult } from './validateCraeteSafePlaceForm';
import { closeSafePlacePopup } from '../../store/PopupManagement/ActionCreators';
import AppMarkdownEditor from '../AppMarkdownEditor';
interface ICreateSafePlacePopupProps {
  onSave: (data: ICraeteSafePlaceFormData) => void;
}

const CreateSafePlacePopup: FC<ICreateSafePlacePopupProps> = ({ onSave }) => {
  const dispatch = useDispatch();
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [type, setType] = useState(PlaceType.Basement);
  const [capacity, setCapacity] = useState(10);
  const [errors, setErrors] = useState<IValidateCreateSafePlaceFormResult>({});

  const handleOnClose = () => {
    dispatch(closeSafePlacePopup());
  };

  const handleOnAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
    setErrors({ ...errors, address: undefined  });
  };

  const handleOnImageSrcChange = (event: ChangeEvent<HTMLInputElement>) => {
    setImageSrc(event.target.value)
    setErrors({ ...errors, imageSrc: undefined });
  };

  const handleOnCapacityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCapacity(Number(event.target.value))
    setErrors({ ...errors, capacity: undefined });
  };

  const handleOnDescriptionChange = (value: string | undefined) => {
    setDescription(value || '');
    setErrors({ ...errors, description: undefined });
  };

  const handleOnBlur = (key: keyof IValidateCreateSafePlaceFormResult) => () => {
    const newErrors = validateCreateSafePlaceForm({ address, capacity, description, imageSrc, type });
    setErrors({ ...errors, [key]: newErrors[key] });
  };

  const isCreateDisabled = () => {
    const newErrors = validateCreateSafePlaceForm({ address, capacity, description, imageSrc, type });
    return Object.keys(newErrors).length > 0;
  };

  return (
    <PopupLayout title="Create Safe Place" onClose={handleOnClose}>
      <div className={styles.container}>
        <TextField
          error={!!errors.address}
          helperText={errors.address}
          placeholder="Address"
          value={address}
          onChange={handleOnAddressChange}
          onBlur={handleOnBlur('address')}
        />
        <AppMarkdownEditor
          error={!!errors.description}
          helperText={errors.description}
          value={description}
          onChange={handleOnDescriptionChange}
          onBlur={handleOnBlur('description')}
        />
        <TextField
          error={!!errors.imageSrc}
          helperText={errors.imageSrc}
          placeholder="Image Src"
          value={imageSrc}
          onChange={handleOnImageSrcChange}
          onBlur={handleOnBlur('imageSrc')}
        />
        <Select value={type} onChange={(event) => setType(event.target.value as PlaceType)}>
          {Object.values(PlaceType).map((currentPlaceType) => (
            <MenuItem value={currentPlaceType}>
              <PlaceTypeIcon type={currentPlaceType} />
              {currentPlaceType}
            </MenuItem>
          ))}
        </Select>
        <TextField
          error={!!errors.capacity}
          helperText={errors.capacity}
          placeholder="Capacity"
          type="number"
          value={capacity}
          onChange={handleOnCapacityChange}
          onBlur={handleOnBlur('capacity')}
        />
        <div className={styles.footer}>
        <Button>Cancel</Button>
          <Button
            variant="contained"
            color="primary"
            disabled={isCreateDisabled()}
            onClick={() => onSave({ address, capacity, description, imageSrc, type })}
          >
            Create Safe Place
        </Button>
        </div>
      </div>

    </PopupLayout>
  );
};

export default CreateSafePlacePopup;