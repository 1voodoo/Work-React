import { FC } from 'react';
import Header from './components/Header/Header';

const App: FC = () => {
  const handleOnClick = () => {
    console.log(123);
    
  }
  return (
    <div>
      <Header buttonText="edit" onClick={handleOnClick}>
        Title
        </Header>
      Hello Lol
    </div>
  );
}

export default App;
