import estilos from "./FooterStyle.module.css";

function Footer() {
  return (
    <section id="footer" className={estilos.container}>
      <p>
        &copy; 2024 Nuñez Jorge.
        <br />
        Todos los derechos reservados
      </p>
    </section>
  );
}

export default Footer;
