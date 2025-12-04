# MiTransporteUrbano (Capacitor iOS Wrapper)

Este proyecto envuelve tu sitio web en iOS usando **Capacitor (WKWebView)** y apunta a:

**https://puertoesperanza.up.railway.app/users/login**

## Requisitos (para compilar iOS)
- macOS con **Xcode** *o* un servicio de compilación en la nube que soporte macOS.
- Node.js 18+ y npm.

## Pasos rápidos (en macOS o CI):
```bash
npm ci
npm run cap:init      # crea archivos base (id, nombre)
npm run cap:add:ios   # genera el proyecto iOS
npm run cap:sync
# Abrir en Xcode:
npm run ios:open
# En Xcode: Product > Archive para generar .ipa
```
> Si usás un **builder en la nube**, ejecutá esos comandos en su pipeline macOS.

### Permisos sugeridos en iOS (Info.plist)
En Xcode, en el target iOS:
- `NSLocationWhenInUseUsageDescription` = "Se usa para mostrar tu ubicación en el mapa de buses."
- `NSCameraUsageDescription` / `NSMicrophoneUsageDescription` si tu web lo usa.
- ATS: manteniendo todo en HTTPS no necesitás excepciones.

## Distribución sin cuenta Apple Developer
- Podés generar el .ipa en un builder macOS y **sideload** con AltStore desde Windows.
- La firma gratuita dura 7 días; se reinstala fácil.

## Nota
Este repo usa `server.url` de Capacitor para abrir directamente la URL externa.
