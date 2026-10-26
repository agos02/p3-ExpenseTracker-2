import { useNavigate } from 'react-router-dom'
import Boton from '../components/Boton'
import mockExpenses from '../data/mockExpenses'
import '../styles/HomeScreen.css'

export default function HomeScreen() {
  const navigate = useNavigate()

  // Calculamos el total de todos los gastos.
  const totalRegistrado = mockExpenses.reduce(
    (total, gasto) => total + Number(gasto.monto || 0),
    0
  )

  // Cantidad de movimientos registrados.
  const cantidadMovimientos = mockExpenses.length

  // Formato de dinero argentino.
  const totalFormateado = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(totalRegistrado)

  return (
    <main className="home-screen">

      <div className="home-container">

        {/* Encabezado */}
        <header className="home-header">
          <img
            src="/icons/expense-tracker-icon.png"
            className="home-icon"
            alt="Ícono de ExpenseTracker"
          />

          <h1 className="home-title">
            ExpenseTracker
          </h1>
        </header>

        {/* Bienvenida */}
        <section className="home-card">
          <h2 className="home-welcome">
            ¡Bienvenido/a!
          </h2>

          <p className="home-description">
            Una forma sencilla de registrar y
            organizar tus gastos diarios.
          </p>
        </section>

        {/* Resumen de gastos */}
        <section className="home-card home-summary">
          <h2 className="home-section-title">
            Resumen de gastos
          </h2>

          <div className="home-summary-row">

            <article className="home-stat">
              <p className="home-stat-label">
                Total registrado
              </p>

              <p className="home-stat-value">
                {totalFormateado}
              </p>
            </article>

            <article className="home-stat">
              <p className="home-stat-label">
                Movimientos
              </p>

              <p className="home-stat-value">
                {cantidadMovimientos}
              </p>
            </article>

          </div>
        </section>

        {/* Accesos rápidos */}
        <section className="home-card home-shortcuts">
          <h2 className="home-section-title">
            Accesos rápidos
          </h2>

          <div className="home-actions">

            <Boton
              titulo="Registrar Nuevo Gasto"
              variante="primario"
              onPress={() => navigate('/gastos/nuevo')}
            />

            <Boton
              titulo="Ver Listado Completo"
              variante="secundario"
              onPress={() => navigate('/gastos')}
            />

          </div>
        </section>

      </div>

    </main>
  )
}