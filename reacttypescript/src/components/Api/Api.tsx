import { FC } from "react";
import axios from 'axios';

const Api: FC = () => {
  const respons = axios.get('https://jsonplaceholder.typicode.com/users');
  return (
    <div>
      {respons}
    </div>
  );
};

export default Api;