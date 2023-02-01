import express, { urlencoded } from 'express'
import rutas from './routes/routes.js'
import db from './config/dbs.js';

//* Crear app
const app = express()

//* Habilitar lectura de datos de formularios
app.use( express.urlencoded({extended: true}))

//* Conexión a la base de datos
try {
  await db.authenticate();
  db.sync();
  console.log('Conexión exitoso en la base de datos');
} catch (error) {
  console.log(error);
}

//* Habilitar el template engine (PUG)
app.set('view engine', 'pug');
app.set('views', './views');

//* Carpeta pública   
app.use(express.static('public'));  //? Contenedor de archivos estáticos

//* Routes 
app.use('/auth', rutas); // Esto es lo que se conoce como middleware

//* Definir un puerto y arrancar proyecto
const port = 3000;
app.listen(port, () => {
  console.log(`El servidor esta corriendo en ${port}`);
});