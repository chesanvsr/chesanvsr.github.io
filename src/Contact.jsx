import Reveal from "./Reveal"
function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden border-t border-white/10 px-6 py-32"
    >

      {/* GLOW */}

      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

    <Reveal>
      <div className="relative mx-auto max-w-4xl text-center">

        <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
          Contacto
        </p>

        <h2 className="mt-5 text-4xl font-bold sm:text-6xl">
          Construyamos algo
          <span className="text-violet-400"> interesante.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-400">
          Estoy interesado en seguir aprendiendo, participar en
          proyectos y conectar con personas del mundo de la tecnología.
        </p>


        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <a
            href="mailto:chesanvsr@gmail.com"
            className="rounded-full bg-white px-8 py-3 font-semibold text-black transition hover:scale-105 hover:bg-violet-200"
          >
            Contactarme
          </a>

          <a
            href="https://github.com/chesanvsr"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 px-8 py-3 font-semibold transition hover:border-violet-400 hover:bg-violet-400/10"
          >
            GitHub
          </a>

        </div>

      </div>
    </Reveal>
    </section>
  )
}

export default Contact