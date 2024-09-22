//hagan npm i nodemailer
//pidanme el archivo .env
import nodemailer from "nodemailer";

const emailRegistro = async (datos) => {
    // const transport = nodemailer.createTransport({
    //     host: process.env.EMAIL_HOST,
    //     port: process.env.EMAIL_PORT,
    //     auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS
    //     }
    // });  

    const EMAIL_HOST = "smtp.gmail.com"
    const EMAIL_PORT = 465
    const EMAIL_USER = "agustinsoleti95@gmail.com"
    const EMAIL_PASS = "uugs abts qtfs pbmz"

    const transport = nodemailer.createTransport({
        host: EMAIL_HOST,
        port: EMAIL_PORT,
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS
        }
    });
    const { email, nombre, token } = datos;
    //enviar email
    const info = await transport.sendMail({
        from: '"Lets Print 3D"<correo@letsprint3d.com',
        to: `${email}`,
        subject: "Valida tu cuenta en Lets Print 3D",
        text: "Valida tu cuenta en Lets Print 3D",
        html: `<p> Hola ${nombre}, valida tu cuenta en Lets Print 3D. </p>
        <p> Tu cuenta está lista, sólo debes validarla en el siguiente enlace:
        <a href="http://localhost:5000/api/client/confirm/${token}">Comprobar cuenta</a> </p>
        <p> Si tu no creaste esta cuenta, ignora este mensaje.</p>
        `
    });
    console.log("Mensaje enviado: %s", info.messageId)
};

export default emailRegistro;