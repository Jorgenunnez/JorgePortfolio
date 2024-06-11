function ListaHabilidades({ src, skill }) {
  return (
    <span>
      <img src={src} alt="Icono de Check" />
      <p>{skill}</p>
    </span>
  );
}

export default ListaHabilidades;
