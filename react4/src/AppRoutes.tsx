import { FC } from "react";
import { Route, Routes } from 'react-router-dom';
import App from "./App";
import Page404 from "./components/Page404";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="*" element={<Page404/>} />
    </Routes>
  );
};

export default AppRoutes;