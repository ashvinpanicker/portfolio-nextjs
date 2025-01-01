import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { senderEmail, message } = body;

  try {
    // Send email via Resend API
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`, // Ensure your key is set in .env.local
      },
      body: JSON.stringify({
        from: "Contact Form <onboarding@resend.dev>", // Your verified sender email
        to: ["ashvin.panicker@gmail.com"], // Recipient email
        subject: "Message from contact form",
        html: `<p><strong>From:</strong> ${senderEmail}</p><p><strong>Message:</strong> ${message}</p>`,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data.message || "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: Error | any) {
    return NextResponse.json({ error: error.message || "An error occurred while sending email." }, { status: 500 });
  }
}
