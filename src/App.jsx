import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AllArticles from "./components/AllArticles";
import { Routes, Route } from "react-router-dom";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/articles" element={<AllArticles/>}/>
        <Route path="/profile" element={<UserProfile/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
