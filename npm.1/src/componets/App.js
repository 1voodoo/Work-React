import Card from "./Card/Card";
import CardList from "./CardList/CardList";

const getWatnedPeople = async () => {
    const response = await fetch("https://api.fbi.gov/wanted/v1/list");

    const data = await response.json();

    return data.items.map((item) => {
        return {
            src: item.images[0].original,
            fulName: item.title
        }
    })
}


const App =  async () => {
    const div = document.createElement("div");

    div.innerText ="Hello World";

    const cardList = CardList({
        cards: await getWatnedPeople(),
    });

    div.append(cardList);

    return div;
};
export default App;
