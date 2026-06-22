import { NextResponse } from "next/server";
import { Resend } from "resend";
import { validateContactForm } from "@/lib/contactValidator";
import { ContactEmail } from "@/components/email/ContactEmail";
import type { ContactFormInput } from "@/lib/types";

export async function POST(req: Request): Promise<NextResponse> {
  // 1. Parse body
  const body = (await req.json()) as ContactFormInput;

  // 2. Server-side validation
  const errors = validateContactForm(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  // 3. Send email via Resend
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL!,
      subject: `New message from ${body.name}`,
      react: ContactEmail({ name: body.name, email: body.email, message: body.message }),
    });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
