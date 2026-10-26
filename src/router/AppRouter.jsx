import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HomeScreen from '../pages/HomeScreen'
import ExpensesScreen from '../pages/ExpensesScreen'
import ExpenseDetailScreen from '../pages/ExpenseDetailScreen'
import SettingsScreen from '../pages/SettingsScreen'

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path="expenses" element={<ExpensesScreen />} />
        <Route path="expenses/:id" element={<ExpenseDetailScreen />} />
        <Route path="settings" element={<SettingsScreen />} />
      </Route>
    </Routes>
  )
}