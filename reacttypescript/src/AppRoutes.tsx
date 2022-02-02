import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="*" element='Not Found' />
    </Routes>
  );
};

export default AppRoutes;