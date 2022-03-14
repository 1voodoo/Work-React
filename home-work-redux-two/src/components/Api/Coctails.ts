import axios  from "axios"

export interface ICoctailsInfo {
  idDrink: string,
  strDrink: string,
  strCategory: string,
  strAlcoholic: string,
  strInstructions: string,
  strDrinkThumb: string,
  strIngredient1: string,
  strIngredient2: string,
  strIngredient3: string,
  strIngredient4:string,
  strIngredient5:string
}

const getCoctailsInfo = async (): Promise<ICoctailsInfo[]> => {
    const respons = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
    const items = respons.data;
    
    return items.drinks;
}

export default getCoctailsInfo;