import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Hero from "./Pages/Hero";
import Gallery from './Pages/Gallery'
import Trending from "./Pages/Trending";
import SignIn from "./Pages/SignIn";
import ReactDOM from "react-dom/client";
import Article from "./Pages/Article";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import TEn from "../public/Locales/en/translation.json"
import TNe from "../public/Locales/nep/translation.json";

function App() {
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: TEn
      },
      nep: {
        translation: TNe
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/News" element={<Article />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <Home />
        <Hero />
        <Gallery />
        <Trending />
        <Footer />
      </Router>
    </>
  );
}

export default App
