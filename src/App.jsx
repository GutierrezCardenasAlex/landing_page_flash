import {
  ArrowRight,
  BadgeCheck,
  CircleDot,
  Clock3,
  MapPin,
  MapPinned,
  Menu,
  Navigation,
  ShieldCheck,
  Smartphone,
  Wallet,
  Zap,
} from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: 'Viajes rapidos',
    description: 'Solicita un mototaxi en segundos y encuentra opciones cercanas al instante.',
  },
  {
    icon: ShieldCheck,
    title: 'Conductores verificados',
    description: 'Perfiles confiables para moverte con mas tranquilidad en cada trayecto.',
  },
  {
    icon: Navigation,
    title: 'Ruta en tiempo real',
    description: 'Sigue el recorrido y visualiza la llegada del conductor con claridad.',
  },
  {
    icon: Wallet,
    title: 'Precios claros',
    description: 'Consulta el costo estimado antes de confirmar y evita sorpresas.',
  },
  {
    icon: Clock3,
    title: 'Disponible 24/7',
    description: 'FLASH GO acompana la ciudad a cualquier hora con servicio continuo.',
  },
  {
    icon: Smartphone,
    title: 'Facil de usar',
    description: 'Una experiencia intuitiva pensada para pasajeros y conductores desde el primer toque.',
  },
]

const stats = [
  { value: '24/7', label: 'Servicio disponible' },
  { value: '3 min', label: 'Tiempo promedio' },
  { value: '4.9★', label: 'Calificacion esperada' },
]

