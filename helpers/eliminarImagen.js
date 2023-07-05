import { unlink } from 'node:fs';

const eliminarArchivo = (rutaArchivo) => {
  unlink(rutaArchivo, (error) => {
    if (error) {
      console.error('Error al eliminar el archivo:', error);
    } else {
      console.log('Archivo eliminado correctamente');
    }
  });
};

export default eliminarArchivo;