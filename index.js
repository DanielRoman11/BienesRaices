import express from 'express'
import cookieParser from 'cookie-parser'
import db from './config/dbs.js'
import rutasUsuarios from './routes/usuario.Routes.js'
import rutasPropiedades from './routes/propiedades.Routes.js'
import rutasApi from './routes/api.Routes.js'
import rutasApp from './routes/app.Routes.js'
import { identificarUsuario } from './middleware/indentificarUsuario.js'

//* Crear app
const app = express()

//* Habilitar lectura de datos de formularios
app.use(express.urlencoded({ extended: true }));

//* Habilitar Cookie Parser
app.use(cookieParser());

//! Habilitar CSRF DEPRECATED -> Cambiando a HELMET (prox.)
// app.use( csrf({ cookie: true }));

//* Conexión a la base de datos
try {
  await Promise.all([
    db.authenticate(),
    db.sync({force: true})
  ])
  .then(() => {
    console.log("Conexión establecida ✅");
  })
    
  // await db.sync();
} catch (err) {
  console.error("Hubo un error en la conexión a la base de datos", err);
}

//* Habilitar el template engine (PUG)
app.set('view engine', 'pug');
app.set('views', './views');

//* Routes 
app.use('/auth', rutasUsuarios); // Esto es lo que se conoce como middleware
app.use('/propiedades', rutasPropiedades);
app.use('/api', rutasApi);
app.use('/', identificarUsuario, rutasApp)

//* Carpeta pública
app.use(express.static('public'));  //? Contenedor de archivos estáticos
app.use(express.static("node_modules"));

//* Definir un puerto y arrancar proyecto
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`El servidor en puerto ${port}`);
});