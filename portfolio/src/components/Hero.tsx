import { Computer, DownloadIcon, Github, Linkedin, LocationEdit, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { MongoIcon, NextIcon, ReactIcon, TailwindIcon } from "@/app/Icon/icons";

const Hero = () => {
    return (
        <section className="py-6 md:py-10">
            <div className="grid md:grid-cols-3 gap-10 items-center max-w-6xl mx-auto">
                <div className="space-y-6 md:col-span-2" style={{ opacity: 1, transform: 'none' }}>
                    <div className="space-y-2">
                        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Shubham Patil</h1>
                        <p className="text-lg sm:text-xl text-muted-foreground">Software Engineer</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground"><div className="flex items-center gap-1">
                        <Mail size={18}/>
                        <a href="shubhpatil8510@gmail.com">shubhpatil8510@gmail.com</a>
                        </div>
                        <div className="flex items-center gap-1">
                            <LocationEdit size={18} /> 
                            <span>Pune, India</span>
                            </div>
                            </div>
                    <p className="text-muted-foreground text-sm sm:text-base">A goal-oriented software developer with experience in building web applications using modern technologies like React, Next.js, and more. Seeking to leverage my technical skills to deliver exceptional user experiences.</p>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        <Button><DownloadIcon /> Resume</Button>
                        <Button variant="outline"><Github /> </Button>
                        <Button variant="outline"><Mail /></Button>
                        <Button variant="outline"><Computer /></Button>
                        <Button variant="outline"><Linkedin /></Button>

                    </div>
                </div>
                       <div className="flex justify-center h-48 md:h-auto" style={{opacity: 1, transform: 'none'}}>
                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square">
                    <div className="absolute inset-0 rounded-lg animate-transformWiggle"></div>
                    <div className="absolute inset-0 grid grid-cols-2 gap-2 sm:gap-4 p-2 sm:p-4">
                        <div className="bg-muted rounded-lg p-2 sm:p-4 flex items-center justify-center" style={{transform: 'none'}}>
                                <div className="text-xl text-[#087ea4] animate-slowRotate">
                                        <ReactIcon  />
                                </div>
                        </div>

                        <div className="bg-muted rounded-lg p-2 sm:p-4 flex items-center justify-center animate-float" style={{transform: 'none'}}>
                                <div className="text-xl text-[#087ea4]">
                                        <NextIcon  />
                                </div>
                        </div>

                        <div className="bg-muted rounded-lg p-2 sm:p-4 flex items-center justify-center" style={{transform: 'none'}}>
                                <div className="text-xl text-[#087ea4] animate-float-slow">
                                        <MongoIcon  />
                                </div>
                        </div>

                        <div className="bg-muted rounded-lg p-2 sm:p-4 flex items-center justify-center animate-pulseShadow" style={{transform: 'none'}}>
                                <div className="text-xl text-[#087ea4]">
                                        <TailwindIcon  />
                                </div>
                        </div>

                     

                    </div>

                    <div className="absolute -top-3 sm:-top-5 -left-3 sm:-left-5 bg-background px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm shadow-md border animate-wave">ReactJs</div>
                    <div className="absolute -bottom-3 sm:-bottom-5 -right-3 sm:-right-5 bg-background px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm shadow-md border animate-float-sway">Tailwind CSS</div>
                    <div className="absolute -top-3 sm:-top-5 -right-3 sm:-right-5 bg-background px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm shadow-md border animate-float-wave-rotate">Next.js</div>
                    <div className="absolute -bottom-3 sm:-bottom-5 -left-3 sm:-left-5 bg-background px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm shadow-md border animate-float-wave-slide">MongoDB</div>
                </div>
            </div>
            </div>
     
        </section>
    )
}

export default Hero;