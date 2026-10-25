import '../styles/Boton.css'

// Botón reutilizable con tres variantes visuales.
export default function Boton({
  titulo,
  onPress,
  variante = 'primario',
  className = '',
  type = 'button',
}) {
  return (
    <button
      type={type}
      className={`boton boton-${variante} ${className}`}
      onClick={onPress}
    >
      {titulo}
    </button>
  )
}
