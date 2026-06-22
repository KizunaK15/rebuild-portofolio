interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export function ContactEmail({ name, email, message }: ContactEmailProps) {
  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 600, margin: "0 auto" }}>
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
      <p><strong>Message:</strong></p>
      <blockquote style={{ borderLeft: "4px solid #6366f1", paddingLeft: 16 }}>
        {message}
      </blockquote>
    </div>
  );
}
