import React, { useRef } from "react";
import estilos from "./ContactoStyle.module.css";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

function Contacto() {
  const form = useRef();
  // const FuncionalertSucess = () => {
  //  toast("Su correo fue enviado con exito", {
  //    icon: "✅",
  //    style: {
  //      borderRadius: "10px",
  //      background: "#222",
  //      color: "#fff",
  //      fontsize: "100px",
  //      fontWeight: "bold",
  //    },
  //  });
  // };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xx3vv7c", "template_qt83r5e", form.current, {
        publicKey: "mC9zaWZgDKbNvC2ej",
      })
      .then(
        () => {
          toast("Su correo fue enviado Satisfactoriamente", {
            icon: "✅",
            style: {
              borderRadius: "10px",
              background: "#222",
              color: "#fff",
              fontsize: "100px",
              fontWeight: "bold",
            },
          });
        },
        (error) => {
          toast("Su correo no pudo ser enviado", {
            icon: "❌",
            style: {
              borderRadius: "10px",
              background: "#222",
              color: "#fff",
              fontsize: "100px",
              fontWeight: "bold",
            },
          });
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
        <Toaster position="top-right" reverseOrder={false} />
      </form>
    </section>
  );
}

export default Contacto;
