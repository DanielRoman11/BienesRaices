import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario.js";

export const identificarUsuario = async( req, res, next) =>{
  const { _token } = req.cookies;

  if(!_token){
    req.usuario = null
    return next;
  }
  return next
}