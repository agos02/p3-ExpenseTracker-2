//queremos que la aplicación muestre el contador y la pantalla de bienvenida de Vite. 
//Queremos que muestre las páginas de ExpenseTracker mediante React Router.

import AppRouter from './router/AppRouter' //importa el componente encargado de gestionar las rutas.

function App() {
  return <AppRouter /> //indica que App debe mostrar el sistema de navegación.
}
export default App //permite que main.jsx importe este componente.