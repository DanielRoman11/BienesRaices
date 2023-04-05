import jwt from "jsonwebtoken";

const generarJWT = datos => jwt.sign({ id: datos.id, nombre: datos.nombre },process.env.SECRET_JWT, {expiresIn: "1d"});


const generarToken = () => Math.random().toString(32).substring(2) + Date.now().toString(32);

export {
  generarJWT,
  generarToken
}