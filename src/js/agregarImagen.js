import { Dropzone } from "dropzone";

const token = document.querySelector("meta[name='csrf-token']").content

// console.log(token);

Dropzone.options.imagen = {
  dictDefaultMessage: "Sube tus imágenes aquí",
  acceptedFiles: ".png,.jpg,.jpeg",
  maxFilesize: 4,
  maxFiles: 1,
  parallelUploads: 1,
  autoProcessQueue: false,
  addRemoveLinks: true,
  dictRemoveFile: "Borrar Imágen",
  dictMaxFilesExceeded: "Solo puedes subir una imagen",
  headers: {
    'CSRF-Token': token
  },
  paramName: 'imagen',
  init: function () {
    const dropzone = this;
    const btnUpload = document.getElementById("publicar");

    btnUpload.addEventListener("click", () => {
      dropzone.processQueue();
    });
  }
}
