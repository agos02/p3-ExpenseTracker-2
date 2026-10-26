import { useState } from 'react'
import { NavLink, Outlet, useMatch, useNavigate } from 'react-router-dom'
import NewExpenseModal from '../components/NewExpenseModal'
import '../styles/MainLayout.css'

export default function MainLayout() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()
  const isNewExpenseUrl = Boolean(useMatch('/gastos/nuevo'))

  // Modal único compartido por Inicio y Gastos.
  const openNewExpenseModal = () => setIsModalOpen(true)
  const closeNewExpenseModal = () => {
    setIsModalOpen(false)
    // Conservamos el acceso directo existente /gastos/nuevo.
    if (isNewExpenseUrl) navigate('/gastos', { replace: true })
  }

  return (
    <div className="main-layout">
      <div className="main-layout-content">
        <Outlet context={{ openNewExpenseModal }} />
      </div>

      <nav className="bottom-navigation" aria-label="Navegación principal">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `bottom-navigation-link ${isActive ? 'active' : ''}`
          }
        >
          <span className="bottom-navigation-icon" aria-hidden="true">⌂</span>
          <span>Inicio</span>
        </NavLink>

        <NavLink
          to="/gastos"
          className={({ isActive }) =>
            `bottom-navigation-link ${isActive ? 'active' : ''}`
          }
        >
          <span className="bottom-navigation-icon" aria-hidden="true">☷</span>
          <span>Gastos</span>
        </NavLink>

        <NavLink
          to="/configuracion"
          className={({ isActive }) =>
            `bottom-navigation-link ${isActive ? 'active' : ''}`
          }
        >
          <span className="bottom-navigation-icon" aria-hidden="true">⚙</span>
          <span>Ajustes</span>
        </NavLink>
      </nav>

      {(isModalOpen || isNewExpenseUrl) && (
        <NewExpenseModal onClose={closeNewExpenseModal} />
      )}
    </div>
  )
}
