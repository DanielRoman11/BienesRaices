import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
});

const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos

  try {
    const info = await transport.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Confirma tu cuenta',
      text: "Confirma tu cuenta",
      html: `
        <p>Hola ${nombre}, comprueba tu cuenta</p>
  
        <p>Tu cuenta ya esta lista, solo debes confirmarla en el siguiente enlace: 
        <a href="${process.env.BACKEND_URL}/auth/confirmar/${token}">Confirmar cuenta</a> </p>
  
        <p>Si no creaste esta cuenta ignora este mensaje</p>
      `})

    console.log("Se envío el email correctamente",info);
    
  } catch (error) {
    console.error("No se pudo enviar el email: ", error);
  }
}

const emailOlvidePassword = async (datos) => {
  const { email, nombre, token } = datos

  try {
    // Enviar el email
    const info = await transport.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Restablece tu cuenta Daniel Román Bienes Raices',
      text: "Restablece tu cuenta Daniel Román Bienes Raices",
      html: `
        <p>Hola ${nombre}, comprueba tu cuenta</p>
  
        <p>Tu cuenta ya casi esta lista, sigue el siguiente enlace para restablecerla: 
        <a href="${process.env.BACKEND_URL}/auth/olvide-password/${token}">Restablecer contraseña</a> </p>
  
        <p> Si no buscas restablecer tu cuenta ignora este mensaje</p>
      `
    })
  
    console.log("Se envío el email correctamente",info);
  } catch (error) {
    console.error("No se pudo enviar el email: ", error);
  }
}

const emailNuevoMensaje = async (datos) => {
  const { ownerEmail, nombre, tituloPropiedad } = datos;

  // Enviar el email
  await transport.sendMail({
    from: process.env.EMAIL_USER,
    to: ownerEmail,
    subject: 'Nuevos Mensajes 🏠',
    text: 'Nuevos Mensajes 🏠',
    html: `
      <p>Hola ${nombre}, comprueba tu cuenta</p>

      <p>Haz recibido un nuevo mensaje 📩 en tu propiedad "${tituloPropiedad}" revisala ahora mismo! 🚀 
        <a href="${process.env.BACKEND_URL}/propiedades">Tus propiedades</a> 
      </p>
    `,
  });
};

export{
  emailRegistro,
  emailOlvidePassword,
  emailNuevoMensaje
}