import jwt from "jsonwebtoken"
import { Usuario } from "../models/index.js"

const protegerRutas = async(req, res, next) =>{
  const { _token } = req.cookies

  if(!_token){
    return res.redirect("/auth/login")
  }
  try {
    //* Decodificar el token
    const decoded = jwt.verify(_token, process.env.SECRET_JWT)
    const usuario = await Usuario.scope("eliminarPassword").findByPk(decoded.id) //? El scope estan en el modelo
  
    if(usuario){
      req.usuario = usuario
    }
    else{
      return res.redirect("/auth/login");
    }
    return next();  
  } catch (error) {
    return res.clearCookie("_token").redirect("/auth/login");
  } 
}

export default protegerRutas