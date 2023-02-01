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
const registroRespuesta = (req, res) => {
  console.log(req.body);
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