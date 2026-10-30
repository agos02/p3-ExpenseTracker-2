# ExpenseTracker PWA

Versión web (Progressive Web App) de **ExpenseTracker**, migrada desde la app React Native del Sprint 1 (repositorio GastosDiarios-P3). Está hecha con React, Vite y React Router, y se puede instalar en el teléfono y usar sin conexión.

## URL publicada

https://p3-expense-tracker-2.vercel.app

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

El Service Worker solo funciona en la versión de producción. Para probarlo:

```bash
npm run build
npm run preview
```

Después abrí `http://localhost:4173/`.

## Capturas: Expo Go vs. PWA instalada

| Pantalla | Expo Go (React Native) | PWA instalada |
| --- | --- | --- |
| Inicio | <img src="capturas/expoGo-inicio.jpeg" width="220" alt="Inicio en Expo Go"> | <img src="capturas/pwa-inicio.jpeg" width="220" alt="Inicio en la PWA"> |
| Listado de gastos | <img src="capturas/expoGo-gastos.jpeg" width="220" alt="Gastos en Expo Go"> | <img src="capturas/pwa-gastos.jpeg" width="220" alt="Gastos en la PWA"> |
| Detalle del gasto | <img src="capturas/expoGo-detalle.jpeg" width="220" alt="Detalle en Expo Go"> | <img src="capturas/pwa-detalle.jpeg" width="220" alt="Detalle en la PWA"> |
| Ajustes | <img src="capturas/expoGo-ajustes.jpeg" width="220" alt="Ajustes en Expo Go"> | <img src="capturas/pwa-ajustes.jpeg" width="220" alt="Ajustes en la PWA"> |
| Formulario de nuevo gasto | <img src="capturas/expoGo-formulario.jpeg" width="220" alt="Formulario en Expo Go"> | <img src="capturas/pwa-formulario.jpeg" width="220" alt="Formulario en la PWA"> |

## Instalación y modo sin conexión

| Ícono en la pantalla de inicio | App funcionando sin conexión (modo avión) |
| --- | --- |
| <img src="capturas/pwa-icono.jpeg" width="220" alt="Ícono de la app instalada"> | <img src="capturas/pwa-offline.jpeg" width="220" alt="App sin conexión"> |