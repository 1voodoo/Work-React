import pluralize from 'pluralize';
import { NegativeCpacityError } from './formatCapacity.test';

const formatCapacity = (capacity: number): string => {
  if (capacity < 0) {
    throw new NegativeCpacityError('Capacity must be greater or equal to 0.');
  }

  if (capacity === 0) {
    return 'no people';
  }

  return `${capacity} ${pluralize('person', capacity)}`;
};

export default formatCapacity;

