import multer from "multer";
import path from "path";
import { generarToken } from "../helpers/tokens.js";
import fs from "fs";

const storage = multer.diskStorage({
  destination: function(req, file, callback){
    callback(null, "./public/uploads/")
  },
  filename: function(req, file, callback){
    callback(null, generarToken() + path.extname(file.originalname)) //? Para que no hayan nombre iguales tendran un id único, pero conservando su extención
  }
})

const rutaCarpeta = "public/uploads"

if(!fs.existsSync(rutaCarpeta)){
  fs.mkdirSync(rutaCarpeta, {recursive: true});
  console.log(`La carpeta ${rutaCarpeta} ha sido creada exitosamente`);
}

const upload = multer({ storage })


export default upload