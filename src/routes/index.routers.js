const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = Router();

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/tienda', (req, res) => {
    res.render('tienda1')
})

router.get('/tienda1', (req, res) => {
    res.render('tienda')
})

router.post('/enviar', async(req, res) => {
    const { nombre, telefono, correo, mensaje } = (req.body);

    contentHTML = `
        <h1>Informacion del cliente</h1>
        <ul style="font-size: 20px; list-style-type: none;">
            <li>Nombre: ${nombre}</li>
            <li>Correo electronico: ${correo}</li>
            <li>Telefono: ${telefono}</li>
        </ul>
        <p style="font-size: 25px">${mensaje}</p>
    `;

    contentforclientHTML = `
        <h1>Informacion del cliente</h1>
        <ul style="font-size: 20px; list-style-type: none;">
            <li>Nombre: ${nombre}</li>
            <li>Correo electronico: ${correo}</li>
            <li>Telefono: ${telefono}</li>
        </ul>
        <p style="font-size: 25px">${mensaje}</p>
        <h2>Gracias por escribirnos, en breves te contactaremos</h2>
    `;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: 'jesusjeampoolm@gmail.com',
            pass: 'diosbendiceme25'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const info = await transporter.sendMail({
        from: "'Clinica De Puertas De Carros' <clinicadepuertasdecarros_jg@hotmail.com>",
        to: 'tituymendoza@gmail.com',
        subject: 'Un cliente quiere contactarlos',
        html: contentHTML
    });

    const client = await transporter.sendMail({
        from: "'Clinica De Puertas De Carros' <clinicadepuertasdecarros_jg@hotmail.com>",
        to: (correo),
        subject: 'Website contact form',
        html: contentforclientHTML
    });

    console.log('Message sent', info.mensageId);

    res.render('index')
});
module.exports = router;