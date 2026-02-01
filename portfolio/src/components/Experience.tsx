const Experience = () => {
    const Experience = {
        Meta_Intern: {
            keyPoints: [
            { id: 1, key: "Delivered a client-facing feature for an Indonesia-based customer, driving a 40% increase in business conversions and measurable improvements in user engagement." },
            { id: 2, key: "Designed and developed a cross-product analytics dashboard to surface key business insig hts, supporting data-driven decisions across teams." },
            { id: 3, key: "Resolved multiple production bugs, improving overall system stability and user experience." },
        ],
        tech:[
            {id:1, value: "React"},
            {id:2, value: "Javascript"},
            {id:3, value: "Typescript"},
            {id:4, value: "Ant Design"},
            {id:5, value: "SCSS"}

        ]
        },
        Meta_Developer: {
            keyPoints: [
            { id: 1, key: "Led development of a scalable API integration product, owning the entire Frontend from ground up and mentoring a team of two engineers. Product is adopted across enterprise market in Hong Kong, Malaysia and Vietnam." },
            { id: 2, key: "Architected and implemented a Micro-Frontend architecture, improving application performance by 20% through memoization strategies and optimized event handling using debouncing and throttling." },
            { id: 3, key: "Designed and developed a modular, node-driven Agent Workflow Builder with dynamic graph rendering, connection validation, custom node types, and real-time state sync hronization, collaborating closely with backend, product, and design teams." },
            { id: 4, key: "Reduced bundle size by 45% by applying advanced optimization techniques such as code splitting, route-based lazy loading, and image optimization, resulting in a 25% reduction in initial page load times." },
            { id: 5, key: "Owned the Frontend lifecycle end-to-end, from development to production and improved release reliability by implemanting end to end test cases using playwright." },
            { id: 6, key: "Contributed to key architectural decisions and drove Frontend best practices through rigorous code reviews, improving code scalability and developer productivity, while conducting 20+ technical interviews to support team growth." }, 
            { id: 7, key: "Developed RESTful APIs using Node.js, focusing on clean API design, validation, and Frontend-backend integration." }

        ],
        tech: [
            {id:1, value: "React"},
            {id:2, value: "Javascript"},
            {id:3, value: "Typescript"},
            {id:4, value: "Ant Design"},
            {id:1, value: "RTK Query"},
            {id:1, value: "Redux-toolkit"},
            {id:5, value: "SCSS"},
            {id:6, value: "Webpack"},
            {id:7, value: "Angular"}
        ]
        }
    };


    return (
        <section id="Experience" className="py-10 my-18">
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
                                Oct 2022 - March 2023
                            </p>
                        </div>
                        <ul className="list-disc ml-4">
                            {Experience.Meta_Intern.keyPoints.map((item, i) => (
                                <li className={`text-sm font-[var(--font-inter)] ${i > 0 ? 'mt-1' : ''}`} key={`${i} - ${item}`}>
                                    {item.key}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                            {
                                Experience.Meta_Intern.tech.map((item) => (
                                    <div key={item.id} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                                        {item.value}
                                    </div>
                                ))
                            }
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
                                Apr 2023 - Present
                            </p>
                        </div>
                        <ul className="list-disc ml-4">
                            {Experience.Meta_Developer.keyPoints.map((item, i) => (
                                <li className={`text-sm ${i > 0 ? 'mt-1' : ''}`} key={item.id}>
                                    {item.key}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                            {
                                Experience.Meta_Developer.tech.map((item) => (
                                    <div key={item.id} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                                        {item.value}
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;