// Gastos de demostración migrados desde PantallaGastos.js (Proyecto1).
// Categoría, fecha y notas son datos de ejemplo para mostrar el detalle web.
// Todavía no hay persistencia: el formulario del sprint anterior sigue siendo una demo.
const mockExpenses = [
  {
    id: '1',
    descripcion: 'Supermercado',
    monto: 25000,
    categoria: 'Comida',
    fecha: '2026-10-20',
    notas: 'Compra semanal de alimentos y artículos para el hogar.',
  },
  {
    id: '2',
    descripcion: 'Combustible',
    monto: 18000,
    categoria: 'Transporte',
    fecha: '2026-10-22',
    notas: 'Carga de combustible del vehículo.',
  },
  {
    id: '3',
    descripcion: 'Internet',
    monto: 32000,
    categoria: 'Servicios',
    fecha: '2026-10-24',
    notas: 'Pago del servicio mensual de Internet.',
  },
]

export default mockExpenses
