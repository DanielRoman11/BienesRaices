import { exit } from "node:process"
import db from "../config/dbs.js"
//? Importando tablas
import categorias from "./categoria.js"
import precios from "./precio.js"
import usuarios from "./usuarios.js"
import propiedades from "./propiedades.js"

import { Categoria, Precio, Propiedad, Usuario } from "../models/index.js"

console.log(db.config);
console.log(process.env.BD_NOMBRE);

const importarDatos = async () =>{
    try {
        // Autenticar en la base de datos
        await db.authenticate()
        
        // Generar Columnas en la base de datos
        await db.sync()
        
        // Insertar columnas
        await Promise.all([
            Categoria.bulkCreate(categorias),
            Precio.bulkCreate(precios),
            Usuario.bulkCreate(usuarios),
            Propiedad.bulkCreate(propiedades)
        ]);

        console.log("Datos importados correctamente");
        exit();

    } catch (error) {
        console.error("Hubo un error al enviar la consulta SQL", error);
        exit(1);
    }
}

const eliminarDatos = async() => {
    try {
        // await db.authenticate()
        await db.sync({force: true})
        
        console.log("Datos eliminados correctamente 🧹");
        exit()
    } catch (error) {
        console.error("Hubo un error al enviar la consulta SQL", error);
        exit(1);
    }
}


if(process.argv[2] === "-i"){
    importarDatos();
}

if(process.argv[2] === "-e"){
    eliminarDatos();
}