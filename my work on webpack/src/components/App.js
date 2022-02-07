import Api from './Api/Api';
import CardList from './CardList/CardList';
import './App.scss';

const App = async () => {
  const header = document.createElement('div');
  header.classList.add('header');
  const container = document.createElement('div');
  const button = document.createElement('button');
<<<<<<< HEAD
  button.addEventListener('click', async () => {
=======

  button.addEventListener('click', async function lol() {
>>>>>>> MyWorkOnWebpack
    container.classList.add('main');
    const cardList = CardList({
      cards: await Api(),
    });
<<<<<<< HEAD
    container.append(cardList);
=======

    container.append(cardList);
    button.removeEventListener('click', lol);
>>>>>>> MyWorkOnWebpack
  });
  header.append(button);
  container.prepend(header);

  return container;
};

export default App;
