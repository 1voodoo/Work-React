import axios from 'axios';

export interface IApi {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: {
    city: string;
    street: string;
  }
  website: string;
}
const getApi = async(): Promise<IApi[]> => {
  const respons = await axios.get(`https://jsonplaceholder.typicode.com/users/`);
  return respons.data;
};

export default getApi;