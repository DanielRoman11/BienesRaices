import multer from "multer";
import path from "path"
import { generarToken } from "../helpers/tokens.js"

function uploadFile() {
  const storage = multer.diskStorage({
    destination: function(req, file, callback){callback(null, "./public/uploads/")},
    filename: function(req, file, callback){
      callback(null, generarToken() + path.extname(file.originalname)) //? Para que no hayan nombre iguales tendran un id único, pero conservando su extención
    }
  })
  
  const upload = multer({ storage: storage }).array("imagen", 3)

  return upload
}



export default uploadFile;