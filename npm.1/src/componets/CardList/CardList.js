import Card from "../Card/Card";


const CardList = (props) => {
    const container = document.createElement("div");
    const cardElement = props.cards.map(card => {
        return Card(card)
    });
container.append(...cardElement);
    return container;
};

export default CardList;