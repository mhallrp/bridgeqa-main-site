import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { type, name, email, role, teamSize, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    let subject = '';
    let emailBody = '';

    if (type === 'earlyAccess') {
      subject = `BridgeQA Early Access Request from ${email}`;
      emailBody = `
A new early access request has been submitted:

🔹 Name: ${name}
🔹 Email: ${email}
🔹 Role: ${role}
🔹 Team Size: ${teamSize}
📝 Message:
${message || "(No message provided)"}
      `.trim();
    } else if (type === 'mailingList') {
      subject = `Mailing List Subscription from ${email}`;
      emailBody = `
A new mailing list subscription:

🔹 Email: ${email}
      `.trim();
    } else {
      return new Response(JSON.stringify({ message: 'Invalid request type.' }), {
        status: 400,
      });
    }

    await transporter.sendMail({
      from: `"BridgeQA Form" <${process.env.EMAIL}>`,
      to: "info@bridgeqa.com",
      subject,
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
