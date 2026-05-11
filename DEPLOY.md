# Despliegue Docker + SSL

Este proyecto esta preparado para publicarse en:

- Dominio: `flash-go.cybernovatech.space`
- IP esperada: `62.171.186.246`

## 1. DNS

Crea un registro `A` para `flash-go.cybernovatech.space` apuntando a `62.171.186.246`.

Usa guion medio (`flash-go`). El guion bajo (`flash_go`) no es recomendable para DNS web y puede causar problemas con SSL.

## 2. Requisitos del servidor

- Docker
- Docker Compose
- Puertos `80` y `443` abiertos

## 3. Ejecutar

Antes de levantar Docker, configura la URL directa del APK en Google Drive.

Ejemplo:

```bash
export APK_DOWNLOAD_URL="https://drive.google.com/uc?export=download&id=ID_DEL_ARCHIVO"
```

En Windows PowerShell:

```powershell
$env:APK_DOWNLOAD_URL="https://drive.google.com/uc?export=download&id=ID_DEL_ARCHIVO"
```

```bash
docker compose up -d --build
```

## 4. SSL

El contenedor usa Caddy y genera SSL automaticamente para `flash-go.cybernovatech.space` cuando:

- el DNS ya apunta a la IP correcta
- los puertos `80` y `443` son accesibles desde internet

## 5. Actualizar el APK desde Drive

Sube el APK a Google Drive, comparte el archivo como publico o accesible por enlace, copia el ID del archivo y actualiza `APK_DOWNLOAD_URL`.

La carpeta `public/downloads/` esta ignorada por Git para no subir APKs pesados al repositorio.

## 6. Actualizar cambios web

```bash
docker compose up -d --build
```
