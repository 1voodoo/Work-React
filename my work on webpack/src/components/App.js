import Api from './Api/Api';
import CardList from './CardList/CardList';
import './App.scss';

const App = async () => {
  const header = document.createElement('div');
  header.classList.add('header');
  const container = document.createElement('div');
  const button = document.createElement('button');

  button.addEventListener('click', async function lol() {
    container.classList.add('main');
    const cardList = CardList({
      cards: await Api(),
    });

    container.append(cardList);
    button.removeEventListener('click', lol);
  });
  header.append(button);
  container.prepend(header);

  return container;
};

export default App;
