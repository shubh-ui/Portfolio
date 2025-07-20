const Experience = () => {
    const Experience = {
        Meta_Intern: {
            keyPoints: [
            { id: 1, key: "Led the development of a high-impact feature for the Indonesia client, resulting in a 40% increase in business conversions and improved user engagement." },
            { id: 2, key: "Resolved multiple frontend bugs, contributing to better system stability and a smoother user experience." },
            { id: 3, key: "Built a cross-product dashboard to surface key business metrics, tailored to meet specific organizational goals." },
            { id: 4, key: "Collaborated closely with design and backend teams to ensure seamless integration and a consistent UI/UX across the platform." }
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
            { id: 1, key: "Led development of a scalable API Integration platform serving enterprise clients (MenuLife Hong Kong, SunLife Malaysia,SunLife Vietnam) building the entire frontend from scratch." },
            { id: 2, key: "Architected and implemented Micro-Frontend Architecture, enabling independent team deployments and reducing development bottlenecks by 60%." },
            { id: 3, key: "Collaborated cross-functionally with backend, product, and design teams to deliver seamless user experiences and critical business features on tight deadlines." },
            { id: 4, key: "Optimized application performance through advanced techniques including route-based lazy loading and image optimization, achieving 25% reduction in page load times." },
            { id: 5, key: "Established robust testing infrastructure with Jest and Cypress, implementing comprehensive unit and end-to-end test suites to ensure enterprise-grade code quality." },
            { id: 6, key: "Built a fully functional Workflow Builder module UI from scratch, extending a BPMN library to support business-specific logic and customization." }, 
            { id: 7, key: "Contributed to key architectural decisions that streamlined system integration processes, reducing integration time by 60% and improving developer productivity." }

        ],
        tech: [
            {id:1, value: "React"},
            {id:2, value: "Javascript"},
            {id:3, value: "Typescript"},
            {id:4, value: "Ant Design"},
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