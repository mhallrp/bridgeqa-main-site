import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, role, teamSize, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL, // mhallrp@gmail.com
        pass: process.env.PASSWORD,
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
      from: `"BridgeQA Form" <${process.env.EMAIL}>`, // Must be your Gmail
      to: "info@bridgeqa.com",                       // Where you want to receive it
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
