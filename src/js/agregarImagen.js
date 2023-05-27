import { Dropzone } from "dropzone";

const token = document.querySelector("meta[name='csrf-token']").content

console.log(token);

Dropzone.options.imagen = {
  dictDefaultMessage: "Sube tus imágenes aquí",
  acceptedFiles: ".png,.jpg,.jpeg",
  maxFilesize: 4,
  maxFiles: 3,
  parallelUploads: 3,
  autoProcessQueue: true,
  addRemoveLinks: true,
  dictRemoveFile: "Borrar Imágen",
  dictMaxFilesExceeded: "El límite son 3 archivos",
  headers: {
    'CSRF-Token': token
  },
  paramName: 'imagen'
}