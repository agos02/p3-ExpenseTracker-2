import '../styles/Encabezado.css'

export default function Encabezado({ titulo, descripcion }) {
  return (
    <div className="encabezado">
      <h2 className="encabezado-titulo">{titulo}</h2>

      {descripcion ? (
        <p className="encabezado-descripcion">{descripcion}</p>
      ) : null}
    </div>
  )
}
