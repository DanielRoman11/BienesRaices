import jwt from "jsonwebtoken";

const generarJWT = id => jwt.sign({ id: id },process.env.SECRET_JWT, {expiresIn: "1d"});


const generarToken = () => Math.random().toString(32).substring(2) + Date.now().toString(32);

export {
  generarToken
}