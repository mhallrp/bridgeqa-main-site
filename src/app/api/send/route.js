import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, role, teamSize, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const emailBody = `
New Early Access Request:

Name: ${name}
Email: ${email}
Role: ${role}
Team Size: ${teamSize}
Message: ${message || "(No message provided)"}
    `.trim();

    await transporter.sendMail({
      from: email,
      to: "info@bridgeqa.com",
      subject: `BridgeQA Early Access Request from ${email}`,
      text: emailBody,
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
      status: 200,
    });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Failed to send email.' }), {
      status: 500,
    });
  }
}
