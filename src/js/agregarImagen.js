import { Dropzone } from "dropzone";

Dropzone.options.imagen = {
  dictDefaultMessage: "Sube tus imágenes aquí",
  acceptFiles: ".png,.jpg,.jpeg",
  maxFilesize: 4,
  maxFiles: 3,
  parallelUploads: 3,
  autoProcessQueue: false,
  addRemoveLinks: true,
  dictRemoveFile: "Borrar Imágen",
  dictMaxFilesExceeded: "El límite son 3 archivos"
}