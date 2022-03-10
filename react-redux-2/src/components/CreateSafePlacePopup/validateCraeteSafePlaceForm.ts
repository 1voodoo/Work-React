export interface IValidateCreateSafePlaceFormResult {
  adress?: string;
  description?: string;
  imageSrc?: string;
  capacity?: string;

}

export interface ICraeteSafePlaceFormData {
  adress: string;
  description: string;
  imageSrc: string;
  capacity: number;

}
const HTTPS_REGEX = /^https:\/\//;

const validateCreateSafePlaceForm  = (data:ICraeteSafePlaceFormData):IValidateCreateSafePlaceFormResult => {
  const errors: IValidateCreateSafePlaceFormResult = {};

  if (data.adress.length < 10 ) {
    errors.adress = 'Addres must be at last 10 charaters'
  }
  
  if (data.imageSrc.length === 0) {
    errors.imageSrc = 'Image Src must be not empty'
  }

  if (data.imageSrc.length > 0 && !HTTPS_REGEX.test(data.imageSrc)) {
    errors.imageSrc = "Image Src must be a valid URL"
  }

  if (data.description.length < 50) {
    errors.description = 'Description must be less than 50 charaters'
  }

  if (data.capacity <= 50) {
    errors.capacity = 'Capacity must be greater than 0'
  }

  return errors

};
export default validateCreateSafePlaceForm;