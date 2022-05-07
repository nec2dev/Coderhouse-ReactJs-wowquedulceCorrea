import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Breadcrumb from "./components/NavBar/Breadcrumb";
import ItemListContainer from "./components/Item/ItemListContainer";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <div className="App">
        <Header />
        <NavBar />
        <Breadcrumb />
        <ItemListContainer />
        <Footer />
      </div>
    </>
  );
}
