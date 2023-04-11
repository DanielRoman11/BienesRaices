import { check, validationResult } from 'express-validator'
import Usuario from '../models/Usuario.js'
import bcrypt from "bcrypt";
import { generarJWT, generarToken } from '../helpers/tokens.js'
import { emailOlvidePassword, emailRegistro } from '../helpers/emails.js'

//* Formulario de inicio de sesión
//? Método GET
const formularioLogin = (req, res) => {
  res.render('auth/login', {
    pagina: 'Iniciar Sesión',
    csrfToken: req.csrfToken()
  });
}
const login = async(req, res) => {
  await check("email").isEmail().withMessage("Eso no parece un email").run(req);
  await check("password").notEmpty().withMessage("La contraseña no puede ir vacia").run(req);

  const { email, password } = req.body

  const errores = validationResult(req);
  if(!errores.isEmpty()){
    return res.render('auth/login', {
      email: email,
      pagina: 'Iniciar Sesión',
      errores: errores.array(),
      csrfToken: req.csrfToken()
    });
  }

  const usuario = await Usuario.findOne({where: {email}});
  if(!usuario){
    return res.render('auth/login', {
      email: email,
      pagina: 'Iniciar Sesión',
      errores: [{msg: "El email no se ha registrado"}],
      csrfToken: req.csrfToken()
    });
  }

  if(!usuario.confirmado){
    return res.render('auth/login', {
      email: email,
      pagina: 'Iniciar Sesión',
      errores: [{msg: "Esta cuenta no ha sido confirmada"}],
      csrfToken: req.csrfToken()
    });
  }

  if(!usuario.verficarPassword(password)){
    return res.render('auth/login', {
      email: email,
      pagina: 'Iniciar Sesión',
      errores: [{msg: "Contraseña incorrecta"}],
      csrfToken: req.csrfToken()
    });
  }

  const token = generarJWT({ id: usuario.id, nombre: usuario.nombre });

  console.log(token);

  //Almacenar en un Cookie
  return res.cookie('_token', token, {
    httpOnly: true,
    // secure: true, //? Solo si tiene certificado SSL
    // sameSite:true //? Solo si tiene certificado SSL
  }).redirect('/mis-propiedades');
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
  await check('password').isLength({min: 5}).withMessage('La contraseña debe ser mayor o igual 5 caracteres').run(req);
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
  const { nombre, email, password } = req.body;

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
    token: generarToken()
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
    mensaje: 'La cuenta se confirmó correctamente',
  });
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
      csrfToken: req.csrfToken()
    });
  }

  //? Buscar el usuario mediante el correo para restablecer
  const { email } = req.body

  const usuario = await Usuario.findOne( {where: {email}  });
  if(!usuario) {
    return res.render('auth/olvide-password', {
      pagina: 'Recupera tu acceso',
      email: email,
      errores: [{msg: 'El email no pertenece a un usuario'}],
      csrfToken: req.csrfToken()
    })
  }

  //? Generar un Token y enviar el email
  //Generando token
  usuario.token = generarToken();
  await usuario.save();

  //Enviar email
  emailOlvidePassword({
    email: usuario.email,
    nombre: usuario.nombre,
    token: usuario.token
  });

  //Renderizar mensaje
  return res.render('templates/mensaje', {
    pagina: 'Restablece tu contraseña',
    mensaje: 'Hemos enviado un email con las instrucciones'
  });
}

const comprobarPasswordToken = async(req, res) => {
  const { token } = req.params

  const usuario = await Usuario.findOne({where: {token}});

  if(!usuario){
    return res.render('auth/confirmar-cuenta', {
      pagina: 'Reestablece tu contraseña',
      mensaje: 'Hubo un error al tratar de reestablecer tu contraseña, intentalo de nuevo',
      error: true
    });
  }

  return res.render("auth/reiniciar-password", {
    pagina: "Reinicia tu contraseña",
    csrfToken: req.csrfToken()
  });
}

const nuevaPassword = async(req, res, next) => {
  await check('password').isLength({min: 5}).withMessage('La contraseña debe ser mayor o igual a 5 caracteres').run(req);
  await check('repPassword').equals(req.body.password).withMessage('Las contraseñas no coinciden').run(req);
  
  const errores = validationResult(req);

  if(!errores.isEmpty()){
    return res.render("auth/reiniciar-password", {
      pagina: "Reinicia tu contraseña",
      errores: errores.array(),
      csrfToken: req.csrfToken()
    });
  }
  const { token } = req.params;
  const { password } = req.body;

  const usuario = await Usuario.findOne({where: {token}});
  
  const salt = await bcrypt.genSalt(10);
  usuario.password = await bcrypt.hash(password, salt);
  usuario.token = null;
  usuario.confirmado = true;
  await usuario.save();

  return res.render('auth/confirmar-cuenta', {
    pagina: 'Se cambio la contraseña',
    mensaje: 'La contraseña fue cambiada satisfactoriamente',
  });
}

export {
  formularioLogin,
  login,
  formularioRegistro,
  formularioOlvidePassword,
  registroRespuesta,
  confirmar,
  resetPassword,
  comprobarPasswordToken,
  nuevaPassword
}