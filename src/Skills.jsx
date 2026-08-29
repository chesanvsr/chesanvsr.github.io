import Reveal from "./Reveal"

const skillGroups = [
  {
    title: "Software",
    description: "Desarrollo de aplicaciones y sistemas.",
    skills: ["Python", "JavaScript", "React", "Node.js", "Git"],
  },
  {
    title: "Backend",
    description: "APIs, servidores y arquitectura.",
    skills: ["REST API", "FastAPI", "Express", "PostgreSQL"],
  },
  {
    title: "Data",
    description: "Datos, consultas y análisis.",
    skills: ["SQL", "PostgreSQL", "Pandas", "NumPy"],
  },
  {
  title: "Artificial Intelligence",
  description: "Área que estoy comenzando a explorar.",
  skills: ["Machine Learning", "LLMs", "RAG", "AI Agents"],
   },
  {
    title: "Tools",
    description: "Herramientas para desarrollar y desplegar.",
    skills: ["Docker", "Linux", "GitHub", "VS Code"],
  },
]

function Skills() {
  return (
    <section
      id="skills"
      className="relative border-t border-white/10 px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}

        <div className="mb-16 max-w-3xl">

          <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
            Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Tecnologías que estoy explorando.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Una combinación de desarrollo de software, datos e
            inteligencia artificial que voy construyendo y
            profundizando a medida que avanzo en mi formación.
          </p>

        </div>


        {/* GRID */}

        <Reveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map((group) => (

            <div
              key={group.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-400/[0.04]"
            >

              {/* ICONO */}

              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/10 text-violet-300">

                <span className="text-lg">
                  ✦
                </span>

              </div>


              <h3 className="text-xl font-semibold">
                {group.title}
              </h3>


              <p className="mt-2 text-sm leading-6 text-gray-500">
                {group.description}
              </p>


              {/* TAGS */}

              <div className="mt-6 flex flex-wrap gap-2">

                {group.skills.map((skill) => (

                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300 transition group-hover:border-violet-400/20"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </Reveal>

      </div>
    </section>
  )
}

export default Skills