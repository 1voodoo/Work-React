import { FC } from 'react';
import Header from './components/Header/Header';

const  App: FC = () => {

  const handleEdite = (): void => {
    console.log(123);
  };

  return (
    <div>
    <Header buttonText="edite" onClick={handleEdite}>
      TOT
      </Header>
      <Header>
      Hello
      </Header>
    </div>
  );
};

export default App;


