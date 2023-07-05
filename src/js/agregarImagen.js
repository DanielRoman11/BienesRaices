import { Dropzone } from "dropzone";

const token = document.querySelector("meta[name='csrf-token']").content

// console.log(token);

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
    const btnPublicar = document.getElementById("btnPublicar")
    btnPublicar.addEventListener("click", e => {
      dropzone.getQueuedFiles();
    })
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
