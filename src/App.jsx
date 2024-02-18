import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Layout from "./Layout/Layout";
import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CarsCatalog = lazy(() => import("./pages/CarCatalog/CarCatalog"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CarsCatalog />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
