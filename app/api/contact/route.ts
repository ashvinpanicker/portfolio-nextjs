import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Force dynamic rendering to avoid StaticGenBailoutError
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json(); // Parse the incoming JSON request
    const { senderEmail, message } = body;

    if (!senderEmail || !message) {
      return NextResponse.json(
        { error: "Both senderEmail and message are required." },
        { status: 400 }
      );
    }

    // Sending email using Resend
    const response = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Your verified sender
      to: ["agnjkafgh@gmail.com"],
      subject: "Message from Contact Form",
      html: `<p><strong>From:</strong> ${senderEmail}</p><p><strong>Message:</strong> ${message}</p>`,
    });

    if (response.error) {
      return NextResponse.json(
        { error: response.error.message || "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
