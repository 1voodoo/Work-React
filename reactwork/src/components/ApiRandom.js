import axios from 'axios';

const ApiRandom = async () => {
  const respons = await axios.get('https://random.dog/woof.json');

  return respons.data.url;
};

export default ApiRandom;
