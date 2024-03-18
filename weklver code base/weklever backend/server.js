// server.js
const express = require('express');
const nodemailer = require('nodemailer');




const app = express();
const port = 3000;

// Configure Nodemailer with your email service credentials
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tajnoor2443@gmail.com',
        pass: 'mpsidqivmrqdymyd',
    },
});

// Define a route to handle the email sending
app.post('/send-email', (req, res) => {
    const mailOptions = {
        from: 'tajnoor2443@gmail.com',
        to: 'nosabo6103@vkr1.com',
        subject: '',
        text: '',
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).json({ message: 'Email could not be sent' });
        } else {
            console.log('Email sent: ' + info.response);
            res.json({ message: 'Email sent successfully' });
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
