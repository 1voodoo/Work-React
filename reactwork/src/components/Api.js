import axios from 'axios';

const Api = async () => {
  const respons = await axios.get('https://jsonplaceholder.typicode.com/users');
  return respons.data;
};

export default Api;
