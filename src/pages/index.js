import * as React from "react";
import Layout from "../components/layout";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/NavBar";
import Partners from "../components/Partners";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Team from "../components/Team";

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <Navbar />
      <Services />
      <Portfolio />
      <About />
      <Team />
      <Partners />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Gatsby visit card</title>;
