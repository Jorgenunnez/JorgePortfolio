import React from "react";
import "./App.css";
import Proyectos from "./components/Proyectos/Proyectos";
import Personaje from "./components/Personaje/Personaje";
import Habilidades from "./components/Habilidades/Habilidades";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Personaje />
      <Proyectos />
      <Habilidades />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
