import { useCallback, useEffect, useState } from 'react'

function detectIOS() {
  if (typeof navigator === 'undefined') return false

  const userAgent = navigator.userAgent || ''
  // iPadOS puede identificarse como macOS en Safari.
  return /iPad|iPhone|iPod/i.test(userAgent)
    || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
}

function detectInstalled() {
  if (typeof window === 'undefined') return false

  const standaloneDisplay = window.matchMedia?.('(display-mode: standalone)')?.matches === true
  // navigator.standalone es necesario para instalaciones desde Safari/iOS.
  const iosStandalone = window.navigator.standalone === true
  return standaloneDisplay || iosStandalone
}

export function usePWAInstall() {
  const [isIOS] = useState(detectIOS)
  const [isInstalled, setIsInstalled] = useState(detectInstalled)
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [isInstalling, setIsInstalling] = useState(false)

  useEffect(() => {
    const onBeforeInstallPrompt = (event) => {
      event.preventDefault()
      setDeferredPrompt(event)
    }

    const onAppInstalled = () => {
      setIsInstalled(true)
      setDeferredPrompt(null)
      setIsInstalling(false)
    }

    const onDisplayChange = () => setIsInstalled(detectInstalled())
    const media = window.matchMedia?.('(display-mode: standalone)')

    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt)
    window.addEventListener('appinstalled', onAppInstalled)
    media?.addEventListener?.('change', onDisplayChange)

    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt)
      window.removeEventListener('appinstalled', onAppInstalled)
      media?.removeEventListener?.('change', onDisplayChange)
    }
  }, [])

  const install = useCallback(async () => {
    if (!deferredPrompt || isInstalled || isInstalling) return false

    const promptEvent = deferredPrompt
    setDeferredPrompt(null) // Un prompt solo se puede consumir una vez.
    setIsInstalling(true)

    try {
      await promptEvent.prompt()
      const choice = await promptEvent.userChoice
      return choice?.outcome === 'accepted'
    } catch (error) {
      console.error('No se pudo iniciar la instalación de ExpenseTracker:', error)
      return false
    } finally {
      setIsInstalling(false)
    }
  }, [deferredPrompt, isInstalled, isInstalling])

  return {
    isIOS,
    isInstalled,
    canInstall: Boolean(deferredPrompt),
    isInstalling,
    install,
  }
}
