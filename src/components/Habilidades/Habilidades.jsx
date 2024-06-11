import estilos from "./HabilidadesStyle.module.css";
import checkMarkIcon from "../../assets/checkmark.svg";
import ListaHabilidades from "../Commons/ListaHabilidades";

function Habilidades() {
  return (
    <section id="habilidades" className={estilos.container}>
      <h1 className="secciontitulo">Habilidades</h1>
      <div className={estilos.habilidadeslista}>
        <ListaHabilidades src={checkMarkIcon} skill="HTML" />
        <ListaHabilidades src={checkMarkIcon} skill="CSS" />
        <ListaHabilidades src={checkMarkIcon} skill="JavaScript" />
        <ListaHabilidades src={checkMarkIcon} skill="TailWind" />
        <ListaHabilidades src={checkMarkIcon} skill="Boostrap" />
      </div>
      <hr />
      <h2 className="secciontitulo">Framework</h2>
      <div className={estilos.habilidadeslista}>
        <ListaHabilidades src={checkMarkIcon} skill="ReactJs" />
      </div>
    </section>
  );
}

export default Habilidades;
