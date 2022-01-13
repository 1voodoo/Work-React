import axios from 'axios';

const getBitconData = async (currency) => {
  const respons = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?id=bitcoin&vs_currency=${currency}&days=1&interval=hourly`);

  return respons.data;
};

export default getBitconData;
