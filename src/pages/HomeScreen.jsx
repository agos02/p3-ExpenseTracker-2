
import { useNavigate } from 'react-router-dom'
import Encabezado from '../components/Encabezado'
import Boton from '../components/Boton'
import '../styles/HomeScreen.css'

export default function HomeScreen() {
  const navigate = useNavigate()

  return (
    <main className="home-screen">
      <section className="home-card">
        <img
          src="/icons/expense-tracker-icon.png"
          className="home-icon"
          alt="Ícono de ExpenseTracker"
        />

        <h1 className="home-title">ExpenseTracker</h1>

        <Encabezado
          titulo="¡Bienvenido/a!"
          descripcion="Una forma sencilla de registrar y organizar tus gastos diarios."
        />

        <Boton
          titulo="Ver gastos"
          variante="secundario"
          className="home-button-space"
          onPress={() => navigate('/gastos')}
        />
      </section>
    </main>
  )
}
