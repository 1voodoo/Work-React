import pluralize from 'pluralize';


const formatCapacity = (capacity: number): string => {
  
  if (capacity === 0) {
    return 'no people';
  }

  return `${capacity} ${pluralize('person', capacity)}`;
};

export default formatCapacity;

