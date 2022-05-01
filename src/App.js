import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import BoxBarNav from "./components/NavBar/BoxBarNav";
import Filters from "./assets/utils/Filters";
import ItemListContainer from "./components/Item/ItemListContainer";

export default function App() {
  return (
    <>
      <div className="App">
        <Header />
        <NavBar />
        <BoxBarNav />
        <div class="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
          <Filters />
          <ItemListContainer />
        </div>
      </div>
    </>
  );
}
