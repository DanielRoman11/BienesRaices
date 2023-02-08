import { check, validationResult, body } from 'express-validator'
import Usuario from '../models/Usuario.js'
import { generarID } from '../helpers/tokens.js'

//* Formulario de inicio de sesión
//? Método POST
const formularioLogin = (req, res) => {
  res.render('auth/login', {
    pagina: 'Iniciar Sesión'
  });
}
//* Formulario de registro
//? Método GET
const formularioRegistro = (req, res) => {
  res.render('auth/registro', {
    pagina: 'Crear Cuenta'

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
      errores: [{msg: "El usuario ya esta Registrado"}],
      usuario: {
        nombre: req.body.nombre,
        email: req.body.email
      }
    });
  }
  // Almacenar un Usuario
  await Usuario.create({
    nombre,
    email,
    password,
    token: generarID()
  });
}

//* Formulario Olvide mi contraseña
//? Método GET
const formularioOlvidePassword = (req, res) => {
  res.render('auth/olvide-password', {
    pagina: 'Recupera tu acceso'
  });
}

export {
  formularioLogin,
  formularioRegistro,
  formularioOlvidePassword,
  registroRespuesta
}