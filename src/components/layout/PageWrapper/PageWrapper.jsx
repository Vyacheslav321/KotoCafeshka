import React from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MainPage from "../../pages/MainPage/MainPage";

import "./PageWrapper.css";

export default function PageWrapper({ ...prop }) {
  return (
    <>
      <Header />
      <main className="page-wrapper">
        <MainPage {...prop} />
      </main>
      <Footer />
    </>
  );
}
