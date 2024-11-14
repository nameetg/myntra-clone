import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/FetchItems";

const App = () => {
  return (
    <>
      <Header />
      <FetchItems />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
