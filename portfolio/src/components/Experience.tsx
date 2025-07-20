const Experience = () => {
    const Experience = {
        Meta_Intern: [
            { id: 1, key: "Assisted in building reusable UI components using React.js." },
            { id: 2, key: "Collaborated with senior developers to implement responsive layouts." },
            { id: 3, key: "Contributed to bug fixes and UI improvements in internal dashboards." },
            { id: 4, key: "Learned and applied Tailwind CSS for consistent styling across components." }
        ],
        Meta_Developer: [
            { id: 1, key: "Led the development of a dynamic dashboard with chart visualizations using Recharts." },
            { id: 2, key: "Integrated REST APIs and handled error states for a better user experience." },
            { id: 3, key: "Optimized page load time by implementing lazy loading and code splitting." },
            { id: 4, key: "Wrote unit tests with Jest and React Testing Library to ensure UI reliability." },
            { id: 5, key: "Collaborated cross-functionally with design and backend teams to deliver features on time." }
        ]
    };


    return (
        <section className="py-10 my-18">
            <div style={{ opacity: 1, transform: 'none' }}>
                <h2 className="text-3xl font-bold mb-10 text-[#09090b]">Experience</h2>
                <div className="space-y-10">
                    <div className="space-y-4" style={{ opacity: 1, transform: 'none' }}>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <div>
                                <h3 className="text-xl font-semibold text-[#09090b]">
                                    Software Developement Intern [ frontend ]
                                </h3>
                                <p className="text-muted-foreground">
                                    Metamorphosys Technologies
                                </p>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                May 2025 - Present
                            </p>
                        </div>
                        <ul className="list-disc ml-4">
                            {Experience.Meta_Intern.map((item, i) => (
                                <li className={`text-sm font-[var(--font-inter)] ${i > 0 ? 'mt-1' : ''}`} key={`${i} - ${item}`}>
                                    {item.key}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                                React
                            </div>
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                                TypeScript
                            </div>
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                                Material UI
                            </div>
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                                SCSS
                            </div>
                        </div>

                    </div>

                    <div className="space-y-4" style={{ opacity: 1, transform: 'none' }}>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <div>
                                <h3 className="text-xl font-semibold">
                                    Software Developer [ frontend ]
                                </h3>
                                <p className="text-muted-foreground">
                                    Metamorphosys Technologies
                                </p>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                May 2025 - Present
                            </p>
                        </div>
                        <ul className="list-disc ml-4">
                            {Experience.Meta_Developer.map((item, i) => (
                                <li className={`text-sm ${i > 0 ? 'mt-1' : ''}`} key={item.id}>
                                    {item.key}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                                React
                            </div>
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                                TypeScript
                            </div>
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                                Material UI
                            </div>
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                                SCSS
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;