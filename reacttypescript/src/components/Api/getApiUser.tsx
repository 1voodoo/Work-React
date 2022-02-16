import axios from 'axios';
import { IApi } from './getApi';


async function getApiUser(id: number): Promise<IApi> {
    const respons = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return respons.data;
};

export default getApiUser;