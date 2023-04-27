import React from "react";

import Footer from '../footer/Footer';
import Header from "../Header/Header";
import MainPage from "../../pages/MainPage/MainPage";


import "./PageWrapper.css";

export default function PageWrapper({ ...prop }) {
  return (
    <>
      <Header />
      <main className="page-wrapper page-wrapper__maim">
        <MainPage {...prop} />
      </main>
      <Footer />
    </>
  );
}
