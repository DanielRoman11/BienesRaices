import express from 'express'
import csrf from 'csurf'
import cookieParser from 'cookie-parser'
import rutasUsuarios from './routes/usuario.Routes.js'
import rutasPropiedades from './routes/propiedades.Routes.js'
import db from './config/dbs.js'

//* Crear app
const app = express()

//* Habilitar lectura de datos de formularios
app.use( express.urlencoded({extended: true}));

//* Habilitar Cookie Parser
app.use( cookieParser());

//* Habilitar CSRF
app.use( csrf({ cookie: true }));

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
app.use('/', rutasPropiedades);

//* Carpeta pública   
app.use(express.static('public'));  //? Contenedor de archivos estáticos


//* Definir un puerto y arrancar proyecto
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`El servidor en puerto ${port}`);
});