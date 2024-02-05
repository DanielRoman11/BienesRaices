import express from 'express'
import cookieParser from 'cookie-parser'
import db from './config/dbs.js'
import rutasUsuarios from './routes/usuario.Routes.js'
import rutasPropiedades from './routes/propiedades.Routes.js'
import rutasApi from './routes/api.Routes.js'
import rutasApp from './routes/app.routes.js'

//* Crear app
const app = express()

//* Habilitar lectura de datos de formularios
app.use( express.urlencoded({extended: true}));

//* Habilitar Cookie Parser
app.use( cookieParser());

//! Habilitar CSRF DEPRECATED
// app.use( csrf({ cookie: true }));

//* Conexión a la base de datos
try {
  await db.authenticate();
  db.sync();
  console.log('Conexión exitosa a la base de datos');
} catch (error) {
  console.log(error);
}

//* Habilitar el template engine (PUG)
app.set('view engine', 'pug');
app.set('views', './views');

//* Routes 
app.use('/auth', rutasUsuarios); // Esto es lo que se conoce como middleware
app.use('/propiedades', rutasPropiedades);
app.use('/api', rutasApi);

//* Carpeta pública
app.use(express.static('public'));  //? Contenedor de archivos estáticos


console.log(process.env.BD_NOMBRE);
console.log(process.env.BD_USER);
console.log(process.env.BD_PASS);
console.log(process.env.BD_PORT);


//* Definir un puerto y arrancar proyecto
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`El servidor en puerto ${port}`);
});