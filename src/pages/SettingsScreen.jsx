import '../styles/SettingsScreen.css'

// Pantalla de ajustes migrada de PantallaConfiguracion.js (Sprint 1).
// Por ahora solo muestra el encabezado, igual que en la app móvil.
export default function SettingsScreen() {
  return (
    <main className="settings-screen">
      <header className="settings-screen__header">
        <h1>Configuración</h1>
        <p>Próximamente vas a poder ajustar la app acá.</p>
      </header>
    </main>
  )
}