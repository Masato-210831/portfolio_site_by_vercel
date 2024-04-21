import React, { useEffect, useContext } from "react";
import { scroller } from 'react-scroll';
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import MainVisual from "../components/MainVisual";
import About from "../components/About";
import Works from "../components/Works";
import Products from "../components/Products";
import Footer from "../components/Footer";





const Home = () => {

  const location = useLocation();

  // レンダリング後に遷移するのでuseEffectを使用で一回n
  useEffect(()=>{
    window.scrollTo(0, 0);
    
    if (location.hash) {
      scroller.scrollTo(location.hash.slice(1), {
      offset:-30
      });
    }
  },[])

  return (
    <>
      <Header/>
      <MainVisual />
      <About />
      <Works />
      <Products />
      <Footer/>
    </>
  );
};

export default Home;