export function FlashGoLandingPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-x-0 top-0 -z-10 h-[540px] bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.28),_transparent_55%)]" />
      <div className="absolute right-0 top-40 -z-10 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute left-0 top-[32rem] -z-10 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl" />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/65 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-orange-400/30 bg-orange-500/10 shadow-[0_0_30px_rgba(249,115,22,0.18)]">
              <img
                src="/logo.jpeg"
                alt="Logo de FLASH GO"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-lg font-black uppercase tracking-[0.35em] text-white">
                FLASH GO
              </p>
              <p className="text-[11px] uppercase tracking-[0.3em] text-orange-300/80">
                MotoTaxi App
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-white/75 md:flex">
            <a href="#beneficios" className="transition hover:text-orange-300">
              Beneficios
            </a>
            <a href="#app" className="transition hover:text-orange-300">
              App
            </a>
            <a href="#descargar" className="transition hover:text-orange-300">
              Descargar
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/apk"
              className="hidden rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-400 sm:inline-flex"
            >
              Descargar APK
            </a>
            <div
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
              aria-hidden="true"
            >
              <Menu className="h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="border-t border-white/8 md:hidden">
          <nav className="mx-auto flex max-w-7xl items-center justify-center gap-6 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            <a href="#beneficios" className="transition hover:text-orange-300">
              Beneficios
            </a>
            <a href="#app" className="transition hover:text-orange-300">
              App
            </a>
            <a href="#descargar" className="transition hover:text-orange-300">
              Descargar
            </a>
          </nav>
        </div>
      </header>

      <main id="inicio">
        <section className="mx-auto grid max-w-7xl gap-14 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-200">
              <BadgeCheck className="h-4 w-4" />
              Mototaxi rapido y seguro
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-7xl">
              Muevete rapido, seguro y sin complicaciones con FLASH GO
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
              La app que conecta pasajeros con mototaxis cercanos en segundos.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              <span className="h-2 w-2 rounded-full bg-orange-400" />
              flash-go.cybernovatech.space
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/apk"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-4 text-base font-bold text-black shadow-[0_20px_50px_rgba(249,115,22,0.35)] transition hover:bg-orange-400"
              >
                Descargar APK
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#app"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-4 text-base font-semibold text-white transition hover:border-orange-400/40 hover:bg-orange-500/10"
              >
                Ver como funciona
              </a>
            </div>

            <p className="mt-4 text-sm text-white/50">
              Disponible por descarga directa mientras preparamos el lanzamiento oficial.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <article
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-sm"
                >
                  <p className="text-3xl font-black text-orange-400">{stat.value}</p>
                  <p className="mt-2 text-sm text-white/65">{stat.label}</p>
                </article>
              ))}
            </div>
          </div>

          <div id="app" className="relative mx-auto flex w-full max-w-md justify-center">
            <div className="absolute inset-x-8 top-10 h-64 rounded-full bg-orange-500/20 blur-3xl" />
            <div className="absolute -right-8 top-14 hidden rounded-3xl border border-white/10 bg-white/8 px-4 py-3 shadow-[0_25px_70px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:block">
              <p className="text-xs uppercase tracking-[0.22em] text-white/45">Online</p>
              <p className="mt-1 text-sm font-bold text-orange-200">12 conductores cerca</p>
            </div>
            <div className="absolute -left-6 bottom-24 hidden rounded-3xl border border-orange-300/20 bg-black/70 px-4 py-3 shadow-[0_25px_70px_rgba(249,115,22,0.18)] backdrop-blur-xl sm:block">
              <p className="text-xs uppercase tracking-[0.22em] text-white/45">Llegada</p>
              <p className="mt-1 text-sm font-bold text-white">3 minutos</p>
            </div>
            <div className="relative w-full rounded-[2.75rem] border border-orange-300/25 bg-gradient-to-b from-[#242424] via-[#0d0d0d] to-black p-2 shadow-[0_35px_100px_rgba(0,0,0,0.65)]">
              <div className="rounded-[2.35rem] border border-white/10 bg-[#0b0b0b] p-3">
                <div className="mx-auto mb-3 h-1.5 w-24 rounded-full bg-white/12" />
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111]">
                  <div className="flex items-center justify-between border-b border-white/8 bg-white/[0.03] px-4 py-3">
                    <span className="text-xs font-semibold text-white/65">9:41</span>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-4 rounded-full bg-white/35" />
                      <span className="h-1.5 w-3 rounded-full bg-orange-400" />
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-orange-300/70">
                          Buen dia
                        </p>
                        <h2 className="mt-2 text-2xl font-black text-white">Hola, Andrea</h2>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-orange-300/30 bg-orange-500/10">
                        <img
                          src="/logo.jpeg"
                          alt="FLASH GO"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="mt-5 grid gap-3">
                      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/55 px-4 py-3">
                        <CircleDot className="h-4 w-4 text-orange-300" />
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.18em] text-white/35">Origen</p>
                          <p className="text-sm font-semibold text-white">Tu ubicacion actual</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 rounded-2xl border border-orange-300/25 bg-orange-500/10 px-4 py-3">
                        <MapPin className="h-4 w-4 text-orange-300" />
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.18em] text-white/35">Destino</p>
                          <p className="text-sm font-semibold text-white">Buscar destino...</p>
                        </div>
                      </div>
                    </div>

                    <div className="relative mt-5 overflow-hidden rounded-[1.75rem] border border-orange-300/20 bg-[#161616] p-4">
                      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(249,115,22,0.14),transparent_48%),linear-gradient(45deg,transparent_0,transparent_46%,rgba(255,255,255,0.06)_47%,rgba(255,255,255,0.06)_48%,transparent_49%)]" />
                      <div className="absolute left-8 top-10 h-px w-40 rotate-12 bg-white/12" />
                      <div className="absolute right-0 top-16 h-px w-36 -rotate-6 bg-white/10" />
                      <div className="absolute left-4 top-28 h-px w-56 -rotate-12 bg-white/10" />
                      <div className="absolute left-16 bottom-9 right-16 border-t-2 border-dashed border-orange-300/65" />
                      <div className="absolute left-12 bottom-8 h-3 w-3 rounded-full bg-white shadow-[0_0_0_7px_rgba(255,255,255,0.07)]" />
                      <div className="absolute right-16 bottom-8 h-3 w-3 rounded-full bg-orange-400 shadow-[0_0_0_8px_rgba(249,115,22,0.18)]" />
                      <div className="relative h-40 rounded-[1.4rem] border border-white/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]">
                        <div className="absolute left-5 top-5 rounded-full bg-black/70 px-3 py-1 text-[11px] font-semibold text-white/70">
                          Zona centro
                        </div>
                        <div className="absolute bottom-4 right-4 rounded-full border border-orange-300/30 bg-orange-500/15 px-3 py-1 text-[11px] font-semibold text-orange-100">
                          2.4 km
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 rounded-[1.75rem] border border-orange-300/25 bg-gradient-to-r from-orange-500/18 via-white/7 to-white/5 p-4 shadow-[0_18px_45px_rgba(249,115,22,0.12)]">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-300/20 bg-black/45 text-orange-200">
                            <Navigation className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm text-white/60">Mototaxi cercano</p>
                            <p className="mt-1 text-xl font-bold text-white">FLASH Rider</p>
                            <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-semibold text-emerald-200">
                              <ShieldCheck className="h-3.5 w-3.5" />
                              Verificado
                            </p>
                          </div>
                        </div>
                        <div className="rounded-2xl bg-black/35 px-3 py-2 text-right">
                          <p className="text-xs text-white/45">Llegada</p>
                          <p className="text-sm font-semibold text-white">3 min</p>
                        </div>
                      </div>

                      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                        <div className="rounded-2xl bg-black/30 px-2 py-2">
                          <p className="text-[11px] text-white/40">Placa</p>
                          <p className="text-xs font-bold text-white">FG-204</p>
                        </div>
                        <div className="rounded-2xl bg-black/30 px-2 py-2">
                          <p className="text-[11px] text-white/40">Rating</p>
                          <p className="text-xs font-bold text-white">4.9</p>
                        </div>
                        <div className="rounded-2xl bg-black/30 px-2 py-2">
                          <p className="text-[11px] text-white/40">Ruta</p>
                          <p className="text-xs font-bold text-white">Directa</p>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-500 px-4 py-3 text-sm font-black text-black shadow-[0_16px_35px_rgba(249,115,22,0.28)] transition hover:bg-orange-400"
                      >
                        Pedir viaje
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="beneficios" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300/80">
              Beneficios
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
              Todo lo que necesitas para moverte mejor en la ciudad
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon

              return (
                <article
                  key={benefit.title}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition hover:-translate-y-1 hover:border-orange-400/30 hover:bg-orange-500/8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">{benefit.description}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-6 rounded-[2.5rem] border border-orange-400/20 bg-[linear-gradient(135deg,rgba(249,115,22,0.16),rgba(255,255,255,0.04))] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] lg:grid-cols-2 lg:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-200/80">
                Ciudad en movimiento
              </p>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                FLASH GO conecta la ciudad en movimiento.
              </h2>
            </div>

            <div className="grid gap-4 text-sm leading-7 text-white/75 sm:text-base">
              <div className="rounded-[1.75rem] border border-white/10 bg-black/25 p-5">
                Los pasajeros pueden encontrar viajes rapidos y seguros, con tiempos de llegada cortos y una experiencia simple desde el celular.
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-black/25 p-5">
                Los conductores pueden recibir mas solicitudes, mejorar su visibilidad y aumentar sus ingresos con una app pensada para trabajar mejor.
              </div>
            </div>
          </div>
        </section>

        <section id="descargar" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
          <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#141414] via-black to-[#0b0b0b] p-8 shadow-[0_25px_90px_rgba(249,115,22,0.15)] sm:p-10 lg:p-14">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300/80">
                Descarga directa
              </p>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
                Descarga FLASH GO y empieza a moverte mejor
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                Disponible por descarga directa mientras preparamos el lanzamiento oficial.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/apk"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-4 text-base font-bold text-black transition hover:bg-orange-400"
                >
                  Descargar APK
                </a>
                <a
                  href="#app"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-4 text-base font-semibold text-white transition hover:border-orange-400/40 hover:bg-orange-500/10"
                >
                  Conocer la app
                </a>
              </div>

              <p className="mt-4 text-sm text-orange-200/80">
                Version Android APK alojada en Google Drive
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-4 sm:max-w-md">
              <div className="h-16 w-16 overflow-hidden rounded-2xl border border-orange-400/25 bg-black/40">
                <img
                  src="/logo.jpeg"
                  alt="Logo FLASH GO"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg font-bold text-white">FLASH GO</p>
                <p className="text-sm text-white/60">Desplegado para flash-go.cybernovatech.space</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-white/55 sm:px-6 lg:px-8">
        <p>© 2026 FLASH GO. Todos los derechos reservados.</p>
        <p className="mt-2">Mototaxi rapido, seguro y moderno.</p>
      </footer>
    </div>
  )
}

function App() {
  return <FlashGoLandingPage />
}

export default App
