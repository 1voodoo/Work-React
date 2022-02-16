import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Info from "./components/Info";
import Page404 from "./components/Page404/Page404";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/user/:id" element={<Info/>} />
      <Route path="*" element={<Page404/>} />
    </Routes>
  );
};

export default AppRoutes;