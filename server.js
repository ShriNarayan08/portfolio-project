const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Render the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Contact form POST route
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Setup email transport
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'tiwarijiii888@gmail.com', // Replace with your email
            pass: 'jaal sczy lmzx ahhb'   // Replace with your email password
        }
    });

    const mailOptions = {
        from: email,
        to: 'tiwarijiii888@gmail.com',
        subject: 'tiwarijiii888@gmail.com',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        res.redirect('/');
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`http://localhost:3000`);
});