import { Dropzone } from "dropzone";

const token = document.querySelector("meta[name='csrf-token']").content


Dropzone.options.imagen = {
  dictDefaultMessage: "Sube tus imágenes aquí",
  acceptedFiles: ".png,.jpg,.jpeg",
  maxFilesize: 4,
  maxFiles: 3,
  parallelUploads: 3,
  autoProcessQueue: false,
  addRemoveLinks: true,
  dictRemoveFile: "Borrar Imágen",
  dictMaxFilesExceeded: "El límite son 3 archivos",
  headers: {
    'CSRF-Token': token
  },
  paramName: 'imagen',
  init: function() {
    const dropzone = this;
    const btnPublicar = document.querySelector("#publicar")
    
    function enviarImagenes() {
      const archivosActivos = dropzone.getActiveFiles();
      const archivosEnCola = dropzone.getQueuedFiles();
      
      archivosActivos.forEach(archivo => {
        const archivoEncolado = file => file.name === archivo.name 
        const archivoEnCola = archivosEnCola.find( archivoEncolado(archivo));

        archivoEnCola ? console.warn("El archivo "+archivo.name+" ya estaba en cola") : dropzone.enqueueFile(archivo);
      });

      return dropzone.processQueue();
    }

    btnPublicar.addEventListener("click", enviarImagenes)
  }
}