import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TOPICS = ["New project", "Collab", "Travel tips", "Just saying hi"];

const escapeHtml = (v: string) =>
  v.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

// Force dynamic rendering to avoid StaticGenBailoutError
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json(); // Parse the incoming JSON request
    const { senderEmail, message } = body;
    const topic = TOPICS.includes(body.topic) ? body.topic : "General";

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
      subject: `[${topic}] Message from ashvinpanicker.com`,
      replyTo: String(senderEmail),
      html: `<p><strong>Topic:</strong> ${topic}</p><p><strong>From:</strong> ${escapeHtml(String(senderEmail))}</p><p><strong>Message:</strong></p><p style="white-space:pre-wrap">${escapeHtml(String(message))}</p>`,
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
