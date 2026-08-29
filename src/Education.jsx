import Reveal from "./Reveal"
function Education() {
  return (
    <section
      id="formacion"
      className="border-t border-white/10 px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">

        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
            Formación
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Mi camino académico.
          </h2>
        </div>


        <div className="relative ml-3 border-l border-violet-400/20 pl-8">

          {/* EXPERIENCIA ACADÉMICA */}

          <div className="relative pb-16">

            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-[#050510] bg-violet-400 shadow-[0_0_15px_3px_rgba(139,92,246,0.4)]" />

            <span className="text-sm text-violet-400">
              2023 — Actualidad
            </span>

            <h3 className="mt-3 text-2xl font-semibold">
              Ingeniería en Sistemas de Información
            </h3>

            <p className="mt-2 text-gray-500">
              Universidad Tecnológica Nacional
            </p>

            <p className="mt-5 max-w-2xl leading-7 text-gray-400">
              Formación en desarrollo de software, bases de datos,
              algoritmos, arquitectura de sistemas, matemática y
              diferentes áreas de la ingeniería informática.
            </p>

          </div>


          {/* FUTURO */}

          <div className="relative">

            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-[#050510] bg-cyan-400 shadow-[0_0_15px_3px_rgba(34,211,238,0.3)]" />

            <span className="text-sm text-cyan-400">
              Próximo objetivo
            </span>

            <h3 className="mt-3 text-2xl font-semibold">
              AI Engineering
            </h3>

            <p className="mt-5 max-w-2xl leading-7 text-gray-400">
              Profundizar en inteligencia artificial, machine learning,
              sistemas basados en LLMs y la integración de IA dentro
              de aplicaciones de software.
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Education