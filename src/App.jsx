import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Layout from "./Layout/Layout";
import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const Cars = lazy(() => import("./pages/CarCatalog/CarCatalog"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<Cars />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
