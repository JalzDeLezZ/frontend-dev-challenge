import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Fisrtview from "../components/Fisrtview.jsx";
import Questions from "../components/Questions.jsx";
import { ContentCards } from "../components/ContentCards";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Fisrtview />
        <ContentCards />
        <Questions />
        <Newsletter />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Home;
