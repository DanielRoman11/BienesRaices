import { Dropzone } from "dropzone";

const token = document.querySelector("meta[name='csrf-token']").content

<<<<<<< HEAD
// console.log(token);
=======
>>>>>>> e8d41e9672cb992cb55b0777a7876a4f88a49e52

Dropzone.options.imagen = {
  dictDefaultMessage: "Sube tu imagen aquí",
  acceptedFiles: ".png,.jpg,.jpeg",
  maxFilesize: 4,
<<<<<<< HEAD
  maxFiles: 3,
  parallelUploads: 3,
=======
  maxFiles: 1,
  parallelUploads: 1,
>>>>>>> 1a87c01cdaa6de02955d3462fe60f1ad495308e9
  autoProcessQueue: false,
  addRemoveLinks: true,
  dictRemoveFile: "Borrar Imágen",
  dictMaxFilesExceeded: "Solo puedes subir una imagen",
  headers: {
    'CSRF-Token': token
  },
  paramName: 'imagen',
<<<<<<< HEAD
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
=======
  init: function () {
    const dropzone = this;
    const btnUpload = document.getElementById("publicar");

    btnUpload.addEventListener("click", () => {
      dropzone.processQueue();
    });

    dropzone.on("queuecomplete", function(){
      if(dropzone.getActiveFiles().length == 0){
        window.location.href = "/propiedades"
      }
    });
  }
}
>>>>>>> 1a87c01cdaa6de02955d3462fe60f1ad495308e9
