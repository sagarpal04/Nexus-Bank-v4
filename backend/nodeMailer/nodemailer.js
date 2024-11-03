import nodemailer from 'nodemailer';

// Create transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Corrected host
    port: 587,
    secure: false,
    auth: {
        user: 'nexus.bank.org@gmail.com',
        pass: 'jfxaxtmlbhplmvwe' // Make sure to use an app password if 2FA is enabled
    }
});

export default transporter;

