import axios from "axios";

export interface IResultCountry {
  Country: string;
  CountryCode: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  ID: string | number;
  Date: string;
}
export interface IgetApi {
  ID: string;
  Global: {
    NewConfirmed: number;
    NewDeaths: number;
    TotalConfirmed: number;
    TotalDeaths: number;

  }
  Countries: IResultCountry[];
}

const Api = async (): Promise<IgetApi> => {
  const respons = await axios.get('https://api.covid19api.com/summary');
  return respons.data;
};

export default Api;