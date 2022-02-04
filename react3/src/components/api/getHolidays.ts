export interface IHoliday {
  date: string;
  localName:string;
  name: string;
}

const getHolidays = async (counrtyCode: string, year: number): Promise<IHoliday[]> => {
  const respons  = await fetch(`https://date.nager.at/api/v3/publicholidays/${year}/${counrtyCode}`);
  const holidays = await respons.json();

  return holidays;
};

export default getHolidays;