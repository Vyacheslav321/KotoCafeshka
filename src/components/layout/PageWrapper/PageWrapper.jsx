import React from "react";
import Header from "../Header/Header";
import MainPage from "../../pages/MainPage/MainPage";
import Footer from "../Footer/Footer";

import "./PageWrapper.css";

export default function PageWrapper({ ...prop }) {
  return (
    <>
      <Header />
      <main className='page-wrapper page-wrapper__maim'>
        <MainPage {...prop} />
      </main>
      <Footer />
    </>
  );
}
