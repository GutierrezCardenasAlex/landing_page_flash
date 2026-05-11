import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function apkDownloadPlugin() {
  const redirectToApk = (req, res) => {
    if (req.url !== '/apk') {
      return false
    }

    const downloadUrl = process.env.VITE_APK_DOWNLOAD_URL

    if (!downloadUrl) {
      res.statusCode = 503
      res.setHeader('Content-Type', 'text/plain; charset=utf-8')
      res.end('Configura VITE_APK_DOWNLOAD_URL con el enlace directo de Google Drive.')
      return true
    }

    res.statusCode = 302
    res.setHeader('Location', downloadUrl)
    res.end()
    return true
  }

  return {
    name: 'flash-go-apk-download',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!redirectToApk(req, res)) {
          next()
        }
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!redirectToApk(req, res)) {
          next()
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), apkDownloadPlugin()],
  server: {
    allowedHosts: [
      '3756-181-188-178-246.ngrok-free.app',
      'flash-go.cybernovatech.space',
    ],
  },
})
