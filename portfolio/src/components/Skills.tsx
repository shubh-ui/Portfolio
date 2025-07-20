import { CSS, Figma, Git, GitHub, HTML, Javascript, MongoDB, MySQL, NextJs, NPM, ReactJs, SCSS, Tailwind, TypeScript, Vercel, VsCode } from "@/app/Icon/icons"

const Skills = () => {

    const skills = {
        FrontEnd: [
            {
                name: "Javascript",
                icon: <Javascript />
            },
             {
                name: "Typescript",
                icon: <TypeScript />
            },
            {
                name: "React.Js",
                icon: <ReactJs />
            },
            {
                name: "Next.Js",
                icon: <NextJs />
            },
            {
                name: "HTML",
                icon: <HTML />
            },
            {
                name: "CSS",
                icon: <CSS />
            },
            {
                name: "SCSS",
                icon: <SCSS />
            },
            {
                name: "Tailwind CSS",
                icon: <Tailwind />
            },
        ],
        DataBases: [
            {
                name: "MongoDB",
                icon: <MongoDB />
            },
            {
                name: "MySQL",
                icon: <MySQL />
            }
        ],
        Tools: [
            {
                name: "Git",
                icon: <Git />
            },
            {
                name: "GitHub",
                icon: <GitHub />
            },
            {
                name: "VsCode",
                icon: <VsCode />
            },
            {
                name: "Figma",
                icon: <Figma />
            },
            {
                name: "Vercel",
                icon: <Vercel />
            },
              {
                name: "Npm",
                icon: <NPM />
            }
        ]
    }
    return (
        <section className="py-10 my-18">
            <div style={{ opacity: 1, transform: 'none'}}>
                <h2 className="text-3xl font-bold mb-6" style={{ opacity: 1, transform: 'none' }} >
                    My Skills
                </h2>
                <p className="text-muted-foreground mb-10" style={{ opacity: 1, transform: 'none' }}>
                    Technologies and tools I&apos;ve worked with throughout my projects and experience
                </p>

                <div className="grid gap-10" style={{ opacity: 1 }}>
                    <div style={{ opacity: 1, transform: 'none' }}>
                        <h3 className="text-xl font-semibold mb-4 transition-transform duration-300 bounce-hover" style={{ transform: 'none' }}>Front End</h3>
                        <div className="flex flex-wrap gap-4">
                            {
                                skills.FrontEnd.map((k) => {
                                    return (
                                        <div className="flex flex-col items-center gap-2 group" key={k.name} style={{ opacity: 1, transform: 'none' }}>
                                            <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center text-xl
                                                group-hover:bg-muted/50 bounce-up-hover
                                                border border-transparent group-hover:border-primary/20" style={{ transform: 'none' }}>
                                                    {k.icon}
                                            </div>
                                            <span className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">{k.name}</span>

                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                      <div style={{ opacity: 1, transform: 'none' }}>
                        <h3 className="text-xl font-semibold mb-4 bounce-hover" style={{ transform: 'none' }}>Databases</h3>
                        <div className="flex flex-wrap gap-4">
                            {
                                skills.DataBases.map((k) => {
                                    return (
                                        <div className="flex flex-col items-center gap-2 group" key={k.name} style={{ opacity: 1, transform: 'none' }}>
                                            <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center text-xl
                                                group-hover:bg-muted/50 bounce-up-hover
                                                border border-transparent group-hover:border-primary/20" style={{ transform: 'none' }}>
                                                    {k.icon}
                                            </div>
                                            <span className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">{k.name}</span>

                                        </div>
                                    )
                                })
                            }
                        </div>
                      </div>

                      <div style={{ opacity: 1, transform: 'none' }}>
                        <h3 className="text-xl font-semibold mb-4 bounce-hover" style={{ transform: 'none' }}>Tools & Platforms</h3>
                        <div className="flex flex-wrap gap-4">
                            {
                                skills.Tools.map((k) => {
                                    return (
                                        <div className="flex flex-col items-center gap-2 group" key={k.name} style={{ opacity: 1, transform: 'none' }}>
                                            <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center text-xl
                                                group-hover:bg-muted/50 bounce-up-hover
                                                border border-transparent group-hover:border-primary/20" style={{ transform: 'none' }}>
                                                    {k.icon}
                                            </div>
                                            <span className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">{k.name}</span>

                                        </div>
                                    )
                                })
                            }
                        </div>
                      </div>
                </div>
            </div>
        </section>
    )
}

export default Skills