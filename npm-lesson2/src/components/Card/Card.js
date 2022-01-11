import showToast from 'native-toast';

const Card = (props) => {
  const container = document.createElement('div');
  container.classList.add('card');
  const fileName = document.createElement('p');
  // eslint-disable-next-line no-multi-assign
  const lol = fileName.innerText = props.fileName;

  container.addEventListener('click', () => {
    showToast({
      message: lol,
      position: 'center',
      rounded: true,
      type: 'success',
    });
  });

  const img = document.createElement('img');
  img.src = props.src;
  const name = document.createElement('p');
  name.innerHTML = `<span>Name: </span>${props.name === null ? 'unknown' : props.name}`;

  const location = document.createElement('p');
  location.innerHTML = `<span>location: </span>${props.location === null ? 'unknown' : props.location}`;

  const price = document.createElement('p');
  price.innerHTML = `<span>Price: </span>${props.price === null ? 'unknown' : props.price} $`;

  const rarity = document.createElement('p');
  rarity.innerHTML = `<span>Rarity: </span>${props.rarity === null ? 'unknown' : props.rarity}`;

  container.append(img, name, location, price, rarity);

  return container;
};
export default Card;
