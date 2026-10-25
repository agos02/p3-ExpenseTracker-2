import { NavLink, Outlet } from 'react-router-dom'
import '../styles/MainLayout.css'

export default function MainLayout() {
  return (
    <div className="main-layout">
      <div className="main-layout-content">
        <Outlet />
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
    </div>
  )
}
