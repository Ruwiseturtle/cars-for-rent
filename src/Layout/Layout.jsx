import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { Suspense } from "react";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="containerMain">
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
