import { GitHub } from "@/app/Icon/icons";
import { Button } from "./ui/button";

const projects = [
 {
  title: "Medium - Blog Site",
  deployed: false,
  description:
    "A full-featured blogging platform where users can read and write articles using a rich markdown editor. Users can follow authors, leave comments, and manage their own profiles. The platform supports real-time updates and responsive design.",
  technologies: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS"
  ],
  features: [
    "Rich text markdown editor for article creation",
    "User authentication and authorization",
    "Comment system with threaded replies",
    "Follow/unfollow functionality for authors",
    "Responsive design for mobile and desktop",
    "MongoDB for scalable data storage",
    "RESTful API built with Express.js",
    "JWT-based authentication for secure routes"
  ],
  liveLink: "https://medium-clone.com", 
  githubLink:"https://github.com/shubh-ui/medium_web",
  images: ["/images/Medium_3.png","/images/Medium_1.png", "/images/Medium_2.png"] 
},
 {
  title: "Ajio - Ecommerce Shopping Site",
  deployed: false,
  description:
    "A full-stack ecommerce platform inspired by Ajio, where users can browse products, view details, add items to cart, and securely check out. Features include authentication, cart management, admin controls, and a clean, responsive UI.",
  technologies: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS"
  ],
  features: [
    "User registration and login with JWT-based authentication",
    "Browse products by category, brand, and filters",
    "Add to cart and update cart quantities",
    "Responsive product detail pages",
    "Admin panel for managing products and inventory",
    "Order placement with confirmation",
    "MongoDB for scalable data storage",
    "Fully responsive UI using Tailwind CSS"
  ],
  liveLink: "https://ajio-clone.com", // Update with real live link
  githubLink: "https://github.com/shubh-ui/Ajio_commerce", // Update repo name if needed
  images: [
    "/images/Ajio_1.png",
    "/images/Ajio_2.1.png",
    "/images/Ajio_3.png"
  ]
}


];

const Project = () => {
  return (
    <section id="Projects">
      <div style={{ opacity: 1, transform: "none" }}>
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        <div className="grid gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-6 border rounded-xl overflow-hidden group"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="overflow-hidden relative h-[300px] md:h-full border-b md:border-b-0 md:border-r">
                <div className="absolute inset-0 overflow-y-auto scrollbar-hide">
                  {/* <img
                    alt={project.title}
                    src={project.image}
                    className="w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  /> */}
                  {
                    project.images.map((img) =>
                   (
                         <img
                    alt={project.title}
                    src={img}
                    className="w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                   )
                    )
                  }
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <div
                      key={i}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    >
                      {tech}
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Live Link */}
                <div className="flex gap-3 pt-2">
                  <a
    
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-external-link mr-2 h-4 w-4"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                    Live
                  </a>
                  <a 
                    href={project.githubLink} 
                    className="cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer">
                  <Button variant={"outline"} className="cursor-pointer"> <GitHub />GitHub</Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
