import { useState } from 'react'
import { usePWAInstall } from '../hooks/usePWAInstall'
import '../styles/InstallBanner.css'

export default function InstallBanner() {
  const { isIOS, isInstalled, canInstall, isInstalling, install } = usePWAInstall()
  const [dismissed, setDismissed] = useState(false)

  // Nunca ofrecer instalación cuando ya está funcionando en modo app.
  if (isInstalled || dismissed) return null

  // En Android/Chrome el botón aparece solamente si se recibe el evento.
  // En iOS las instrucciones son manuales, pues no existe beforeinstallprompt.
  if (!isIOS && !canInstall) return null

  return (
    <aside className="install-banner" aria-label="Instalación de ExpenseTracker">
      <img
        className="install-banner-icon"
        src="/icons/icon-192.png"
        alt=""
        width="48"
        height="48"
      />
      <div className="install-banner-content">
        <strong className="install-banner-title">Instalá ExpenseTracker</strong>
        {isIOS ? (
          <p>
            En Safari, tocá <strong>Compartir</strong> y después
            <strong> Agregar a pantalla de inicio</strong>.
          </p>
        ) : (
          <p>Accedé a tus gastos desde la pantalla de inicio de tu teléfono.</p>
        )}
        {!isIOS && (
          <button
            type="button"
            className="install-banner-action"
            disabled={isInstalling}
            onClick={install}
          >
            {isInstalling ? 'Abriendo instalación…' : 'Instalar App'}
          </button>
        )}
      </div>
      <button
        type="button"
        className="install-banner-close"
        aria-label="Cerrar aviso de instalación"
        onClick={() => setDismissed(true)}
      >
        ×
      </button>
    </aside>
  )
}