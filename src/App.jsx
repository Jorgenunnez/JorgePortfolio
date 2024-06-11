import React from "react";
import "./App.css";
import Proyectos from "./components/Proyectos/Proyectos";
import Personaje from "./components/Personaje/Personaje";
import Habilidades from "./components/Habilidades/Habilidades";

function App() {
  return (
    <>
      <Personaje />
      <Proyectos />
      <Habilidades />
    </>
  );
}

export default App;
