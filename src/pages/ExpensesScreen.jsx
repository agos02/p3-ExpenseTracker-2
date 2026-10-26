import { useNavigate, useOutletContext } from 'react-router-dom'
import Boton from '../components/Boton'
import mockExpenses from '../data/mockExpenses'
import '../styles/ExpensesScreen.css'

const formatoMoneda = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 2,
})

// Basado en PantallaGastos.js de Proyecto1. Usa los mismos datos
// del resumen de Inicio para que no se desincronicen las pantallas.
export default function ExpensesScreen() {
  const navigate = useNavigate()
  const { openNewExpenseModal } = useOutletContext()

  return (
    <main className="expenses-screen">
      <header className="expenses-screen__header">
        <h1>Listado de gastos</h1>
        <p>Así se verán tus gastos cuando los registres.</p>
      </header>

      <section className="expenses-screen__content" aria-label="Gastos registrados">
        {mockExpenses.length === 0 ? (
          <p className="expenses-screen__empty">
            Todavía no hay gastos registrados.
          </p>
        ) : (
          <ul className="expenses-screen__list">
            {mockExpenses.map((gasto, index) => (
              <li className="expenses-screen__item" key={gasto.id ?? index}>
                <span>{gasto.descripcion || gasto.nombre || 'Gasto'}</span>
                <strong>{formatoMoneda.format(Number(gasto.monto) || 0)}</strong>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="expenses-screen__actions" aria-label="Acciones de gastos">
        <Boton titulo="Registrar Nuevo Gasto" onPress={openNewExpenseModal} />
        <Boton
          titulo="Volver al inicio"
          variante="secundario"
          onPress={() => navigate('/')}
        />
      </section>
    </main>
  )
}
