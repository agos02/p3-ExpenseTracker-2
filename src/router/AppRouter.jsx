import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HomeScreen from '../pages/HomeScreen'
import ExpensesScreen from '../pages/ExpensesScreen'
import ExpenseDetailScreen from '../pages/ExpenseDetailScreen'

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

        {/* Se conserva la ruta del formulario del sprint anterior. */}
        <Route path="gastos/nuevo" element={<ExpensesScreen />} />

        {/* Ruta solicitada y alias para enlaces anteriores en español. */}
        <Route path="expenses" element={<Navigate to="/gastos" replace />} />
        <Route path="expenses/:id" element={<ExpenseDetailScreen />} />
        <Route path="gastos/:id" element={<ExpenseDetailScreen />} />

        <Route path="configuracion" element={<PaginaPendiente titulo="Ajustes" />} />
      </Route>
    </Routes>
  )
}
