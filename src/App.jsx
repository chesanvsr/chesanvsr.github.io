import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ParticleNetwork from "./ParticleNetwork"
import AICore from "./AICore"
import Skills from "./Skills"
import Projects from "./Projects"
import Education from "./Education"
import Contact from "./Contact"

function App() {
  return (
    <main className="min-h-screen bg-[#050510] text-white">

      {/* NAVBAR */}
    <nav className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 rounded-2xl border border-white/10 bg-[#050510]/70 px-5 py-3 backdrop-blur-xl">
      <div className="flex items-center justify-between">

        {/* LOGO */}

        <a
          href="#inicio"
          className="group flex items-center gap-2"
        >
          <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_12px_3px_rgba(167,139,250,0.5)] transition group-hover:bg-cyan-400" />

          <span className="font-semibold tracking-widest">
            MAXIMO<span className="text-violet-400">.</span>
          </span>
        </a>


        {/* MENU */}

        <div className="hidden items-center gap-7 text-sm text-gray-400 md:flex">

          <a
            href="#sobre-mi"
            className="transition hover:text-white"
          >
            Sobre mí
          </a>

          <a
            href="#skills"
            className="transition hover:text-white"
          >
            Skills
          </a>

          <a
            href="#proyectos"
            className="transition hover:text-white"
          >
            Proyectos
          </a>

          <a
            href="#formacion"
            className="transition hover:text-white"
          >
            Formación
          </a>

          <a
            href="#contacto"
            className="rounded-full border border-violet-400/20 bg-violet-400/5 px-4 py-2 text-violet-300 transition hover:border-violet-400/40 hover:bg-violet-400/10"
          >
            Contacto
          </a>

        </div>


        {/* MOBILE */}

        <a
          href="#contacto"
          className="rounded-full border border-violet-400/20 px-4 py-2 text-xs text-violet-300 md:hidden"
        >
          Contacto
        </a>

      </div>
    </nav>


      {/* HERO */}
      <section 
        id="inicio"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
      >
        <ParticleNetwork />

        <AICore />


        {/* LUZ VIOLETA */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[130px]" />

        {/* LUZ AZUL */}
        <div className="absolute right-[-150px] top-[-150px] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />


        {/* CONTENIDO */}
        <div className="relative z-10 mx-auto max-w-4xl text-center fade-up">

        <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-violet-400">
          Software Engineering · Artificial Intelligence
        </p>

        <h1 className="text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
          Hola, soy{" "}
          <span className="bg-gradient-to-r from-white via-violet-200 to-cyan-300 bg-clip-text text-transparent">
            Máximo.
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl">
           Estudiante de Ingeniería en Sistemas de Información,
           interesado en el desarrollo de software y la inteligencia artificial.
           Actualmente construyendo proyectos y profundizando en nuevas tecnologías.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <a
            href="#proyectos"
            className="rounded-full bg-white px-7 py-3 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-violet-200"
          >
            Ver proyectos
          </a>

          <a
            href="https://github.com/chesanvsr"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur-md transition duration-300 hover:scale-105 hover:border-violet-400/40 hover:bg-violet-400/10"
          >
            GitHub ↗
          </a>

        </div>

      </div>


        {/* PUNTOS DECORATIVOS */}

        <div className="absolute left-[15%] top-[30%] h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_20px_5px_rgba(167,139,250,0.5)]" />

        <div className="absolute right-[20%] top-[40%] h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_20px_5px_rgba(34,211,238,0.5)]" />

        <div className="absolute bottom-[20%] left-[25%] h-1 w-1 rounded-full bg-fuchsia-400 shadow-[0_0_15px_4px_rgba(232,121,249,0.5)]" />


        {/* INDICADOR DE SCROLL */}

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-gray-500">

          <span>Scroll para explorar</span>

          <div className="h-8 w-5 rounded-full border border-white/20 p-1">

            <div className="mx-auto h-2 w-1 animate-bounce rounded-full bg-violet-400" />

          </div>

        </div>

      </section>



      {/* SOBRE MÍ */}

      <section
        id="sobre-mi"
        className="relative overflow-hidden border-t border-white/10 px-6 py-32"
      >
        <div className="mx-auto max-w-6xl">

          {/* TÍTULO */}

          <div className="mb-16">

            <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
              Sobre mí
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              Construyendo mi camino en el mundo de la tecnología.
            </h2>

          </div>


          {/* CONTENIDO */}

          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            {/* TEXTO */}

            <div>

              <p className="text-lg leading-8 text-gray-300">
                Soy Máximo, estudiante de Ingeniería en Sistemas de
                Información, apasionado por la tecnología y por entender
                cómo funcionan los sistemas que utilizamos todos los días.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-400">
                Actualmente estoy explorando diferentes áreas del desarrollo
                de software y profundizando en inteligencia artificial,
                buscando construir soluciones que combinen ingeniería,
                creatividad y tecnología.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-400">
                Mi objetivo es seguir aprendiendo, desarrollar proyectos
                reales y construir una carrera profesional orientada al
                desarrollo de software y las nuevas tecnologías.
              </p>


              {/* ESTADO */}

              <div className="mt-10 flex items-center gap-3">

                <span className="h-3 w-3 animate-pulse rounded-full bg-green-400 shadow-[0_0_15px_4px_rgba(74,222,128,0.3)]" />

                <span className="text-sm text-gray-400">
                  Actualmente aprendiendo y construyendo
                </span>

              </div>

            </div>


            {/* TARJETA */}

            <div className="relative">

              {/* Glow */}

              <div className="absolute -inset-4 rounded-3xl bg-violet-500/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

                {/* Header */}

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-gray-500">
                      PROFILE
                    </p>

                    <h3 className="mt-1 text-xl font-semibold">
                      Máximo
                    </h3>

                  </div>

                  <div className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs text-violet-300">
                    2026
                  </div>

                </div>


                {/* Línea */}

                <div className="my-8 h-px bg-white/10" />


                {/* Datos */}

                <div className="space-y-6">

                  <div>

                    <p className="text-xs uppercase tracking-widest text-gray-500">
                      Formación
                    </p>

                    <p className="mt-2 text-gray-200">
                      Ingeniería en Sistemas de Información
                    </p>

                  </div>


                  <div>

                    <p className="text-xs uppercase tracking-widest text-gray-500">
                      Intereses
                    </p>

                    <p className="mt-2 text-gray-200">
                      Software · IA · Tecnología
                    </p>

                  </div>


                  <div>

                    <p className="text-xs uppercase tracking-widest text-gray-500">
                      Enfoque
                    </p>

                    <p className="mt-2 text-gray-200">
                      Software Engineering + AI
                    </p>

                  </div>

                </div>


                {/* Footer */}

                <div className="mt-10 rounded-2xl border border-violet-400/10 bg-violet-400/5 p-4">

                  <p className="text-sm leading-6 text-gray-400">
                    Siempre buscando aprender algo nuevo,
                    construir proyectos y mejorar como ingeniero.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Skills />

      <Projects />

      <Education />

      <Contact />
      
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-gray-500 sm:flex-row">

          <p>
            © 2026 Máximo. Todos los derechos reservados.
          </p>

          <p>
            Software · AI · Systems
          </p>

        </div>
      </footer>

    </main>
  )
}

export default App