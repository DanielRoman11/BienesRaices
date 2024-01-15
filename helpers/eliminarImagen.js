import { unlink } from 'node:fs/promises';

const eliminarArchivo = async(rutaArchivo) => {
  
  await unlink(rutaArchivo)
    .then(()=>{
      console.log("Archivo eliminado correctamente de la ruta: ", rutaArchivo);
    })
    .catch(error =>{
      console.log("Error al eliminar el archivo: ", error);
    })
  
  // unlink(rutaArchivo, (error) => {
  //   if (error) {
  //     console.error('Error al eliminar el archivo:', error);
  //   } else {
  //     console.log('Archivo eliminado correctamente');
  //   }
  // });
};

export default eliminarArchivo;