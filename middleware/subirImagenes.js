import multer from "multer";
import { nanoid } from "nanoid";
import path from "path";

const storage = multer.diskStorage({
  filename: function(req, file, cb) {
    cb(null, `${nanoid(10)}${path.extname(file.originalname)}`)
  }
})

const fileFilter = (req, file, cb) => {
  const allowedExtensions = ['.png', '.jpg', '.jpeg'];
  const fileExtension = path.extname(file.originalname).toLowerCase();

  if (!allowedExtensions.includes(fileExtension)) {
    const error = new Error('Tipo de archivo no permitido');
    error.httpStatusCode = 400;
    return cb(error, false);
  }
  
  cb(null, true);
};

export const subirImagen = multer({ 
  storage, 
  fileFilter,
  limits: {
    fileSize: 10485760
  }
});