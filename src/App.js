import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Contacts from "./components/Contacts/Contacts";
import AddBlog from "./components/AddBlog/AddBlog";
import Fav from "./components/Favorites/Fav";
import CardList from "./components/CardList/CardList";

const App = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <HomePage />
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/card-list" element={<CardList />} />
          <Route path="/add-card" element={<AddBlog />} />
          <Route path="/favorites" element={<Fav />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
