import nodemailer from 'nodemailer'

const emailRegistro = async (datos) => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const { email, nombre, token } = datos

  // Enviar el email
  await transport.sendMail({
    from: 'Bienes Raices.com',
    to: email,
    subject: 'Confirma tu cuenta en BienesRaices.com',
    text: 'Confirma tu cuenta en BienesRaices.com',
    html: `
      <p>Hola ${nombre}, comprueba tu cuenta en BienesRaices.com</p>

      <p>Tu cuenta ya esta lista, solo debes confirmarla en el siguiente enlace: 
      <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/confirmar/${token}">Confirmar cuenta</a> </p>

      <p>Si no creaste esta cuenta ignora este mensaje</p>
    `
  })
}
const emailOlvidePassword = async (datos) => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const { email, nombre, token } = datos

  // Enviar el email
  await transport.sendMail({
    from: 'Bienes Raices.com',
    to: email,
    subject: 'Restablece tu cuenta en BienesRaices',
    text: 'Restablece tu cuenta en BienesRaices',
    html: `
      <p>Hola ${nombre}, comprueba tu cuenta en BienesRaices.com</p>

      <p>Tu cuenta ya casi esta lista, sigue el siguiente enlace para restablecerla: 
      <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/olvide-password/${token}">Restablecer contraseña</a> </p>

      <p> Si no buscas restablecer tu cuenta ignora este mensaje</p>
    `
  })
}

export{
  emailRegistro,
  emailOlvidePassword
}