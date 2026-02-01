import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { name, email, message } = body

    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["shubhpatil8510@gmail.com"],
      subject: `New Contact Message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    console.log("RESEND RESPONSE:", data)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("EMAIL ERROR:", error)
    return NextResponse.json(
      { success: false },
      { status: 500 }
    )
  }
}
