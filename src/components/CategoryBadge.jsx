import '../styles/CategoryBadge.css'

const CATEGORIAS = {
  Comida: {
    icono: '🍽️',
    clase: 'comida',
  },
  Transporte: {
    icono: '🚗',
    clase: 'transporte',
  },
  Servicios: {
    icono: '⌂',
    clase: 'servicios',
  },
  Otros: {
    icono: '◆',
    clase: 'otros',
  },
}

export default function CategoryBadge({ categoria }) {
  const configuracion = CATEGORIAS[categoria] ?? CATEGORIAS.Otros

  return (
    <span
      className={`category-badge category-badge--${configuracion.clase}`}
      role="img"
      aria-label={`Categoría: ${categoria || 'Otros'}`}
    >
      <span aria-hidden="true">{configuracion.icono}</span>
    </span>
  )
}
