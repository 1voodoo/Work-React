import axios from "axios";

interface IBaseCountryInfo {
  commonName: string;
  officialName:string;
  countryCode: string;
  region: string;
}

export interface ICountryInfo extends IBaseCountryInfo {
  borders: IBaseCountryInfo[];
}

const getCountryInfo = async (countryCode: string): Promise<ICountryInfo> => {
  const respons = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`);
  return respons.data;
};

export default getCountryInfo;