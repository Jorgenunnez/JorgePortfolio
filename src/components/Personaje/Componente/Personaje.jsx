import estilos from "./PersonajeStyle.module.css";
import pjimg from "../../../assets/icono.svg";
import github from "../../../assets/github.svg";
import linkedin from "../../../assets/linkedin.svg";
import CV from "../../../assets/Curriculum Jorge Nuñez.pdf";

function Personaje() {
  return (
    <section id="hero" className={estilos.container}>
      <div className={estilos.colorModeContainer}>
        <img
          className={estilos.pj}
          src={pjimg}
          alt="Foto de Perfil de Nuñez Jorge"
        />
      </div>
      <div className={estilos.info}>
        <h1>
          Nuñez <br /> Jorge
        </h1>
        <h2>Desarrollador Frontend Jr.</h2>
        <span>
          <a href="https://github.com/Jorgenunnez" target="_black">
            <img src={github} alt="Icono de Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/jorgenu%C3%B1ez/"
            target="_black"
          >
            <img src={linkedin} alt="Icono de Linkedin" />
          </a>
        </span>
        <p>
          Soy una persona autodidacta , estoy comprometido a seguir creciendo
          como desarrollador y afrontar desafios que pongan a prueba constante
          mis conocimientos
        </p>
        <a href={CV} download>
          <button className="hover">CV</button>
        </a>
      </div>
    </section>
  );
}

export default Personaje;
