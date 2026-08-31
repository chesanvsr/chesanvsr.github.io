import Reveal from "./Reveal"

const projects = [
  {
    number: "01",
    title: "Sistema de Gestión para PYMEs",
    description:
      "Aplicación fullstack desarrollada para la gestión de pequeñas y medianas empresas, permitiendo administrar usuarios, artículos, categorías e informes comerciales.",
    technologies: ["React", "Node.js", "Express", "SQL"],
    status: "Completado",
    type: "Software",
    url: "https://github.com/chesanvsr/sistema-gestion-pymes",
  },

  {
    number: "02",
    title: "Sistema de Gestión de Stock",
    description:
      "Aplicación fullstack desarrollada para el control y ajuste de stock de productos, con gestión mediante API REST.",
    technologies: ["React", "Node.js", "API REST"],
    status: "Completado",
    type: "Software",
    url: "https://github.com/chesanvsr/gestion-stock",
  },

  {
    number: "03",
    title: "AI Knowledge Assistant",
    description:
      "Proyecto de inteligencia artificial actualmente en desarrollo, orientado a integrar modelos de lenguaje y recuperación de información dentro de una aplicación de software.",
    technologies: ["Python", "LLM", "RAG", "Vector DB"],
    status: "En desarrollo",
    type: "Artificial Intelligence",
  },
]

function Projects() {
  return (
    <section
      id="proyectos"
      className="relative overflow-hidden border-t border-white/10 px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}

        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
              Proyectos
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Lo que estoy construyendo.
            </h2>

          </div>

          <p className="max-w-md text-sm leading-7 text-gray-500">
            Proyectos académicos y personales donde aplico conocimientos
            de ingeniería de software y exploro nuevas tecnologías.
          </p>

        </div>

        {/* PROJECTS */}

        <Reveal className="space-y-5">

          {projects.map((project) => (

            <article
              key={project.number}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-500 hover:border-violet-400/30 hover:bg-white/[0.05] sm:p-8"
            >

              {/* GLOW */}

              <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-violet-600/10 blur-[100px] transition duration-500 group-hover:bg-violet-600/20" />

              <div className="relative grid gap-8 md:grid-cols-[80px_1fr_auto] md:items-center">

                {/* NUMBER */}

                <span className="font-mono text-sm text-gray-600">
                  {project.number}
                </span>

                {/* CONTENT */}

                <div>

                  <div className="flex flex-wrap items-center gap-3">

                    <h3 className="text-2xl font-semibold">
                      {project.title}
                    </h3>

                    <span className="rounded-full border border-violet-400/20 bg-violet-400/5 px-3 py-1 text-xs text-violet-300">
                      {project.type}
                    </span>

                  </div>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400">
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES */}

                  <div className="mt-5 flex flex-wrap gap-2">

                    {project.technologies.map((technology) => (

                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-400"
                      >
                        {technology}
                      </span>

                    ))}

                  </div>

                </div>

                {/* STATUS + LINK */}

                <div className="flex flex-row items-center justify-between gap-5 md:flex-col md:items-end">

                  <span
                    className={`text-xs ${
                      project.status === "En desarrollo"
                        ? "text-cyan-400"
                        : "text-gray-500"
                    }`}
                  >
                    ● {project.status}
                  </span>

                  {/* LINK */}

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-400 transition group-hover:text-violet-300"
                    >
                      Ver proyecto →
                    </a>
                  )}

                </div>

              </div>

            </article>

          ))}

        </Reveal>

      </div>
    </section>
  )
}

export default Projects
