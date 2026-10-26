import { useNavigate, useOutletContext } from 'react-router-dom'
import Boton from '../components/Boton'
import ExpenseCard from '../components/ExpenseCard'
import mockExpenses from '../data/mockExpenses'
import '../styles/ExpensesScreen.css'

// Listado migrado de PantallaGastos.js; conserva el modal de la US anterior.
export default function ExpensesScreen() {
  const navigate = useNavigate()
  const { openNewExpenseModal } = useOutletContext()

  return (
    <main className="expenses-screen">
      <header className="expenses-screen__header">
        <h1>Listado de gastos</h1>
        <p>Consultá los gastos y tocá cualquiera para ver su detalle.</p>
      </header>

      <section className="expenses-screen__content" aria-label="Gastos registrados">
        {mockExpenses.length === 0 ? (
          <p className="expenses-screen__empty">Todavía no hay gastos registrados.</p>
        ) : (
          <ul className="expenses-screen__list">
            {mockExpenses.map((gasto) => (
              <li key={gasto.id}>
                <ExpenseCard gasto={gasto} />
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
