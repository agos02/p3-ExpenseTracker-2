import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HomeScreen from '../pages/HomeScreen'
import ExpensesScreen from '../pages/ExpensesScreen'

function PaginaPendiente({ titulo }) {
  return (
    <main style={{ padding: '24px' }}>
      <h1>{titulo}</h1>
      <p>Esta pantalla se implementará durante la migración del Sprint 1.</p>
    </main>
  )
}

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomeScreen />} />

        <Route path="gastos" element={<ExpensesScreen />} />

        {/* URL preexistente: abre el mismo modal encima del listado. */}
        <Route path="gastos/nuevo" element={<ExpensesScreen />} />

        <Route
          path="gastos/:id"
          element={<PaginaPendiente titulo="Detalle del gasto" />}
        />

        <Route
          path="configuracion"
          element={<PaginaPendiente titulo="Ajustes" />}
        />
      </Route>
    </Routes>
  )
}
