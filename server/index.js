import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import express from 'express';
import nodemailer from 'nodemailer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '.env') });
dotenv.config(); // fallback to current working directory if different

const app = express();

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
const CONTACT_TO =
  process.env.CONTACT_TO || GMAIL_USER || 'mdkharulislamshagor@gmail.com';

const allowedOrigins = [
  'https://shagor.pro.bd',
  'https://www.shagor.pro.bd',
  process.env.CLIENT_ORIGIN,
  'http://localhost:3000',
  'http://localhost:5173',
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. Postman, curl)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`CORS: origin ${origin} not allowed`));
      }
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  })
);
app.use(express.json({ limit: '20kb' }));

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

app.post('/api/contact', async (req, res) => {
  const name = String(req.body?.name || '').trim();
  const email = String(req.body?.email || '').trim();
  const subject = String(req.body?.subject || '').trim();
  const message = String(req.body?.message || '').trim();

  if (!name || !email || !message) {
    return res.status(400).json({
      ok: false,
      error: 'Name, email, and message are required.',
    });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({
      ok: false,
      error: 'Please enter a valid email address.',
    });
  }

  if (
    name.length > 120 ||
    email.length > 200 ||
    subject.length > 200 ||
    message.length > 5000
  ) {
    return res.status(400).json({
      ok: false,
      error: 'One of the fields is too long.',
    });
  }

  const gmailUser = process.env.GMAIL_USER || GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD || GMAIL_APP_PASSWORD;
  const contactTo = process.env.CONTACT_TO || CONTACT_TO || gmailUser || 'mdkharulislamshagor@gmail.com';

  if (!gmailUser || !gmailAppPassword) {
    return res.status(500).json({
      ok: false,
      error: 'Email is not configured on the server. Please check your GMAIL_USER and GMAIL_APP_PASSWORD in server/.env.',
    });
  }

  const topic = subject || `Portfolio inquiry from ${name}`;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${gmailUser}>`,
      to: contactTo,
      replyTo: `"${name.replace(/"/g, '')}" <${email}>`,
      subject: topic,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${topic}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(topic)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      `,
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error('Contact email failed:', err);
    return res.status(500).json({
      ok: false,
      error: 'Failed to send email. Try again later.',
    });
  }
});

// Local development only — Vercel uses export default
if (process.env.VERCEL !== '1') {
  const PORT = Number(process.env.PORT) || 5000;
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
}

export default app;
