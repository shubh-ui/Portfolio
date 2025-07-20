"use client"

import { Linkedin, Mail, MapPin, PhoneCall } from "lucide-react"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const Contact = () => {

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

    const onSubmit = (data: any) => {
        console.log("Submitted:", data)
        // you can send form data to API here
    }


    return (
        <section className="py-10 my-20">
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

                                <Button type="submit" className="w-full">
                                    Submit Message
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact