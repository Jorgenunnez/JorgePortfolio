import React, { useRef } from "react";
import estilos from "./ContactoStyle.module.css";
import emailjs from "@emailjs/browser";

function Contacto() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xx3vv7c", "template_qt83r5e", form.current, {
        publicKey: "mC9zaWZgDKbNvC2ej",
      })
      .then(
        () => {
          alert("SUCCESS!");
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contacto" className={estilos.container}>
      <h1 className="sectionTitle">Contacto</h1>
      <form action="" ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Nombre
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Correo Electronico
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Correo Electronico"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="mensaje" hidden>
            Mensaje
          </label>
          <textarea
            type="text"
            name="mensaje"
            id="mensaje"
            placeholder="Mensaje"
            required
          />
        </div>
        <input className="hover btn" type="submit" value="Enviar" />
      </form>
    </section>
  );
}

export default Contacto;
