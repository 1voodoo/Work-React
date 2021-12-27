const Card = (props) => {
    const container = document.createElement("div");

    container.classList.add("card");

    const img = document.createElement("img");

    const fulName = document.createElement("p");

    img.src = props.src;

    fulName.innerText = props.fulName;
    
    container.append(img,fulName);

    return container;
};

export default Card;