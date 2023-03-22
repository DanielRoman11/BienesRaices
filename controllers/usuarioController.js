import { check, validationResult, body } from 'express-validator'
import Usuario from '../models/Usuario.js'
import { generarID } from '../helpers/tokens.js'
import { emailOlvidePassword, emailRegistro } from '../helpers/emails.js'

//* Formulario de inicio de sesión
//? Método GET
const formularioLogin = (req, res) => {
  res.render('auth/login', {
    pagina: 'Iniciar Sesión'
  });
}
//* Formulario de registro
//? Método GET
const formularioRegistro = (req, res) => {
  res.render('auth/registro', {
    pagina: 'Crear Cuenta',
    csrfToken: req.csrfToken()
  })
}

//? Método POST
const registroRespuesta = async (req, res) => {
  //* Validación de campos
  await check('nombre').notEmpty().withMessage('El nombre es obligatorio').run(req);
  await check('email').isEmail().withMessage('Ingrese un e-mail valido').run(req);
  await check('password').isLength({min: 6}).withMessage('La contraseña debe ser mayor a 6 caracteres').run(req);
  await check('rep_password').equals(req.body.password).withMessage('Las contraseñas no coinciden').run(req);
  
  let resultado = validationResult(req);
  //* Verificar que el resultado este vacio
  //* Validación de Errores
  if(!resultado.isEmpty()) {
    return res.render('auth/registro', {
      pagina: 'Crear Cuenta',
      errores: resultado.array(),
      csrfToken: req.csrfToken(),
      usuario: {
        nombre: req.body.nombre,
        email: req.body.email
      }
    });
  }

  
  // Extraer los datos
  const { nombre, email, password } = req.body

  // Verificar que el usuario no este duplicado
  const existeUsuario = await Usuario.findOne( {where: { email }});
  if(existeUsuario){
    return res.render('auth/registro', {
      pagina: 'Crear Cuenta',
      csrfToken: req.csrfToken(),
      errores: [{msg: "El usuario ya esta Registrado"}],
      usuario: {
        nombre: req.body.nombre,
        email: req.body.email
      }
    });
  }
  // Almacenar un Usuario
  const usuario = await Usuario.create({
    nombre,
    email,
    password,
    token: generarID()
  });

  // Envía email de confirmación
  emailRegistro({
    nombre: usuario.nombre,
    email: usuario.email,
    token: usuario.token
  })

  // Mostrar mensaje para la confirmación de la cuenta
  res.render('templates/mensaje', {
    pagina: 'Cuenta Creada Correctamente',
    mensaje: 'Se ha enviado un email para la confirmación de su cuenta, presione en el enlace'
  })
}

const confirmar = async(req, res) => {
  const { token } = req.params
  
  // Verificar si el token es válido
  const usuario = await Usuario.findOne({ where: { token }});

  if(!usuario){
    return res.render('auth/confirmar-cuenta', {
      pagina: 'Error al confirmar tu cuenta',
      mensaje: 'Hubo un error al confimar tu cuenta, intentalo de nuevo',
      error: true
    });
  }

  // Confirmar la cuenta
  usuario.token = null;
  usuario.confirmado = true;
  await usuario.save();

  return res.render('auth/confirmar-cuenta', {
    pagina: 'Cuenta Confirmada',
    mensaje: 'La cuenta se confirmó correctamente'
  })
}
//* Formulario Olvide mi contraseña
const formularioOlvidePassword = (req, res) => {
  res.render('auth/olvide-password', {
    pagina: 'Recupera tu acceso',
    csrfToken: req.csrfToken()
  });
}

const resetPassword = async(req, res) => {
  await check('email').isEmail().withMessage('Ingrese un e-mail valido').run(req);

  let resultado = validationResult(req);
  
  if(!resultado.isEmpty()) {
    return res.render('auth/olvide-password', {
      pagina: 'Recupera tu acceso',
      errores: resultado.array(),
      csrfToken: req.csrfToken(),
    });
  }

  //? Buscar el usuario mediante el correo para restablecer
  const { email } = req.body

  const usuario = await Usuario.findOne( {where: {email}  });
  if(!usuario) {
    return res.render('auth/olvide-password', {
      pagina: 'Recupera tu acceso a Bienes Raices',
      csrfToken: req.csrfToken(),
      errores: [{msg: 'El email no pertenece a un usuario'}]
    })
  }

  //? Generar un Token y enviar el email
  //Generando token
  usuario.token = generarID();
  await usuario.save();

  //Enviar email
  emailOlvidePassword({
    email: usuario.email,
    nombre: usuario.nombre,
    token: usuario.token
  })

  //Renderizar un email
  res.render('templates/mensaje', {
    pagina: 'Restablece tu contraseña',
    mensaje: 'Hemos enviado un email con las instrucciones'
  })
}

const comprobarToken = (req, res) => {

}
const nuevoPassword = (req, res) => {

}

export {
  formularioLogin,
  formularioRegistro,
  formularioOlvidePassword,
  registroRespuesta,
  confirmar,
  resetPassword,
  comprobarToken,
  nuevoPassword
}