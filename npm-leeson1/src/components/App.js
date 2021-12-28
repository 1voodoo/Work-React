import getWantedPeople from "./Api/Api";
import CardList from "./CardList/CardList";

const App = async() => {
 const container = document.createElement("div");

    const cardList = CardList({
        cards: await getWantedPeople(),
        
    });
 container.append(cardList);

 return container;
};

export default App;



