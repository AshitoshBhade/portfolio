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
			text: message,
			html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> <p><strong>Phone:</strong>${phone}</p><p>${message}</p>`
		});

		return res.status(200).json({ message: "Email sent successfully" });
	} catch (error) {
		console.error("Email sending error:", error);
		return res.status(500).json({ message: "Failed to send email" });
	}
}
