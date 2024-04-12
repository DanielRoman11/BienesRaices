# <h1 align="center"> Bienes Raices </h1>

## Resumen del Proyecto
Plataforma de anuncios inmobiliarios que tiene como propósito facilitar la compra, venta y consulta de bienes inmuebles. La aplicación no cuenta con pagos virtuales, la venta se hace entre ambas partes facilitando el contacto del vendedor; en donde se publica una propiedad y una vez autenticado el cliente este deberá contactar directamente al vendedor.


## Getting Started
Esta aplicación es compatible con devcontainers

## Stack
Para esta apliación se esta utilizando el siguiente stack de tecnologías: NodeJs, Express, Pug, Tailwind y MySql. 

## Estado del proyecto
Actualmente el proyecto se encuentra en progreso, ya se realizaron varios despliegues en producción con normalidad, pero aún no se han hecho pruebas, hacen falta varias funcionalidades como el acceso a usuarios autenticados a contenido público de otros usuarios, la pagina de inicio y la personalización del usuario.

## Característica de la aplicación

### Seguridad
* Se crearon distintos Pipelines o validaciones con vista para poder enfrentar los errores de digitación de los usuarios además las consultas en los forms se validan con `Sequelize`.
* La validación y seguridad de formularios se utilizó `Csurf`, `ExpressValidator` y `Sequelize`. Con complementos como `CookieParser`.
* La para seguridad de contraseñas se utilizó `Bcrypt` y `Sequelize`, utilizando Hooks como beforeCreate para hashear las contraseñas atraves de `Bcrypt` y hooks como Scoop para cortar la lectura por consola al intentar acceder a los datos de algún usuario.
* El acceso es a través de cookies y se añade un prototype al Modelo Usuario para validar las contraseñas.
* Existen diferentes middlewares para poder acceder al contenido privado de cada usuario y es necesario que estos esten validados a través de los tokens de `JWT`.

### Usuarios:
- [x] Registro de Usuarios
      - Con creación de llaves en las cookies usando `JWT` y `CookieParser` envío de emails para confirmación con `NodeMailer`.
- [x] Edición
      - Usuando `NodeMailer` para la validación del usuario y generando un nuevo token.
- [x] Autenticación
      - Usando `JWT` para la autenticación y los hooks de `Sequelize`.

Se esta utilizando el siguiente schema para los usuarios:

| Campo       | Tipo         | Permite Nulos |
|-------------|--------------|---------------|
| nombre      | STRING       | No            |
| email       | STRING       | No            |
| password    | STRING       | No            |
| token       | STRING       | Sí            |
| confirmado  | BOOLEAN      | Sí            |

### Propiedades:
- [x] Creación de propiedades.
      - Las propiedades tendra un UUID para poder acceder a ellas, para ello se utilizará `Sequelize`, tendrán una imagen de referencia para poder conocer la fachada de la propiedad, esto se hará mediante `Webpack`, `dropzone` y `multer`. Además se mostrará su ubicación en el mapa a través de la API de Leaftlet en su versión 1.8.0.
- [x] Vista y lectura de propiedades.
      - Al ingresar a la dirección `/propiedades`, el usuario podrá de manera resumida y con un paginador, acceder a las propiedades que son de su autoría
- [x] Actualización de propiedades.
      - Cada propiedad permite que el usuario actualice la información de la propiedad, la imagen y la ubicación en el mapa de la misma. Al mismo tiempo, si el usuario así lo desea, podrá eliminar la propiedad creada.
- [ ] Acceso a propiedades externas
      - El usuario tendrá la capacidad ver las propiedades de otros usuarios. Si este usuario está autenticado en la página tendrá la capacidad de consultar a detalle las propiedades del inmueble y al mismo tiempo comunicarse con el dueño de este si es que presenta interés en realizar algún trato o comunicación en particular.

> [!IMPORTANT]
> Aún se encuentra en desarrollo el acceso público a las propiedades de los otros usuarios. Aunque ya se tiene acceso se esta trabajando en la separación con usuarios autenticados y no autenticados en el inicio de la página.

Los usuarios pueden crear una lista de propiedades que deseen vender y actualizar su estado a medida que las propiedades se venden o se retiran de la lista. Al mismo tiempo es posible editar la imagen de la propiedad, la información y la ubicación de la propiedad. El Schema utilizado es el siguiente:
  
| Campo          | Tipo         | Permite Nulos | Valor Predeterminado | Clave Primaria |
|----------------|--------------|---------------|-----------------------|----------------|
| id             | UUID         | No            | UUIDV4                | Sí             |
| titulo         | STRING(100)  | No            | -                     | No             |
| descripcion    | TEXT         | No            | -                     | No             |
| habitaciones   | INTEGER      | No            | -                     | No             |
| estacionamiento | INTEGER      | No            | -                     | No             |
| wc             | INTEGER      | No            | -                     | No             |
| calle          | STRING       | No            | -                     | No             |
| lat            | STRING(60)   | No            | -                     | No             |
| lng            | STRING(60)   | No            | -                     | No             |
| imagen         | STRING       | No            | -                     | No             |
| publicado      | BOOLEAN      | No            | false                 | No             |

## <h2 id="acceso-al-proyecto"> Acceso al proyecto </h2>
Es necesario que el usuario corra en consola el siguiente comando antes de iniciar cualquier acción de prueba, ya que es necesario instalar las librerías que se encuentran en el package.json
`npm i`

Se definieron las siguientes variables de entorno (`DotEnv`) para la ejecución del proyecto: 

> [!WARNING]
> Estas pueden que cambien dependiendo de la versión del proyecto

1.  Database:
    - `BD_NOMBRE`
    - `BD_USER`
    - `BD_PASS`
    - `BD_HOST`
    - `BD_PORT`

2.  Nodemailer:
    - `EMAIL_HOST`
    - `EMAIL_PORT`
    - `MAIL_USER`
    - `EMAIL_PASS`

3.  JWT:
    - `SECRET_JWT`

4.  Cloudinary:
    - `CLOUD_NAME
    - `CLOUD_KEY`
    - `CLOUD_SECRET` 

5.  General:
    - `BACKEND_URL`
    - `PORT`

## Tecnologías utilizadas
**Dependencias:**

- `bcrypt`: ^5.1.0
- `cookie-parser`: ^1.4.6
- `dropzone`: ^5.9.3 (Eliminado) -> Cloudinary: ^2.0.1
- `express`: ^4.18.2
- `express-validator`: ^6.14.3
- `jsonwebtoken`: ^9.0.0
- `multer`: ^1.4.5-lts.1
- `mysql2`: ^3.0.1
- `pug`: ^3.0.2
- `sequelize`: ^6.28.0

**Dependencias de Desarrollo:**

- `autoprefixer`: ^10.4.13
- `concurrently`: ^8.0.1
- `nodemailer`: ^6.9.1
- `postcss`: ^8.4.21
- `postcss-cli`: ^10.1.0
- `tailwindcss`: ^3.4.1
- `webpack`: ^5.78.0 (Eliminado) -> Esbuild: ^0.19.11
- `webpack-cli`: ^5.0.1 (Eliminado) -> No es necesario en EsBuild


