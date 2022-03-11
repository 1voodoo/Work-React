import axios  from "axios"

export interface ICoctailsInfo {
  idDrink: string,
  strDrink: string,
  strCategory: string,
  strAlcoholic: string,
  strInstructions: string,
  strDrinkThumb: string,
}

const getCoctailsInfo = async (): Promise<ICoctailsInfo[]> => {
    const respons = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
    const items = respons.data;
    
    return items.drinks;
}

export default getCoctailsInfo;