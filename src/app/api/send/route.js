import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, role, teamSize, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false, // must be false for Office365
      auth: {
        user: 'info@bridgeqa.com',
        pass: process.env.OFFICE365_APP_PASSWORD, // use app password if MFA is on
      },
    });

    const emailBody = `
A new early access request has been submitted:

🔹 Name: ${name}
🔹 Email: ${email}
🔹 Role: ${role}
🔹 Team Size: ${teamSize}
📝 Message:
${message || "(No message provided)"}
    `.trim();

    await transporter.sendMail({
      from: '"BridgeQA" <info@bridgeqa.com>',
      to: 'info@bridgeqa.com',
      replyTo: email,
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
