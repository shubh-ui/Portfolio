"use client"

import { Linkedin, Mail, MapPin, PhoneCall } from "lucide-react"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useState } from "react"

interface ContactProps {
    name:string,
    email:string,
    message: string
}

const Contact = () => {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")


    const formSchema = z.object({
        name: z
            .string()
            .min(2, { message: "Name must be at least 2 characters long" })
            .max(50, { message: "Name must be at most 50 characters long" }),

        email: z
            .string()
            .email({ message: "Please enter a valid email address" }),

        message: z
            .string()
            .min(2, { message: "Message must be at least 2 characters long" })
            .max(200, { message: "Message must be at most 200 characters long" }),
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

const onSubmit = async (data:any) => {
  try {
    setStatus("loading");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    if (!res.ok) throw new Error("Failed")
    setStatus("success");
    form.reset();
    setTimeout(() => {
      setStatus("idle");
    }, 5000);
  } catch (error) {
    alert("Something went wrong ❌")
  }
}


    return (
        <section id="Contact" className="py-10 my-20">
            <div style={{ opacity: 1, transform: 'none' }}>
                <h2 className="text-3xl font-bold mb-10">Contact Me</h2>
                <div className="grid md:grid-cols-2 gap-10 items-start">
                    {/* Contact Info Column */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold">Get In Touch</h3>
                        <div className="space-y-4">
                            {/* Email */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                                    <Mail />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Email</p>
                                    <a className="font-medium hover:underline" href="mailto:shubhpatil8510@gmail.com">
                                        shubhpatil8510@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                                    <PhoneCall />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Phone</p>
                                    <a className="font-medium hover:underline" href="tel:9607257464">
                                        +91 9607257464
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                                    <MapPin />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Location</p>
                                    <p className="font-medium hover:underline">Pune, India</p>
                                </div>
                            </div>

                            {/* LinkedIn */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                                    <Linkedin />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                                    <a
                                        className="font-medium hover:underline"
                                        target="_blank"
                                        href="https://linkedin.com/in/shubampatil"
                                        rel="noreferrer"
                                    >
                                        linkedin.com/in/shubampatil
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Column */}
                    <div>
                        {
                            status == 'success' ? <SuccessState /> : (
                                <div>
                            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Your name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input type="email" placeholder="Your email" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Your message..." rows={5} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button type="submit" className="w-full cursor-pointer">
                                    Submit Message
                                </Button>
                            </form>
                        </Form>
                        </div>
                            )
                        }
                        
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact



const SuccessState = () => (
  <div className="flex min-h-[320px] flex-col items-center justify-center rounded-xl border bg-background px-6 text-center">
    
    {/* Animated check */}
    <div className="relative mb-6 flex h-24 w-24 items-center justify-center">
      <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400/30" />
      <span className="absolute h-20 w-20 rounded-full bg-emerald-400/20" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500">
        ✓
      </span>
    </div>

    <h3 className="text-xl font-semibold">Message sent successfully</h3>
    <p className="mt-2 text-sm text-muted-foreground">
      Thanks for reaching out. I’ll get back to you soon.
    </p>
  </div>
)
