import { check, validationResult } from 'express-validator'
import { json } from 'sequelize';
import Usuario from '../models/Usuario.js'

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
  });
}
//? Método POST
const registroRespuesta = async (req, res) => {
  await check('nombre').notEmpty().withMessage('El nombre es obligatorio').run(req);
  await check('email').isEmail().withMessage('Ingrese un e-mail valido').run(req);
  await check('password').isLength({min: 6}).isStrongPassword().withMessage('La contraseña es muy débil').run(req);
  await check('repetir_password').equals('password').withMessage('Las contraseñas no coinciden').run(req);
  

  //* Verificar que el resultado este vacio


  let resultado = validationResult(req);

  res.json(resultado.array())

  const usuario = await Usuario.create(req.body)
  res.json(usuario)
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