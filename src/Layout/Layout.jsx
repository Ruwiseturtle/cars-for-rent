import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { Suspense } from "react";
import "./Layout.css";
import { Loading } from "../components/Loading/Loading";

const Layout = () => {
  return (
    <div className="containerMain">
      <Header />
      <div className="main-container">
        <div className="scroll-container">
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Layout;
