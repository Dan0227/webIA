// require('dotenv').config();  // Cargar las variables de entorno desde el archivo .env

// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//     service: 'Gmail', // Puedes usar otro servicio como Outlook o SMTP genérico
//     auth: {
//         user: process.env.EMAIL_USER, // Obtiene el correo de las variables de entorno
//         pass: process.env.EMAIL_PASS, // Obtiene la contraseña o token de las variables de entorno
//     },
// });

// const sendVerificationEmail = async (email, token) => {
//     const verificationLink = `${process.env.FRONTEND_URL}/verify-email?token=${token}`;
//     await transporter.sendMail({
//         from: process.env.EMAIL_USER,  // Usa la dirección de correo desde las variables de entorno
//         to: email,
//         subject: 'Verificación de cuenta',
//         html: `
//             <h1>Bienvenido</h1>
//             <p>Haz clic en el enlace para verificar tu cuenta:</p>
//             <a href="${verificationLink}">Verificar cuenta</a>
//         `,
//     });
// };

// module.exports = { sendVerificationEmail };