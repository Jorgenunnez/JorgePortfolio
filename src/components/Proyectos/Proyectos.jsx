import estilos from "./ProyectosStyle.module.css";
import viberr from "../../assets/viberr.png";
import ProyectoCard from "../Commons/ProyectoCard";

function Proyectos() {
  return (
    <section id="proyectos" className={estilos.container}>
      <h1 className="secciontitulo">Proyectos</h1>
      <div className={estilos.proyectoscontainer}>
        <ProyectoCard src={viberr} link="#" h3="Viberr" p="Streaming App" />
        <ProyectoCard src={viberr} link="#" h3="Viberr" p="Streaming App" />
        <ProyectoCard src={viberr} link="#" h3="Viberr" p="Streaming App" />
      </div>
    </section>
  );
}

export default Proyectos;
