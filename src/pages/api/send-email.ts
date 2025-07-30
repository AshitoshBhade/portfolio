import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.GMAIL_USER,
		pass: process.env.GMAIL_PASS
	}
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

	const { name, email, message, phone } = req.body;

	if (!name || !email || !message) {
		return res.status(400).json({ message: "Missing fields" });
	}

	try {
		await transporter.sendMail({
			from: `"${name}" <${email}>`,
			to: process.env.GMAIL_USER,
			subject: "Blockchain Developer Inquiry from Portfolio",
			text: message, // Always keep a plain text fallback
			html: `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #f5f7fa;
            margin: 0;
            padding: 0;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 40px auto;
            background: #ffffff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
          }
          .header h2 {
            margin: 0;
            color: #0057ff;
          }
          .info {
            margin-bottom: 20px;
          }
          .info p {
            margin: 5px 0;
            font-size: 15px;
          }
          .info a {
            color: #0057ff;
            text-decoration: none;
          }
          .message {
            padding: 15px;
            background: #f0f2f5;
            border-radius: 6px;
            font-size: 15px;
            white-space: pre-line;
          }
          .footer {
            margin-top: 30px;
            text-align: center;
            font-size: 12px;
            color: #999;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>📬 New Inquiry</h2>
            <p>Someone just reached out via your contact form.</p>
          </div>

          <div class="info">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ""}
          </div>

          <div class="message">
            ${message}
          </div>

          <div class="footer">
            Sent from your portfolio — make sure to reply soon!
          </div>
        </div>
      </body>
    </html>
  `
		});

		return res.status(200).json({ message: "Email sent successfully" });
	} catch (error) {
		console.error("Email sending error:", error);
		return res.status(500).json({ message: "Failed to send email" });
	}
}
